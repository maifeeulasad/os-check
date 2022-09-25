enum OsType {
  MacOS = "MacOS",
  iOS = "iOS",
  Windows = "Windows",
  Android = "Android",
  Linux = "Linux",
  Others = "Others OS",
}

const osCheck = (): OsType => {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = [
    "Macintosh",
    "MacIntel",
    "MacPPC",
    "Mac68K",
    "darwin",
  ];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return OsType.MacOS;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    return OsType.iOS;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return OsType.Windows;
  } else if (/Android/.test(userAgent)) {
    return OsType.Android;
  } else if (/Linux/.test(platform)) {
    return OsType.Linux;
  }
  return OsType.Others;
};

export { osCheck, OsType };
