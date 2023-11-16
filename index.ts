/**
 * Enumeration for different types of operating systems.
 */
enum OsType {
  MacOS = "MacOS",
  iOS = "iOS",
  Windows = "Windows",
  Android = "Android",
  Linux = "Linux",
  Others = "Others OS",
}

/**
 * Determines the operating system of the user's device.
 * It uses the navigator's user agent and platform information to identify the OS.
 * 
 * @returns {OsType} The detected type of operating system.
 * 
 * @example
 * import { osCheck, OsType } from "os-check";
 * 
 * const userOS = osCheck();
 * console.log(`The user's operating system is: ${userOS}`);
 * 
 * @note
 * - This function may not be accurate in all cases, as the user agent can be spoofed.
 * - It covers major operating systems but might not detect all existing or future OS types.
 */
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
