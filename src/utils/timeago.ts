import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const globalForTimeago = global as unknown as {
  timeagoInit: true | undefined;
};

if (!globalForTimeago.timeagoInit) {
  TimeAgo.addDefaultLocale(en);
  globalForTimeago.timeagoInit = true;
}
