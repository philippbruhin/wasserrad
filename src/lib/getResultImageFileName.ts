export function getResultImageFileName(score: number): string {
  switch (score) {
    case 0:
      return "hero_00_4bf91d34e8a7.png";
    case 1:
      return "hero_01_9bc61e7fe22e.png";
    case 2:
      return "hero_02_5e1d52c48d08.png";
    case 3:
      return "hero_03_c3a7eb209a4d.png";
    case 4:
      return "hero_04_b6a79a0c2f08.png";
    case 5:
      return "hero_05_3a7e895f1186.png";
    case 6:
      return "hero_06_e2c9d8a7f65d.png";
    case 7:
      return "hero_07_81fc12494c71.png";
    case 8:
      return "hero_08_afe6d59867b3.png";
    case 9:
      return "hero_09_d42c3f833e95.png";
    case 10:
      return "hero_10_7bf491e09002.png";
    default:
      throw new Error("Score must be between 0 and 10");
  }
}
