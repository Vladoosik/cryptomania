// modules
import React, { memo, useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
//utils0
import { CoverConfig } from "../../utils/CoverConfig";

const Cover = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} options={CoverConfig} />
  );
};

export default memo(Cover);
