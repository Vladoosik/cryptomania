// modules
import { action, configure, makeObservable, observable } from "mobx";
// config
import { fb } from "../config/firebase";
// store
import AuthStore from "./auth";

configure({ enforceActions: "never" });

class GetAPI {
  topCrypto = [];
  categories = [];
  favorites = [];
  pending = true;
  pending50 = true;
  pending100 = true;
  loading = false;
  dataLoaded = false;

  constructor() {
    makeObservable(this, {
      favorites: observable,
      topCrypto: observable,
      categories: observable,
      pending: observable,
      pending50: observable,
      pending100: observable,
      dataLoaded: observable,
      loading: observable,
      getCategories: action,
      getCrypto: action,
      setFavorite: action,
      getFavoritesFromDatabase: action,
    });
  }

  getCrypto = async (url) => {
    this.pending = true;
    try {
      const response = await fetch(url);
      this.topCrypto = await response.json();
    } catch (e) {
      console.warn(e);
    }
    this.pending = false;
  };

  getCategories = async (url) => {
    this.pending100 = true;
    try {
      const response = await fetch(url);
      this.categories = await response.json();
    } catch (e) {
      console.warn(e);
    }
    this.pending100 = false;
  };

  setFavorite = async (item) => {
    try {
      const userRef = fb.collection("users").doc(AuthStore.sessionUser?.uid);

      const userDoc = await userRef.get();
      const userData = userDoc.data() || {};
      const currentFavorites = userData.favorites || [];

      const index = currentFavorites.findIndex(
        (favorite) => favorite.id === item.id
      );

      if (index === -1) {
        const newFavorites = [...currentFavorites, item];
        await userRef.set({ favorites: newFavorites }, { merge: true });
        this.favorites = newFavorites;
        console.log("Item added to favorites:", item);
      } else {
        const updatedFavorites = currentFavorites.filter(
          (favorite) => favorite.id !== item.id
        );
        this.favorites = updatedFavorites;
        await userRef.set({ favorites: updatedFavorites }, { merge: true });
        console.log("Item removed from favorites:", item);
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  getFavoritesFromDatabase = async () => {
    try {
      this.loading = true;
      this.dataLoaded = false;

      const userRef = fb.collection("users").doc(AuthStore.sessionUser?.uid);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        const userData = userDoc.data();
        if (userData && userData.favorites) {
          this.favorites = userData.favorites;
        }
      }

      this.loading = false;
      this.dataLoaded = true;
    } catch (error) {
      console.error("Error fetching favorites:", error);
      this.loading = false;
    }
  };
}
export default new GetAPI();
