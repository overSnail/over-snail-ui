export function format(date, fmt) {
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

export function resolveDateCell(timestamp) {
  timestamp = new Date(timestamp).setDate(1);
  const date = new Date(timestamp);
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  // 获取该月的第一天
  const currentDay = date.getDay();

  console.log(currentYear, currentMonth, currentDay);

  const daySum = [
    31,
    28 + isLeapYear(currentYear),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ][currentMonth];

  const list = new Array(42).fill({});

  // 填充上个月的日期
  if (currentDay > 0) {
    __fillBeforeMonthDate(list, currentDay, timestamp);
  }

  // 填充当月的日期
  __fillCurrentMonthDate(list, daySum, timestamp, currentDay);

  // 填充下个月的日期
  __fillAfterMonthDate(list, daySum, currentDay, timestamp);

  return list;
}

/**
 * @description 填充上个月的日期数据
 */
function __fillBeforeMonthDate(list, currentDay, startTimeStamp) {
  for (let i = currentDay; i > 0; i--) {
    const date = new Date(startTimeStamp - 86400000 * i);

    list[currentDay - i] = {
      label: date.getDate(),
      value: startTimeStamp - 86400000 * i,
      format: format(date, "yyyy-MM-dd"),
      isNow: __isNowADay(format(date, "yyyy-MM-dd")),
      isBefore: true
    };
  }
}

/**
 * @description 填充当前月的日期数据
 */
function __fillCurrentMonthDate(list, daySum, startTimeStamp, currentDay) {
  for (let i = 0; i < daySum; i++) {
    const timestamp = startTimeStamp + 86400000 * i;

    list[i + currentDay] = {
      label: i + 1,
      value: timestamp,
      format: format(new Date(timestamp), "yyyy-MM-dd"),
      isNow: __isNowADay(format(new Date(timestamp), "yyyy-MM-dd"))
    };
  }
}

/**
 * @description 填充下个月的日期数据
 */
function __fillAfterMonthDate(list, daySum, currentDay, startTimeStamp) {
  startTimeStamp = startTimeStamp + 86400000 * daySum;
  for (let i = daySum + currentDay, k = 0; i < 42; i++, k++) {
    let nowStamp = startTimeStamp + k * 86400000;

    const date = new Date(nowStamp);
    list[i] = {
      label: date.getDate(),
      value: nowStamp,
      format: format(date, "yyyy-MM-dd"),
      isNow: __isNowADay(format(date, "yyyy-MM-dd")),
      isAfter: true
    };
  }
}

/**
 * @description 是否是当天
 * @param {string} dateformat 格式化后的时间，默认格式为yyyy-MM-dd
 */
function __isNowADay(dateformat) {
  return format(new Date(), "yyyy-MM-dd") === dateformat;
}

/**
 * @description 是否为闰年
 * @param {number} year 年
 */
export function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;
}
