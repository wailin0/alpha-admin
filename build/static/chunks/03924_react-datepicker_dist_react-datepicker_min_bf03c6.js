(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/03924_react-datepicker_dist_react-datepicker_min_bf03c6.js", {

"[project]/node_modules/.pnpm/react-datepicker@7.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-datepicker/dist/react-datepicker.min.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/*!
  react-datepicker v7.3.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, __turbopack_require__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/react-onclickoutside@6.13.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-onclickoutside/dist/react-onclickoutside.es.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addDays.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addHours.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMinutes.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addQuarters.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addSeconds.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addYears.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarMonths.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarQuarters.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarYears.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDate.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDay.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getHours.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getMinutes.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getQuarter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getSeconds.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getTime.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isAfter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isDate.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isEqual.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameQuarter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isValid.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isWithinInterval.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/max.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/min.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parseISO.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/set.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setHours.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMinutes.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setQuarter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setSeconds.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfQuarter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subDays.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subMonths.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subQuarters.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subWeeks.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subYears.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/@floating-ui+react@0.26.20_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js [app-client] (ecmascript) <facade>"), __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)")) : "function" == typeof define && define.amd ? ((r)=>r !== undefined && __turbopack_export_value__(r))(t(exports, __turbopack_require__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/react-onclickoutside@6.13.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-onclickoutside/dist/react-onclickoutside.es.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addDays.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addHours.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMinutes.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addQuarters.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addSeconds.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addYears.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarMonths.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarQuarters.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInCalendarYears.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDate.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDay.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getHours.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getMinutes.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getQuarter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getSeconds.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getTime.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isAfter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isDate.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isEqual.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameQuarter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isValid.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isWithinInterval.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/max.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/min.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parseISO.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/set.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setHours.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMinutes.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setQuarter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setSeconds.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfQuarter.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subDays.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subMonths.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subQuarters.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subWeeks.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subYears.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.js [app-client] (ecmascript)"), __turbopack_require__("[project]/node_modules/.pnpm/@floating-ui+react@0.26.20_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js [app-client] (ecmascript) <facade>"), __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"))) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).DatePicker = {}, e.clsx, e.React, e.onClickOutside, e.addDays, e.addHours, e.addMinutes, e.addMonths, e.addQuarters, e.addSeconds, e.addWeeks, e.addYears, e.differenceInCalendarDays, e.differenceInCalendarMonths, e.differenceInCalendarQuarters, e.differenceInCalendarYears, e.endOfDay, e.endOfMonth, e.endOfWeek, e.endOfYear, e.format, e.getDate, e.getDay, e.getHours, e.getISOWeek, e.getMinutes, e.getMonth, e.getQuarter, e.getSeconds, e.getTime, e.getYear, e.isAfter, e.isBefore, e.isDate, e.isEqual$1, e.isSameDay$1, e.isSameMonth$1, e.isSameQuarter$1, e.isSameYear$1, e.isValid$1, e.isWithinInterval, e.max, e.min, e.parse, e.parseISO, e.set, e.setHours, e.setMinutes, e.setMonth, e.setQuarter, e.setSeconds, e.setYear, e.startOfDay, e.startOfMonth, e.startOfQuarter, e.startOfWeek, e.startOfYear, e.subDays, e.subMonths, e.subQuarters, e.subWeeks, e.subYears, e.toDate, e.react, e.ReactDOM);
}(this, function(e, t, r, n, a, o, s, i, l, c, p, d, u, f, h, m, v, g, D, y, k, w, S, b, M, C, _, E, P, Y, x, N, O, I, T, R, L, A, F, H, W, Q, q, K, B, V, j, U, $, z, X, G, J, Z, ee, te, re, ne, ae, oe, se, ie, le, ce, pe) {
    "use strict";
    function de(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var ue = de(r), fe = de(n), he = de(pe), me = function(e, t) {
        return me = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }, me(e, t);
    };
    function ve(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function r() {
            this.constructor = e;
        }
        me(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
    }
    var ge = function() {
        return ge = Object.assign || function(e) {
            for(var t, r = 1, n = arguments.length; r < n; r++)for(var a in t = arguments[r])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
        }, ge.apply(this, arguments);
    };
    function De(e, t, r) {
        if (r || 2 === arguments.length) for(var n, a = 0, o = t.length; a < o; a++)!n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
        return e.concat(n || Array.prototype.slice.call(t));
    }
    "function" == typeof SuppressedError && SuppressedError;
    var ye, ke = function(e) {
        var t = e.showTimeSelectOnly, r = void 0 !== t && t, n = e.showTime, a = void 0 !== n && n, o = e.className, s = e.children, i = r ? "Choose Time" : "Choose Date".concat(a ? " and Time" : "");
        return ue.default.createElement("div", {
            className: o,
            role: "dialog",
            "aria-label": i,
            "aria-modal": "true"
        }, s);
    };
    function we() {
        return "undefined" != typeof window ? window : globalThis;
    }
    !function(e) {
        e.ArrowUp = "ArrowUp", e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Home = "Home", e.End = "End", e.Enter = "Enter", e.Space = " ", e.Tab = "Tab", e.Escape = "Escape", e.Backspace = "Backspace", e.X = "x";
    }(ye || (ye = {}));
    var Se = 12, be = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    function Me(e) {
        if (null == e) return new Date;
        var t = "string" == typeof e ? B.parseISO(e) : le.toDate(e);
        return Ce(t) ? t : new Date;
    }
    function Ce(e, t) {
        return H.isValid(e) && !O.isBefore(e, null != t ? t : new Date("1/1/1800"));
    }
    function _e(e, t, r) {
        if ("en" === r) return k.format(e, t, {
            useAdditionalWeekYearTokens: !0,
            useAdditionalDayOfYearTokens: !0
        });
        var n = r ? Ke(r) : void 0;
        return r && !n && console.warn('A locale object was not found for the provided string ["'.concat(r, '"].')), !n && qe() && Ke(qe()) && (n = Ke(qe())), k.format(e, t, {
            locale: n,
            useAdditionalWeekYearTokens: !0,
            useAdditionalDayOfYearTokens: !0
        });
    }
    function Ee(e, t) {
        var r = t.dateFormat, n = t.locale, a = Array.isArray(r) && r.length > 0 ? r[0] : r;
        return e && _e(e, a, n) || "";
    }
    function Pe(e, t) {
        var r = t.hour, n = void 0 === r ? 0 : r, a = t.minute, o = void 0 === a ? 0 : a, s = t.second, i = void 0 === s ? 0 : s;
        return j.setHours(U.setMinutes(X.setSeconds(e, i), o), n);
    }
    function Ye(e) {
        return J.startOfDay(e);
    }
    function xe(e, t, r) {
        var n = Ke(t || qe());
        return te.startOfWeek(e, {
            locale: n,
            weekStartsOn: r
        });
    }
    function Ne(e) {
        return Z.startOfMonth(e);
    }
    function Oe(e) {
        return re.startOfYear(e);
    }
    function Ie(e) {
        return ee.startOfQuarter(e);
    }
    function Te() {
        return J.startOfDay(Me());
    }
    function Re(e) {
        return v.endOfDay(e);
    }
    function Le(e, t) {
        return e && t ? F.isSameYear(e, t) : !e && !t;
    }
    function Ae(e, t) {
        return e && t ? L.isSameMonth(e, t) : !e && !t;
    }
    function Fe(e, t) {
        return e && t ? A.isSameQuarter(e, t) : !e && !t;
    }
    function He(e, t) {
        return e && t ? R.isSameDay(e, t) : !e && !t;
    }
    function We(e, t) {
        return e && t ? T.isEqual(e, t) : !e && !t;
    }
    function Qe(e, t, r) {
        var n, a = J.startOfDay(t), o = v.endOfDay(r);
        try {
            n = W.isWithinInterval(e, {
                start: a,
                end: o
            });
        } catch (e) {
            n = !1;
        }
        return n;
    }
    function qe() {
        return we().__localeId__;
    }
    function Ke(e) {
        if ("string" == typeof e) {
            var t = we();
            return t.__localeData__ ? t.__localeData__[e] : void 0;
        }
        return e;
    }
    function Be(e, t) {
        return _e($.setMonth(Me(), e), "LLLL", t);
    }
    function Ve(e, t) {
        return _e($.setMonth(Me(), e), "LLL", t);
    }
    function je(e, t) {
        var r = void 0 === t ? {} : t, n = r.minDate, a = r.maxDate, o = r.excludeDates, s = r.excludeDateIntervals, i = r.includeDates, l = r.includeDateIntervals, c = r.filterDate;
        return tt(e, {
            minDate: n,
            maxDate: a
        }) || o && o.some(function(t) {
            var r;
            return t instanceof Date ? He(e, t) : He(e, null !== (r = t.date) && void 0 !== r ? r : new Date);
        }) || s && s.some(function(t) {
            var r = t.start, n = t.end;
            return W.isWithinInterval(e, {
                start: r,
                end: n
            });
        }) || i && !i.some(function(t) {
            return He(e, t);
        }) || l && !l.some(function(t) {
            var r = t.start, n = t.end;
            return W.isWithinInterval(e, {
                start: r,
                end: n
            });
        }) || c && !c(Me(e)) || !1;
    }
    function Ue(e, t) {
        var r = void 0 === t ? {} : t, n = r.excludeDates, a = r.excludeDateIntervals;
        return a && a.length > 0 ? a.some(function(t) {
            var r = t.start, n = t.end;
            return W.isWithinInterval(e, {
                start: r,
                end: n
            });
        }) : n && n.some(function(t) {
            var r;
            return t instanceof Date ? He(e, t) : He(e, null !== (r = t.date) && void 0 !== r ? r : new Date);
        }) || !1;
    }
    function $e(e, t) {
        var r = void 0 === t ? {} : t, n = r.minDate, a = r.maxDate, o = r.excludeDates, s = r.includeDates, i = r.filterDate;
        return tt(e, {
            minDate: n ? Z.startOfMonth(n) : void 0,
            maxDate: a ? g.endOfMonth(a) : void 0
        }) || (null == o ? void 0 : o.some(function(t) {
            return Ae(e, t instanceof Date ? t : t.date);
        })) || s && !s.some(function(t) {
            return Ae(e, t);
        }) || i && !i(Me(e)) || !1;
    }
    function ze(e, t, r, n) {
        var a = x.getYear(e), o = _.getMonth(e), s = x.getYear(t), i = _.getMonth(t), l = x.getYear(n);
        return a === s && a === l ? o <= r && r <= i : a < s && (l === a && o <= r || l === s && i >= r || l < s && l > a);
    }
    function Xe(e, t) {
        var r = void 0 === t ? {} : t, n = r.minDate, a = r.maxDate, o = r.excludeDates, s = r.includeDates;
        return tt(e, {
            minDate: n,
            maxDate: a
        }) || o && o.some(function(t) {
            return Ae(t instanceof Date ? t : t.date, e);
        }) || s && !s.some(function(t) {
            return Ae(t, e);
        }) || !1;
    }
    function Ge(e, t) {
        var r = void 0 === t ? {} : t, n = r.minDate, a = r.maxDate, o = r.excludeDates, s = r.includeDates, i = r.filterDate;
        return tt(e, {
            minDate: n,
            maxDate: a
        }) || (null == o ? void 0 : o.some(function(t) {
            return Fe(e, t instanceof Date ? t : t.date);
        })) || s && !s.some(function(t) {
            return Fe(e, t);
        }) || i && !i(Me(e)) || !1;
    }
    function Je(e, t, r) {
        if (!t || !r) return !1;
        if (!H.isValid(t) || !H.isValid(r)) return !1;
        var n = x.getYear(t), a = x.getYear(r);
        return n <= e && a >= e;
    }
    function Ze(e, t) {
        var r = void 0 === t ? {} : t, n = r.minDate, a = r.maxDate, o = r.excludeDates, s = r.includeDates, i = r.filterDate, l = new Date(e, 0, 1);
        return tt(l, {
            minDate: n ? re.startOfYear(n) : void 0,
            maxDate: a ? y.endOfYear(a) : void 0
        }) || (null == o ? void 0 : o.some(function(e) {
            return Le(l, e instanceof Date ? e : e.date);
        })) || s && !s.some(function(e) {
            return Le(l, e);
        }) || i && !i(Me(l)) || !1;
    }
    function et(e, t, r, n) {
        var a = x.getYear(e), o = E.getQuarter(e), s = x.getYear(t), i = E.getQuarter(t), l = x.getYear(n);
        return a === s && a === l ? o <= r && r <= i : a < s && (l === a && o <= r || l === s && i >= r || l < s && l > a);
    }
    function tt(e, t) {
        var r, n = void 0 === t ? {} : t, a = n.minDate, o = n.maxDate;
        return null !== (r = a && u.differenceInCalendarDays(e, a) < 0 || o && u.differenceInCalendarDays(e, o) > 0) && void 0 !== r && r;
    }
    function rt(e, t) {
        return t.some(function(t) {
            return b.getHours(t) === b.getHours(e) && C.getMinutes(t) === C.getMinutes(e) && P.getSeconds(t) === P.getSeconds(e);
        });
    }
    function nt(e, t) {
        var r = void 0 === t ? {} : t, n = r.excludeTimes, a = r.includeTimes, o = r.filterTime;
        return n && rt(e, n) || a && !rt(e, a) || o && !o(e) || !1;
    }
    function at(e, t) {
        var r = t.minTime, n = t.maxTime;
        if (!r || !n) throw new Error("Both minTime and maxTime props required");
        var a = Me();
        a = j.setHours(a, b.getHours(e)), a = U.setMinutes(a, C.getMinutes(e)), a = X.setSeconds(a, P.getSeconds(e));
        var o = Me();
        o = j.setHours(o, b.getHours(r)), o = U.setMinutes(o, C.getMinutes(r)), o = X.setSeconds(o, P.getSeconds(r));
        var s, i = Me();
        i = j.setHours(i, b.getHours(n)), i = U.setMinutes(i, C.getMinutes(n)), i = X.setSeconds(i, P.getSeconds(n));
        try {
            s = !W.isWithinInterval(a, {
                start: o,
                end: i
            });
        } catch (e) {
            s = !1;
        }
        return s;
    }
    function ot(e, t) {
        var r = void 0 === t ? {} : t, n = r.minDate, a = r.includeDates, o = ae.subMonths(e, 1);
        return n && f.differenceInCalendarMonths(n, o) > 0 || a && a.every(function(e) {
            return f.differenceInCalendarMonths(e, o) > 0;
        }) || !1;
    }
    function st(e, t) {
        var r = void 0 === t ? {} : t, n = r.maxDate, a = r.includeDates, o = i.addMonths(e, 1);
        return n && f.differenceInCalendarMonths(o, n) > 0 || a && a.every(function(e) {
            return f.differenceInCalendarMonths(o, e) > 0;
        }) || !1;
    }
    function it(e, t) {
        var r = void 0 === t ? {} : t, n = r.minDate, a = r.includeDates, o = ie.subYears(e, 1);
        return n && m.differenceInCalendarYears(n, o) > 0 || a && a.every(function(e) {
            return m.differenceInCalendarYears(e, o) > 0;
        }) || !1;
    }
    function lt(e, t) {
        var r = void 0 === t ? {} : t, n = r.maxDate, a = r.includeDates, o = d.addYears(e, 1);
        return n && m.differenceInCalendarYears(o, n) > 0 || a && a.every(function(e) {
            return m.differenceInCalendarYears(o, e) > 0;
        }) || !1;
    }
    function ct(e) {
        var t = e.minDate, r = e.includeDates;
        if (r && t) {
            var n = r.filter(function(e) {
                return u.differenceInCalendarDays(e, t) >= 0;
            });
            return q.min(n);
        }
        return r ? q.min(r) : t;
    }
    function pt(e) {
        var t = e.maxDate, r = e.includeDates;
        if (r && t) {
            var n = r.filter(function(e) {
                return u.differenceInCalendarDays(e, t) <= 0;
            });
            return Q.max(n);
        }
        return r ? Q.max(r) : t;
    }
    function dt(e, t) {
        var r;
        void 0 === e && (e = []), void 0 === t && (t = "react-datepicker__day--highlighted");
        for(var n = new Map, a = 0, o = e.length; a < o; a++){
            var s = e[a];
            if (I.isDate(s)) {
                var i = _e(s, "MM.dd.yyyy");
                (f = n.get(i) || []).includes(t) || (f.push(t), n.set(i, f));
            } else if ("object" == typeof s) {
                var l = null !== (r = Object.keys(s)[0]) && void 0 !== r ? r : "", c = s[l];
                if ("string" == typeof l && Array.isArray(c)) for(var p = 0, d = c.length; p < d; p++){
                    var u = c[p];
                    if (u) {
                        var f;
                        i = _e(u, "MM.dd.yyyy");
                        (f = n.get(i) || []).includes(l) || (f.push(l), n.set(i, f));
                    }
                }
            }
        }
        return n;
    }
    function ut(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = "react-datepicker__day--holidays");
        var r = new Map;
        return e.forEach(function(e) {
            var n = e.date, a = e.holidayName;
            if (I.isDate(n)) {
                var o = _e(n, "MM.dd.yyyy"), s = r.get(o) || {
                    className: "",
                    holidayNames: []
                };
                if (!("className" in s) || s.className !== t || (i = s.holidayNames, l = [
                    a
                ], i.length !== l.length || !i.every(function(e, t) {
                    return e === l[t];
                }))) {
                    var i, l;
                    s.className = t;
                    var c = s.holidayNames;
                    s.holidayNames = c ? De(De([], c, !0), [
                        a
                    ], !1) : [
                        a
                    ], r.set(o, s);
                }
            }
        }), r;
    }
    function ft(e, t, r, n, a) {
        for(var i = a.length, l = [], p = 0; p < i; p++){
            var d = e, u = a[p];
            u && (d = o.addHours(d, b.getHours(u)), d = s.addMinutes(d, C.getMinutes(u)), d = c.addSeconds(d, P.getSeconds(u)));
            var f = s.addMinutes(e, (r + 1) * n);
            N.isAfter(d, t) && O.isBefore(d, f) && null != u && l.push(u);
        }
        return l;
    }
    function ht(e) {
        return e < 10 ? "0".concat(e) : "".concat(e);
    }
    function mt(e, t) {
        void 0 === t && (t = Se);
        var r = Math.ceil(x.getYear(e) / t) * t;
        return {
            startPeriod: r - (t - 1),
            endPeriod: r
        };
    }
    function vt(e) {
        var t = e.getSeconds(), r = e.getMilliseconds();
        return le.toDate(e.getTime() - 1e3 * t - r);
    }
    function gt(e) {
        if (!I.isDate(e)) throw new Error("Invalid date");
        var t = new Date(e);
        return t.setHours(0, 0, 0, 0), t;
    }
    function Dt(e, t) {
        if (!I.isDate(e) || !I.isDate(t)) throw new Error("Invalid date received");
        var r = gt(e), n = gt(t);
        return O.isBefore(r, n);
    }
    function yt(e) {
        return e.key === ye.Space;
    }
    var kt, wt = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.onTimeChange = function(e) {
                var t, r;
                n.setState({
                    time: e
                });
                var a = n.props.date, o = a instanceof Date && !isNaN(+a) ? a : new Date;
                if (null == e ? void 0 : e.includes(":")) {
                    var s = e.split(":"), i = s[0], l = s[1];
                    o.setHours(Number(i)), o.setMinutes(Number(l));
                }
                null === (r = (t = n.props).onChange) || void 0 === r || r.call(t, o);
            }, n.renderTimeInput = function() {
                var e = n.state.time, t = n.props, a = t.date, o = t.timeString, s = t.customTimeInput;
                return s ? r.cloneElement(s, {
                    date: a,
                    value: e,
                    onChange: n.onTimeChange
                }) : ue.default.createElement("input", {
                    type: "time",
                    className: "react-datepicker-time__input",
                    placeholder: "Time",
                    name: "time-input",
                    required: !0,
                    value: e,
                    onChange: function(e) {
                        n.onTimeChange(e.target.value || o);
                    }
                });
            }, n.state = {
                time: n.props.timeString
            }, n;
        }
        return ve(t, e), t.getDerivedStateFromProps = function(e, t) {
            return e.timeString !== t.time ? {
                time: e.timeString
            } : null;
        }, t.prototype.render = function() {
            return ue.default.createElement("div", {
                className: "react-datepicker__input-time-container"
            }, ue.default.createElement("div", {
                className: "react-datepicker-time__caption"
            }, this.props.timeInputLabel), ue.default.createElement("div", {
                className: "react-datepicker-time__input-container"
            }, ue.default.createElement("div", {
                className: "react-datepicker-time__input"
            }, this.renderTimeInput())));
        }, t;
    }(r.Component), St = function(e) {
        function n() {
            var n = null !== e && e.apply(this, arguments) || this;
            return n.dayEl = r.createRef(), n.handleClick = function(e) {
                !n.isDisabled() && n.props.onClick && n.props.onClick(e);
            }, n.handleMouseEnter = function(e) {
                !n.isDisabled() && n.props.onMouseEnter && n.props.onMouseEnter(e);
            }, n.handleOnKeyDown = function(e) {
                var t, r;
                e.key === ye.Space && (e.preventDefault(), e.key = ye.Enter), null === (r = (t = n.props).handleOnKeyDown) || void 0 === r || r.call(t, e);
            }, n.isSameDay = function(e) {
                return He(n.props.day, e);
            }, n.isKeyboardSelected = function() {
                var e;
                if (n.props.disabledKeyboardNavigation) return !1;
                var t = n.props.selectsMultiple ? null === (e = n.props.selectedDates) || void 0 === e ? void 0 : e.some(function(e) {
                    return n.isSameDayOrWeek(e);
                }) : n.isSameDayOrWeek(n.props.selected), r = n.props.preSelection && n.isDisabled(n.props.preSelection);
                return !t && n.isSameDayOrWeek(n.props.preSelection) && !r;
            }, n.isDisabled = function(e) {
                return void 0 === e && (e = n.props.day), je(e, {
                    minDate: n.props.minDate,
                    maxDate: n.props.maxDate,
                    excludeDates: n.props.excludeDates,
                    excludeDateIntervals: n.props.excludeDateIntervals,
                    includeDateIntervals: n.props.includeDateIntervals,
                    includeDates: n.props.includeDates,
                    filterDate: n.props.filterDate
                });
            }, n.isExcluded = function() {
                return Ue(n.props.day, {
                    excludeDates: n.props.excludeDates,
                    excludeDateIntervals: n.props.excludeDateIntervals
                });
            }, n.isStartOfWeek = function() {
                return He(n.props.day, xe(n.props.day, n.props.locale, n.props.calendarStartDay));
            }, n.isSameWeek = function(e) {
                return n.props.showWeekPicker && He(e, xe(n.props.day, n.props.locale, n.props.calendarStartDay));
            }, n.isSameDayOrWeek = function(e) {
                return n.isSameDay(e) || n.isSameWeek(e);
            }, n.getHighLightedClass = function() {
                var e = n.props, t = e.day, r = e.highlightDates;
                if (!r) return !1;
                var a = _e(t, "MM.dd.yyyy");
                return r.get(a);
            }, n.getHolidaysClass = function() {
                var e, t = n.props, r = t.day, a = t.holidays;
                if (!a) return [
                    void 0
                ];
                var o = _e(r, "MM.dd.yyyy");
                return a.has(o) ? [
                    null === (e = a.get(o)) || void 0 === e ? void 0 : e.className
                ] : [
                    void 0
                ];
            }, n.isInRange = function() {
                var e = n.props, t = e.day, r = e.startDate, a = e.endDate;
                return !(!r || !a) && Qe(t, r, a);
            }, n.isInSelectingRange = function() {
                var e, t = n.props, r = t.day, a = t.selectsStart, o = t.selectsEnd, s = t.selectsRange, i = t.selectsDisabledDaysInRange, l = t.startDate, c = t.endDate, p = null !== (e = n.props.selectingDate) && void 0 !== e ? e : n.props.preSelection;
                return !(!(a || o || s) || !p || !i && n.isDisabled()) && (a && c && (O.isBefore(p, c) || We(p, c)) ? Qe(r, p, c) : (o && l && (N.isAfter(p, l) || We(p, l)) || !(!s || !l || c || !N.isAfter(p, l) && !We(p, l))) && Qe(r, l, p));
            }, n.isSelectingRangeStart = function() {
                var e;
                if (!n.isInSelectingRange()) return !1;
                var t = n.props, r = t.day, a = t.startDate, o = t.selectsStart, s = null !== (e = n.props.selectingDate) && void 0 !== e ? e : n.props.preSelection;
                return He(r, o ? s : a);
            }, n.isSelectingRangeEnd = function() {
                var e;
                if (!n.isInSelectingRange()) return !1;
                var t = n.props, r = t.day, a = t.endDate, o = t.selectsEnd, s = t.selectsRange, i = null !== (e = n.props.selectingDate) && void 0 !== e ? e : n.props.preSelection;
                return He(r, o || s ? i : a);
            }, n.isRangeStart = function() {
                var e = n.props, t = e.day, r = e.startDate, a = e.endDate;
                return !(!r || !a) && He(r, t);
            }, n.isRangeEnd = function() {
                var e = n.props, t = e.day, r = e.startDate, a = e.endDate;
                return !(!r || !a) && He(a, t);
            }, n.isWeekend = function() {
                var e = S.getDay(n.props.day);
                return 0 === e || 6 === e;
            }, n.isAfterMonth = function() {
                return void 0 !== n.props.month && (n.props.month + 1) % 12 === _.getMonth(n.props.day);
            }, n.isBeforeMonth = function() {
                return void 0 !== n.props.month && (_.getMonth(n.props.day) + 1) % 12 === n.props.month;
            }, n.isCurrentDay = function() {
                return n.isSameDay(Me());
            }, n.isSelected = function() {
                var e;
                return n.props.selectsMultiple ? null === (e = n.props.selectedDates) || void 0 === e ? void 0 : e.some(function(e) {
                    return n.isSameDayOrWeek(e);
                }) : n.isSameDayOrWeek(n.props.selected);
            }, n.getClassNames = function(e) {
                var r, a = n.props.dayClassName ? n.props.dayClassName(e) : void 0;
                return t.clsx("react-datepicker__day", a, "react-datepicker__day--" + _e(n.props.day, "ddd", r), {
                    "react-datepicker__day--disabled": n.isDisabled(),
                    "react-datepicker__day--excluded": n.isExcluded(),
                    "react-datepicker__day--selected": n.isSelected(),
                    "react-datepicker__day--keyboard-selected": n.isKeyboardSelected(),
                    "react-datepicker__day--range-start": n.isRangeStart(),
                    "react-datepicker__day--range-end": n.isRangeEnd(),
                    "react-datepicker__day--in-range": n.isInRange(),
                    "react-datepicker__day--in-selecting-range": n.isInSelectingRange(),
                    "react-datepicker__day--selecting-range-start": n.isSelectingRangeStart(),
                    "react-datepicker__day--selecting-range-end": n.isSelectingRangeEnd(),
                    "react-datepicker__day--today": n.isCurrentDay(),
                    "react-datepicker__day--weekend": n.isWeekend(),
                    "react-datepicker__day--outside-month": n.isAfterMonth() || n.isBeforeMonth()
                }, n.getHighLightedClass(), n.getHolidaysClass());
            }, n.getAriaLabel = function() {
                var e = n.props, t = e.day, r = e.ariaLabelPrefixWhenEnabled, a = void 0 === r ? "Choose" : r, o = e.ariaLabelPrefixWhenDisabled, s = void 0 === o ? "Not available" : o, i = n.isDisabled() || n.isExcluded() ? s : a;
                return "".concat(i, " ").concat(_e(t, "PPPP", n.props.locale));
            }, n.getTitle = function() {
                var e = n.props, t = e.day, r = e.holidays, a = void 0 === r ? new Map : r, o = e.excludeDates, s = _e(t, "MM.dd.yyyy"), i = [];
                return a.has(s) && i.push.apply(i, a.get(s).holidayNames), n.isExcluded() && i.push(null == o ? void 0 : o.filter(function(e) {
                    return e instanceof Date ? He(e, t) : He(null == e ? void 0 : e.date, t);
                }).map(function(e) {
                    if (!(e instanceof Date)) return null == e ? void 0 : e.message;
                })), i.join(", ");
            }, n.getTabIndex = function() {
                var e = n.props.selected, t = n.props.preSelection;
                return (!n.props.showWeekPicker || !n.props.showWeekNumber && n.isStartOfWeek()) && (n.isKeyboardSelected() || n.isSameDay(e) && He(t, e)) ? 0 : -1;
            }, n.handleFocusDay = function() {
                var e;
                n.shouldFocusDay() && (null === (e = n.dayEl.current) || void 0 === e || e.focus({
                    preventScroll: !0
                }));
            }, n.renderDayContents = function() {
                return n.props.monthShowsDuplicateDaysEnd && n.isAfterMonth() || n.props.monthShowsDuplicateDaysStart && n.isBeforeMonth() ? null : n.props.renderDayContents ? n.props.renderDayContents(w.getDate(n.props.day), n.props.day) : w.getDate(n.props.day);
            }, n.render = function() {
                return ue.default.createElement("div", {
                    ref: n.dayEl,
                    className: n.getClassNames(n.props.day),
                    onKeyDown: n.handleOnKeyDown,
                    onClick: n.handleClick,
                    onMouseEnter: n.props.usePointerEvent ? void 0 : n.handleMouseEnter,
                    onPointerEnter: n.props.usePointerEvent ? n.handleMouseEnter : void 0,
                    tabIndex: n.getTabIndex(),
                    "aria-label": n.getAriaLabel(),
                    role: "option",
                    title: n.getTitle(),
                    "aria-disabled": n.isDisabled(),
                    "aria-current": n.isCurrentDay() ? "date" : void 0,
                    "aria-selected": n.isSelected() || n.isInRange()
                }, n.renderDayContents(), "" !== n.getTitle() && ue.default.createElement("span", {
                    className: "overlay"
                }, n.getTitle()));
            }, n;
        }
        return ve(n, e), n.prototype.componentDidMount = function() {
            this.handleFocusDay();
        }, n.prototype.componentDidUpdate = function() {
            this.handleFocusDay();
        }, n.prototype.shouldFocusDay = function() {
            var e = !1;
            return 0 === this.getTabIndex() && this.isSameDay(this.props.preSelection) && (document.activeElement && document.activeElement !== document.body || (e = !0), this.props.inline && !this.props.shouldFocusDayInline && (e = !1), this.isDayActiveElement() && (e = !0), this.isDuplicateDay() && (e = !1)), e;
        }, n.prototype.isDayActiveElement = function() {
            var e, t, r;
            return (null === (t = null === (e = this.props.containerRef) || void 0 === e ? void 0 : e.current) || void 0 === t ? void 0 : t.contains(document.activeElement)) && (null === (r = document.activeElement) || void 0 === r ? void 0 : r.classList.contains("react-datepicker__day"));
        }, n.prototype.isDuplicateDay = function() {
            return this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth();
        }, n;
    }(r.Component), bt = function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.weekNumberEl = r.createRef(), t.handleClick = function(e) {
                t.props.onClick && t.props.onClick(e);
            }, t.handleOnKeyDown = function(e) {
                var r, n;
                e.key === ye.Space && (e.preventDefault(), e.key = ye.Enter), null === (n = (r = t.props).handleOnKeyDown) || void 0 === n || n.call(r, e);
            }, t.isKeyboardSelected = function() {
                return !t.props.disabledKeyboardNavigation && !He(t.props.date, t.props.selected) && He(t.props.date, t.props.preSelection);
            }, t.getTabIndex = function() {
                return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || He(t.props.date, t.props.selected) && He(t.props.preSelection, t.props.selected)) ? 0 : -1;
            }, t.handleFocusWeekNumber = function(e) {
                var r = !1;
                0 === t.getTabIndex() && !(null == e ? void 0 : e.isInputFocused) && He(t.props.date, t.props.preSelection) && (document.activeElement && document.activeElement !== document.body || (r = !0), t.props.inline && !t.props.shouldFocusDayInline && (r = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (r = !0)), r && t.weekNumberEl.current && t.weekNumberEl.current.focus({
                    preventScroll: !0
                });
            }, t;
        }
        return ve(n, e), Object.defineProperty(n, "defaultProps", {
            get: function() {
                return {
                    ariaLabelPrefix: "week "
                };
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.componentDidMount = function() {
            this.handleFocusWeekNumber();
        }, n.prototype.componentDidUpdate = function(e) {
            this.handleFocusWeekNumber(e);
        }, n.prototype.render = function() {
            var e = this.props, r = e.weekNumber, a = e.ariaLabelPrefix, o = void 0 === a ? n.defaultProps.ariaLabelPrefix : a, s = e.onClick, i = {
                "react-datepicker__week-number": !0,
                "react-datepicker__week-number--clickable": !!s,
                "react-datepicker__week-number--selected": !!s && He(this.props.date, this.props.selected),
                "react-datepicker__week-number--keyboard-selected": this.isKeyboardSelected()
            };
            return ue.default.createElement("div", {
                ref: this.weekNumberEl,
                className: t.clsx(i),
                "aria-label": "".concat(o, " ").concat(this.props.weekNumber),
                onClick: this.handleClick,
                onKeyDown: this.handleOnKeyDown,
                tabIndex: this.getTabIndex()
            }, r);
        }, n;
    }(r.Component), Mt = function(e) {
        function r() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.isDisabled = function(e) {
                return je(e, {
                    minDate: t.props.minDate,
                    maxDate: t.props.maxDate,
                    excludeDates: t.props.excludeDates,
                    excludeDateIntervals: t.props.excludeDateIntervals,
                    includeDateIntervals: t.props.includeDateIntervals,
                    includeDates: t.props.includeDates,
                    filterDate: t.props.filterDate
                });
            }, t.handleDayClick = function(e, r) {
                t.props.onDayClick && t.props.onDayClick(e, r);
            }, t.handleDayMouseEnter = function(e) {
                t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
            }, t.handleWeekClick = function(e, n, a) {
                for(var o, s, i, l = new Date(e), c = 0; c < 7; c++){
                    var p = new Date(e);
                    if (p.setDate(p.getDate() + c), !t.isDisabled(p)) {
                        l = p;
                        break;
                    }
                }
                "function" == typeof t.props.onWeekSelect && t.props.onWeekSelect(l, n, a), t.props.showWeekPicker && t.handleDayClick(l, a), (null !== (o = t.props.shouldCloseOnSelect) && void 0 !== o ? o : r.defaultProps.shouldCloseOnSelect) && (null === (i = (s = t.props).setOpen) || void 0 === i || i.call(s, !1));
            }, t.formatWeekNumber = function(e) {
                return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : function(e) {
                    return M.getISOWeek(e);
                }(e);
            }, t.renderDays = function() {
                var e = t.startOfWeek(), n = [], o = t.formatWeekNumber(e);
                if (t.props.showWeekNumber) {
                    var s = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, o) : void 0;
                    n.push(ue.default.createElement(bt, ge({
                        key: "W"
                    }, r.defaultProps, t.props, {
                        weekNumber: o,
                        date: e,
                        onClick: s
                    })));
                }
                return n.concat([
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ].map(function(n) {
                    var o = a.addDays(e, n);
                    return ue.default.createElement(St, ge({}, r.defaultProps, t.props, {
                        ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix,
                        ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix,
                        key: o.valueOf(),
                        day: o,
                        onClick: t.handleDayClick.bind(t, o),
                        onMouseEnter: t.handleDayMouseEnter.bind(t, o)
                    }));
                }));
            }, t.startOfWeek = function() {
                return xe(t.props.day, t.props.locale, t.props.calendarStartDay);
            }, t.isKeyboardSelected = function() {
                return !t.props.disabledKeyboardNavigation && !He(t.startOfWeek(), t.props.selected) && He(t.startOfWeek(), t.props.preSelection);
            }, t;
        }
        return ve(r, e), Object.defineProperty(r, "defaultProps", {
            get: function() {
                return {
                    shouldCloseOnSelect: !0
                };
            },
            enumerable: !1,
            configurable: !0
        }), r.prototype.render = function() {
            var e = {
                "react-datepicker__week": !0,
                "react-datepicker__week--selected": He(this.startOfWeek(), this.props.selected),
                "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
            };
            return ue.default.createElement("div", {
                className: t.clsx(e)
            }, this.renderDays());
        }, r;
    }(r.Component), Ct = "two_columns", _t = "three_columns", Et = "four_columns", Pt = ((kt = {})[Ct] = {
        grid: [
            [
                0,
                1
            ],
            [
                2,
                3
            ],
            [
                4,
                5
            ],
            [
                6,
                7
            ],
            [
                8,
                9
            ],
            [
                10,
                11
            ]
        ],
        verticalNavigationOffset: 2
    }, kt[_t] = {
        grid: [
            [
                0,
                1,
                2
            ],
            [
                3,
                4,
                5
            ],
            [
                6,
                7,
                8
            ],
            [
                9,
                10,
                11
            ]
        ],
        verticalNavigationOffset: 3
    }, kt[Et] = {
        grid: [
            [
                0,
                1,
                2,
                3
            ],
            [
                4,
                5,
                6,
                7
            ],
            [
                8,
                9,
                10,
                11
            ]
        ],
        verticalNavigationOffset: 4
    }, kt);
    function Yt(e, t) {
        return e ? Et : t ? Ct : _t;
    }
    var xt = function(e) {
        function n() {
            var n = null !== e && e.apply(this, arguments) || this;
            return n.MONTH_REFS = De([], Array(12), !0).map(function() {
                return r.createRef();
            }), n.QUARTER_REFS = De([], Array(4), !0).map(function() {
                return r.createRef();
            }), n.isDisabled = function(e) {
                return je(e, {
                    minDate: n.props.minDate,
                    maxDate: n.props.maxDate,
                    excludeDates: n.props.excludeDates,
                    excludeDateIntervals: n.props.excludeDateIntervals,
                    includeDateIntervals: n.props.includeDateIntervals,
                    includeDates: n.props.includeDates,
                    filterDate: n.props.filterDate
                });
            }, n.isExcluded = function(e) {
                return Ue(e, {
                    excludeDates: n.props.excludeDates,
                    excludeDateIntervals: n.props.excludeDateIntervals
                });
            }, n.handleDayClick = function(e, t) {
                var r, a;
                null === (a = (r = n.props).onDayClick) || void 0 === a || a.call(r, e, t, n.props.orderInDisplay);
            }, n.handleDayMouseEnter = function(e) {
                var t, r;
                null === (r = (t = n.props).onDayMouseEnter) || void 0 === r || r.call(t, e);
            }, n.handleMouseLeave = function() {
                var e, t;
                null === (t = (e = n.props).onMouseLeave) || void 0 === t || t.call(e);
            }, n.isRangeStartMonth = function(e) {
                var t = n.props, r = t.day, a = t.startDate, o = t.endDate;
                return !(!a || !o) && Ae($.setMonth(r, e), a);
            }, n.isRangeStartQuarter = function(e) {
                var t = n.props, r = t.day, a = t.startDate, o = t.endDate;
                return !(!a || !o) && Fe(z.setQuarter(r, e), a);
            }, n.isRangeEndMonth = function(e) {
                var t = n.props, r = t.day, a = t.startDate, o = t.endDate;
                return !(!a || !o) && Ae($.setMonth(r, e), o);
            }, n.isRangeEndQuarter = function(e) {
                var t = n.props, r = t.day, a = t.startDate, o = t.endDate;
                return !(!a || !o) && Fe(z.setQuarter(r, e), o);
            }, n.isInSelectingRangeMonth = function(e) {
                var t, r = n.props, a = r.day, o = r.selectsStart, s = r.selectsEnd, i = r.selectsRange, l = r.startDate, c = r.endDate, p = null !== (t = n.props.selectingDate) && void 0 !== t ? t : n.props.preSelection;
                return !(!(o || s || i) || !p) && (o && c ? ze(p, c, e, a) : (s && l || !(!i || !l || c)) && ze(l, p, e, a));
            }, n.isSelectingMonthRangeStart = function(e) {
                var t;
                if (!n.isInSelectingRangeMonth(e)) return !1;
                var r = n.props, a = r.day, o = r.startDate, s = r.selectsStart, i = $.setMonth(a, e), l = null !== (t = n.props.selectingDate) && void 0 !== t ? t : n.props.preSelection;
                return Ae(i, s ? l : o);
            }, n.isSelectingMonthRangeEnd = function(e) {
                var t;
                if (!n.isInSelectingRangeMonth(e)) return !1;
                var r = n.props, a = r.day, o = r.endDate, s = r.selectsEnd, i = r.selectsRange, l = $.setMonth(a, e), c = null !== (t = n.props.selectingDate) && void 0 !== t ? t : n.props.preSelection;
                return Ae(l, s || i ? c : o);
            }, n.isInSelectingRangeQuarter = function(e) {
                var t, r = n.props, a = r.day, o = r.selectsStart, s = r.selectsEnd, i = r.selectsRange, l = r.startDate, c = r.endDate, p = null !== (t = n.props.selectingDate) && void 0 !== t ? t : n.props.preSelection;
                return !(!(o || s || i) || !p) && (o && c ? et(p, c, e, a) : (s && l || !(!i || !l || c)) && et(l, p, e, a));
            }, n.isWeekInMonth = function(e) {
                var t = n.props.day, r = a.addDays(e, 6);
                return Ae(e, t) || Ae(r, t);
            }, n.isCurrentMonth = function(e, t) {
                return x.getYear(e) === x.getYear(Me()) && t === _.getMonth(Me());
            }, n.isCurrentQuarter = function(e, t) {
                return x.getYear(e) === x.getYear(Me()) && t === E.getQuarter(Me());
            }, n.isSelectedMonth = function(e, t, r) {
                return _.getMonth(r) === t && x.getYear(e) === x.getYear(r);
            }, n.isSelectMonthInList = function(e, t, r) {
                return r.some(function(r) {
                    return n.isSelectedMonth(e, t, r);
                });
            }, n.isSelectedQuarter = function(e, t, r) {
                return E.getQuarter(e) === t && x.getYear(e) === x.getYear(r);
            }, n.renderWeeks = function() {
                for(var e = [], t = n.props.fixedHeight, r = 0, a = !1, o = xe(Ne(n.props.day), n.props.locale, n.props.calendarStartDay), s = n.props.selected ? function(e) {
                    return n.props.showWeekPicker ? xe(e, n.props.locale, n.props.calendarStartDay) : n.props.selected;
                }(n.props.selected) : void 0, i = n.props.preSelection ? function(e) {
                    return n.props.showWeekPicker ? xe(e, n.props.locale, n.props.calendarStartDay) : n.props.preSelection;
                }(n.props.preSelection) : void 0; e.push(ue.default.createElement(Mt, ge({}, n.props, {
                    ariaLabelPrefix: n.props.weekAriaLabelPrefix,
                    key: r,
                    day: o,
                    month: _.getMonth(n.props.day),
                    onDayClick: n.handleDayClick,
                    onDayMouseEnter: n.handleDayMouseEnter,
                    selected: s,
                    preSelection: i,
                    showWeekNumber: n.props.showWeekNumbers
                }))), !a;){
                    r++, o = p.addWeeks(o, 1);
                    var l = t && r >= 6, c = !t && !n.isWeekInMonth(o);
                    if (l || c) {
                        if (!n.props.peekNextMonth) break;
                        a = !0;
                    }
                }
                return e;
            }, n.onMonthClick = function(e, t) {
                var r = n.isMonthDisabledForLabelDate(t), a = r.isDisabled, o = r.labelDate;
                a || n.handleDayClick(Ne(o), e);
            }, n.onMonthMouseEnter = function(e) {
                var t = n.isMonthDisabledForLabelDate(e), r = t.isDisabled, a = t.labelDate;
                r || n.handleDayMouseEnter(Ne(a));
            }, n.handleMonthNavigation = function(e, t) {
                var r, a, o, s;
                null === (a = (r = n.props).setPreSelection) || void 0 === a || a.call(r, t), null === (s = null === (o = n.MONTH_REFS[e]) || void 0 === o ? void 0 : o.current) || void 0 === s || s.focus();
            }, n.handleKeyboardNavigation = function(e, t, r) {
                var a, o = n.props, s = o.selected, l = o.preSelection, c = o.setPreSelection, p = o.minDate, d = o.maxDate, u = o.showFourColumnMonthYearPicker, f = o.showTwoColumnMonthYearPicker;
                if (l) {
                    var h = Yt(u, f), m = n.getVerticalOffset(h), v = null === (a = Pt[h]) || void 0 === a ? void 0 : a.grid, g = function(e, t, r) {
                        var n, a, o = t, s = r;
                        switch(e){
                            case ye.ArrowRight:
                                o = i.addMonths(t, 1), s = 11 === r ? 0 : r + 1;
                                break;
                            case ye.ArrowLeft:
                                o = ae.subMonths(t, 1), s = 0 === r ? 11 : r - 1;
                                break;
                            case ye.ArrowUp:
                                o = ae.subMonths(t, m), s = (null === (n = null == v ? void 0 : v[0]) || void 0 === n ? void 0 : n.includes(r)) ? r + 12 - m : r - m;
                                break;
                            case ye.ArrowDown:
                                o = i.addMonths(t, m), s = (null === (a = null == v ? void 0 : v[v.length - 1]) || void 0 === a ? void 0 : a.includes(r)) ? r - 12 + m : r + m;
                        }
                        return {
                            newCalculatedDate: o,
                            newCalculatedMonth: s
                        };
                    };
                    if (t !== ye.Enter) {
                        var D = function(e, t, r) {
                            for(var a = e, o = !1, s = 0, i = g(a, t, r), l = i.newCalculatedDate, c = i.newCalculatedMonth; !o;){
                                if (s >= 40) {
                                    l = t, c = r;
                                    break;
                                }
                                var u;
                                if (p && l < p) a = ye.ArrowRight, l = (u = g(a, l, c)).newCalculatedDate, c = u.newCalculatedMonth;
                                if (d && l > d) a = ye.ArrowLeft, l = (u = g(a, l, c)).newCalculatedDate, c = u.newCalculatedMonth;
                                if (Xe(l, n.props)) l = (u = g(a, l, c)).newCalculatedDate, c = u.newCalculatedMonth;
                                else o = !0;
                                s++;
                            }
                            return {
                                newCalculatedDate: l,
                                newCalculatedMonth: c
                            };
                        }(t, l, r), y = D.newCalculatedDate, k = D.newCalculatedMonth;
                        switch(t){
                            case ye.ArrowRight:
                            case ye.ArrowLeft:
                            case ye.ArrowUp:
                            case ye.ArrowDown:
                                n.handleMonthNavigation(k, y);
                        }
                    } else n.isMonthDisabled(r) || (n.onMonthClick(e, r), null == c || c(s));
                }
            }, n.getVerticalOffset = function(e) {
                var t, r;
                return null !== (r = null === (t = Pt[e]) || void 0 === t ? void 0 : t.verticalNavigationOffset) && void 0 !== r ? r : 0;
            }, n.onMonthKeyDown = function(e, t) {
                var r = n.props, a = r.disabledKeyboardNavigation, o = r.handleOnMonthKeyDown, s = e.key;
                s !== ye.Tab && e.preventDefault(), a || n.handleKeyboardNavigation(e, s, t), o && o(e);
            }, n.onQuarterClick = function(e, t) {
                var r = z.setQuarter(n.props.day, t);
                Ge(r, n.props) || n.handleDayClick(Ie(r), e);
            }, n.onQuarterMouseEnter = function(e) {
                var t = z.setQuarter(n.props.day, e);
                Ge(t, n.props) || n.handleDayMouseEnter(Ie(t));
            }, n.handleQuarterNavigation = function(e, t) {
                var r, a, o, s;
                n.isDisabled(t) || n.isExcluded(t) || (null === (a = (r = n.props).setPreSelection) || void 0 === a || a.call(r, t), null === (s = null === (o = n.QUARTER_REFS[e - 1]) || void 0 === o ? void 0 : o.current) || void 0 === s || s.focus());
            }, n.onQuarterKeyDown = function(e, t) {
                var r, a, o = e.key;
                if (!n.props.disabledKeyboardNavigation) switch(o){
                    case ye.Enter:
                        n.onQuarterClick(e, t), null === (a = (r = n.props).setPreSelection) || void 0 === a || a.call(r, n.props.selected);
                        break;
                    case ye.ArrowRight:
                        if (!n.props.preSelection) break;
                        n.handleQuarterNavigation(4 === t ? 1 : t + 1, l.addQuarters(n.props.preSelection, 1));
                        break;
                    case ye.ArrowLeft:
                        if (!n.props.preSelection) break;
                        n.handleQuarterNavigation(1 === t ? 4 : t - 1, oe.subQuarters(n.props.preSelection, 1));
                }
            }, n.isMonthDisabledForLabelDate = function(e) {
                var t, r = n.props, a = r.day, o = r.minDate, s = r.maxDate, i = r.excludeDates, l = r.includeDates, c = $.setMonth(a, e);
                return {
                    isDisabled: null !== (t = (o || s || i || l) && $e(c, n.props)) && void 0 !== t && t,
                    labelDate: c
                };
            }, n.isMonthDisabled = function(e) {
                return n.isMonthDisabledForLabelDate(e).isDisabled;
            }, n.getMonthClassNames = function(e) {
                var r = n.props, a = r.day, o = r.startDate, s = r.endDate, i = r.preSelection, l = r.monthClassName, c = l ? l($.setMonth(a, e)) : void 0, p = n.getSelection();
                return t.clsx("react-datepicker__month-text", "react-datepicker__month-".concat(e), c, {
                    "react-datepicker__month-text--disabled": n.isMonthDisabled(e),
                    "react-datepicker__month-text--selected": p ? n.isSelectMonthInList(a, e, p) : void 0,
                    "react-datepicker__month-text--keyboard-selected": !n.props.disabledKeyboardNavigation && i && n.isSelectedMonth(a, e, i) && !n.isMonthDisabled(e),
                    "react-datepicker__month-text--in-selecting-range": n.isInSelectingRangeMonth(e),
                    "react-datepicker__month-text--in-range": o && s ? ze(o, s, e, a) : void 0,
                    "react-datepicker__month-text--range-start": n.isRangeStartMonth(e),
                    "react-datepicker__month-text--range-end": n.isRangeEndMonth(e),
                    "react-datepicker__month-text--selecting-range-start": n.isSelectingMonthRangeStart(e),
                    "react-datepicker__month-text--selecting-range-end": n.isSelectingMonthRangeEnd(e),
                    "react-datepicker__month-text--today": n.isCurrentMonth(a, e)
                });
            }, n.getTabIndex = function(e) {
                if (null == n.props.preSelection) return "-1";
                var t = _.getMonth(n.props.preSelection);
                return n.props.disabledKeyboardNavigation || e !== t ? "-1" : "0";
            }, n.getQuarterTabIndex = function(e) {
                if (null == n.props.preSelection) return "-1";
                var t = E.getQuarter(n.props.preSelection);
                return n.props.disabledKeyboardNavigation || e !== t ? "-1" : "0";
            }, n.getAriaLabel = function(e) {
                var t = n.props, r = t.chooseDayAriaLabelPrefix, a = void 0 === r ? "Choose" : r, o = t.disabledDayAriaLabelPrefix, s = void 0 === o ? "Not available" : o, i = t.day, l = t.locale, c = $.setMonth(i, e), p = n.isDisabled(c) || n.isExcluded(c) ? s : a;
                return "".concat(p, " ").concat(_e(c, "MMMM yyyy", l));
            }, n.getQuarterClassNames = function(e) {
                var r = n.props, a = r.day, o = r.startDate, s = r.endDate, i = r.selected, l = r.minDate, c = r.maxDate, p = r.excludeDates, d = r.includeDates, u = r.filterDate, f = r.preSelection, h = r.disabledKeyboardNavigation, m = (l || c || p || d || u) && Ge(z.setQuarter(a, e), n.props);
                return t.clsx("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
                    "react-datepicker__quarter-text--disabled": m,
                    "react-datepicker__quarter-text--selected": i ? n.isSelectedQuarter(a, e, i) : void 0,
                    "react-datepicker__quarter-text--keyboard-selected": !h && f && n.isSelectedQuarter(a, e, f) && !m,
                    "react-datepicker__quarter-text--in-selecting-range": n.isInSelectingRangeQuarter(e),
                    "react-datepicker__quarter-text--in-range": o && s ? et(o, s, e, a) : void 0,
                    "react-datepicker__quarter-text--range-start": n.isRangeStartQuarter(e),
                    "react-datepicker__quarter-text--range-end": n.isRangeEndQuarter(e)
                });
            }, n.getMonthContent = function(e) {
                var t = n.props, r = t.showFullMonthYearPicker, a = t.renderMonthContent, o = t.locale, s = t.day, i = Ve(e, o), l = Be(e, o);
                return a ? a(e, i, l, s) : r ? l : i;
            }, n.getQuarterContent = function(e) {
                var t, r = n.props, a = r.renderQuarterContent, o = function(e, t) {
                    return _e(z.setQuarter(Me(), e), "QQQ", t);
                }(e, r.locale);
                return null !== (t = null == a ? void 0 : a(e, o)) && void 0 !== t ? t : o;
            }, n.renderMonths = function() {
                var e, t = n.props, r = t.showTwoColumnMonthYearPicker, a = t.showFourColumnMonthYearPicker, o = t.day, s = t.selected, i = null === (e = Pt[Yt(a, r)]) || void 0 === e ? void 0 : e.grid;
                return null == i ? void 0 : i.map(function(e, t) {
                    return ue.default.createElement("div", {
                        className: "react-datepicker__month-wrapper",
                        key: t
                    }, e.map(function(e, t) {
                        return ue.default.createElement("div", {
                            ref: n.MONTH_REFS[e],
                            key: t,
                            onClick: function(t) {
                                n.onMonthClick(t, e);
                            },
                            onKeyDown: function(t) {
                                yt(t) && (t.preventDefault(), t.key = ye.Enter), n.onMonthKeyDown(t, e);
                            },
                            onMouseEnter: n.props.usePointerEvent ? void 0 : function() {
                                return n.onMonthMouseEnter(e);
                            },
                            onPointerEnter: n.props.usePointerEvent ? function() {
                                return n.onMonthMouseEnter(e);
                            } : void 0,
                            tabIndex: Number(n.getTabIndex(e)),
                            className: n.getMonthClassNames(e),
                            "aria-disabled": n.isMonthDisabled(e),
                            role: "option",
                            "aria-label": n.getAriaLabel(e),
                            "aria-current": n.isCurrentMonth(o, e) ? "date" : void 0,
                            "aria-selected": s ? n.isSelectedMonth(o, e, s) : void 0
                        }, n.getMonthContent(e));
                    }));
                });
            }, n.renderQuarters = function() {
                var e = n.props, t = e.day, r = e.selected;
                return ue.default.createElement("div", {
                    className: "react-datepicker__quarter-wrapper"
                }, [
                    1,
                    2,
                    3,
                    4
                ].map(function(e, a) {
                    return ue.default.createElement("div", {
                        key: a,
                        ref: n.QUARTER_REFS[a],
                        role: "option",
                        onClick: function(t) {
                            n.onQuarterClick(t, e);
                        },
                        onKeyDown: function(t) {
                            n.onQuarterKeyDown(t, e);
                        },
                        onMouseEnter: n.props.usePointerEvent ? void 0 : function() {
                            return n.onQuarterMouseEnter(e);
                        },
                        onPointerEnter: n.props.usePointerEvent ? function() {
                            return n.onQuarterMouseEnter(e);
                        } : void 0,
                        className: n.getQuarterClassNames(e),
                        "aria-selected": r ? n.isSelectedQuarter(t, e, r) : void 0,
                        tabIndex: Number(n.getQuarterTabIndex(e)),
                        "aria-current": n.isCurrentQuarter(t, e) ? "date" : void 0
                    }, n.getQuarterContent(e));
                }));
            }, n.getClassNames = function() {
                var e = n.props, r = e.selectingDate, a = e.selectsStart, o = e.selectsEnd, s = e.showMonthYearPicker, i = e.showQuarterYearPicker, l = e.showWeekPicker;
                return t.clsx("react-datepicker__month", {
                    "react-datepicker__month--selecting-range": r && (a || o)
                }, {
                    "react-datepicker__monthPicker": s
                }, {
                    "react-datepicker__quarterPicker": i
                }, {
                    "react-datepicker__weekPicker": l
                });
            }, n;
        }
        return ve(n, e), n.prototype.getSelection = function() {
            var e = this.props, t = e.selected, r = e.selectedDates;
            return e.selectsMultiple ? r : t ? [
                t
            ] : void 0;
        }, n.prototype.render = function() {
            var e = this.props, t = e.showMonthYearPicker, r = e.showQuarterYearPicker, n = e.day, a = e.ariaLabelPrefix, o = void 0 === a ? "Month " : a, s = o ? o.trim() + " " : "";
            return ue.default.createElement("div", {
                className: this.getClassNames(),
                onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave,
                onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0,
                "aria-label": "".concat(s).concat(_e(n, "MMMM, yyyy", this.props.locale)),
                role: "listbox"
            }, t ? this.renderMonths() : r ? this.renderQuarters() : this.renderWeeks());
        }, n;
    }(r.Component), Nt = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.isSelectedMonth = function(e) {
                return t.props.month === e;
            }, t.renderOptions = function() {
                return t.props.monthNames.map(function(e, r) {
                    return ue.default.createElement("div", {
                        className: t.isSelectedMonth(r) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option",
                        key: e,
                        onClick: t.onChange.bind(t, r),
                        "aria-selected": t.isSelectedMonth(r) ? "true" : void 0
                    }, t.isSelectedMonth(r) ? ue.default.createElement("span", {
                        className: "react-datepicker__month-option--selected"
                    }, "✓") : "", e);
                });
            }, t.onChange = function(e) {
                return t.props.onChange(e);
            }, t.handleClickOutside = function() {
                return t.props.onCancel();
            }, t;
        }
        return ve(t, e), t.prototype.render = function() {
            return ue.default.createElement("div", {
                className: "react-datepicker__month-dropdown"
            }, this.renderOptions());
        }, t;
    }(r.Component), Ot = fe.default(Nt), It = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                dropdownVisible: !1
            }, t.renderSelectOptions = function(e) {
                return e.map(function(e, t) {
                    return ue.default.createElement("option", {
                        key: e,
                        value: t
                    }, e);
                });
            }, t.renderSelectMode = function(e) {
                return ue.default.createElement("select", {
                    value: t.props.month,
                    className: "react-datepicker__month-select",
                    onChange: function(e) {
                        return t.onChange(parseInt(e.target.value));
                    }
                }, t.renderSelectOptions(e));
            }, t.renderReadView = function(e, r) {
                return ue.default.createElement("div", {
                    key: "read",
                    style: {
                        visibility: e ? "visible" : "hidden"
                    },
                    className: "react-datepicker__month-read-view",
                    onClick: t.toggleDropdown
                }, ue.default.createElement("span", {
                    className: "react-datepicker__month-read-view--down-arrow"
                }), ue.default.createElement("span", {
                    className: "react-datepicker__month-read-view--selected-month"
                }, r[t.props.month]));
            }, t.renderDropdown = function(e) {
                return ue.default.createElement(Ot, ge({
                    key: "dropdown"
                }, t.props, {
                    monthNames: e,
                    onChange: t.onChange,
                    onCancel: t.toggleDropdown
                }));
            }, t.renderScrollMode = function(e) {
                var r = t.state.dropdownVisible, n = [
                    t.renderReadView(!r, e)
                ];
                return r && n.unshift(t.renderDropdown(e)), n;
            }, t.onChange = function(e) {
                t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
            }, t.toggleDropdown = function() {
                return t.setState({
                    dropdownVisible: !t.state.dropdownVisible
                });
            }, t;
        }
        return ve(t, e), t.prototype.render = function() {
            var e, t = this, r = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ].map(this.props.useShortMonthInDropdown ? function(e) {
                return Ve(e, t.props.locale);
            } : function(e) {
                return Be(e, t.props.locale);
            });
            switch(this.props.dropdownMode){
                case "scroll":
                    e = this.renderScrollMode(r);
                    break;
                case "select":
                    e = this.renderSelectMode(r);
            }
            return ue.default.createElement("div", {
                className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)
            }, e);
        }, t;
    }(r.Component);
    function Tt(e, t) {
        for(var r = [], n = Ne(e), a = Ne(t); !N.isAfter(n, a);)r.push(Me(n)), n = i.addMonths(n, 1);
        return r;
    }
    var Rt = function(e) {
        function r(t) {
            var r = e.call(this, t) || this;
            return r.renderOptions = function() {
                return r.state.monthYearsList.map(function(e) {
                    var t = Y.getTime(e), n = Le(r.props.date, e) && Ae(r.props.date, e);
                    return ue.default.createElement("div", {
                        className: n ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option",
                        key: t,
                        onClick: r.onChange.bind(r, t),
                        "aria-selected": n ? "true" : void 0
                    }, n ? ue.default.createElement("span", {
                        className: "react-datepicker__month-year-option--selected"
                    }, "✓") : "", _e(e, r.props.dateFormat, r.props.locale));
                });
            }, r.onChange = function(e) {
                return r.props.onChange(e);
            }, r.handleClickOutside = function() {
                r.props.onCancel();
            }, r.state = {
                monthYearsList: Tt(r.props.minDate, r.props.maxDate)
            }, r;
        }
        return ve(r, e), r.prototype.render = function() {
            var e = t.clsx({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
            });
            return ue.default.createElement("div", {
                className: e
            }, this.renderOptions());
        }, r;
    }(r.Component), Lt = fe.default(Rt), At = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                dropdownVisible: !1
            }, t.renderSelectOptions = function() {
                for(var e = Ne(t.props.minDate), r = Ne(t.props.maxDate), n = []; !N.isAfter(e, r);){
                    var a = Y.getTime(e);
                    n.push(ue.default.createElement("option", {
                        key: a,
                        value: a
                    }, _e(e, t.props.dateFormat, t.props.locale))), e = i.addMonths(e, 1);
                }
                return n;
            }, t.onSelectChange = function(e) {
                t.onChange(parseInt(e.target.value));
            }, t.renderSelectMode = function() {
                return ue.default.createElement("select", {
                    value: Y.getTime(Ne(t.props.date)),
                    className: "react-datepicker__month-year-select",
                    onChange: t.onSelectChange
                }, t.renderSelectOptions());
            }, t.renderReadView = function(e) {
                var r = _e(t.props.date, t.props.dateFormat, t.props.locale);
                return ue.default.createElement("div", {
                    key: "read",
                    style: {
                        visibility: e ? "visible" : "hidden"
                    },
                    className: "react-datepicker__month-year-read-view",
                    onClick: t.toggleDropdown
                }, ue.default.createElement("span", {
                    className: "react-datepicker__month-year-read-view--down-arrow"
                }), ue.default.createElement("span", {
                    className: "react-datepicker__month-year-read-view--selected-month-year"
                }, r));
            }, t.renderDropdown = function() {
                return ue.default.createElement(Lt, ge({
                    key: "dropdown"
                }, t.props, {
                    onChange: t.onChange,
                    onCancel: t.toggleDropdown
                }));
            }, t.renderScrollMode = function() {
                var e = t.state.dropdownVisible, r = [
                    t.renderReadView(!e)
                ];
                return e && r.unshift(t.renderDropdown()), r;
            }, t.onChange = function(e) {
                t.toggleDropdown();
                var r = Me(e);
                Le(t.props.date, r) && Ae(t.props.date, r) || t.props.onChange(r);
            }, t.toggleDropdown = function() {
                return t.setState({
                    dropdownVisible: !t.state.dropdownVisible
                });
            }, t;
        }
        return ve(t, e), t.prototype.render = function() {
            var e;
            switch(this.props.dropdownMode){
                case "scroll":
                    e = this.renderScrollMode();
                    break;
                case "select":
                    e = this.renderSelectMode();
            }
            return ue.default.createElement("div", {
                className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)
            }, e);
        }, t;
    }(r.Component), Ft = function(e) {
        function t() {
            var r = null !== e && e.apply(this, arguments) || this;
            return r.state = {
                height: null
            }, r.scrollToTheSelectedTime = function() {
                requestAnimationFrame(function() {
                    var e, n, a;
                    r.list && (r.list.scrollTop = null !== (a = r.centerLi && t.calcCenterPosition(r.props.monthRef ? r.props.monthRef.clientHeight - (null !== (n = null === (e = r.header) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== n ? n : 0) : r.list.clientHeight, r.centerLi)) && void 0 !== a ? a : 0);
                });
            }, r.handleClick = function(e) {
                var t, n;
                (r.props.minTime || r.props.maxTime) && at(e, r.props) || (r.props.excludeTimes || r.props.includeTimes || r.props.filterTime) && nt(e, r.props) || null === (n = (t = r.props).onChange) || void 0 === n || n.call(t, e);
            }, r.isSelectedTime = function(e) {
                return r.props.selected && (t = r.props.selected, n = e, vt(t).getTime() === vt(n).getTime());
                var t, n;
            }, r.isDisabledTime = function(e) {
                return (r.props.minTime || r.props.maxTime) && at(e, r.props) || (r.props.excludeTimes || r.props.includeTimes || r.props.filterTime) && nt(e, r.props);
            }, r.liClasses = function(e) {
                var n, a = [
                    "react-datepicker__time-list-item",
                    r.props.timeClassName ? r.props.timeClassName(e) : void 0
                ];
                return r.isSelectedTime(e) && a.push("react-datepicker__time-list-item--selected"), r.isDisabledTime(e) && a.push("react-datepicker__time-list-item--disabled"), r.props.injectTimes && (3600 * b.getHours(e) + 60 * C.getMinutes(e) + P.getSeconds(e)) % (60 * (null !== (n = r.props.intervals) && void 0 !== n ? n : t.defaultProps.intervals)) != 0 && a.push("react-datepicker__time-list-item--injected"), a.join(" ");
            }, r.handleOnKeyDown = function(e, t) {
                var n, a;
                e.key === ye.Space && (e.preventDefault(), e.key = ye.Enter), (e.key === ye.ArrowUp || e.key === ye.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === ye.ArrowDown || e.key === ye.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === ye.Enter && r.handleClick(t), null === (a = (n = r.props).handleOnKeyDown) || void 0 === a || a.call(n, e);
            }, r.renderTimes = function() {
                for(var e, n = [], a = r.props.format ? r.props.format : "p", o = null !== (e = r.props.intervals) && void 0 !== e ? e : t.defaultProps.intervals, i = r.props.selected || r.props.openToDate || Me(), l = Ye(i), c = r.props.injectTimes && r.props.injectTimes.sort(function(e, t) {
                    return e.getTime() - t.getTime();
                }), p = 60 * function(e) {
                    var t = new Date(e.getFullYear(), e.getMonth(), e.getDate()), r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 24);
                    return Math.round((+r - +t) / 36e5);
                }(i), d = p / o, u = 0; u < d; u++){
                    var f = s.addMinutes(l, u * o);
                    if (n.push(f), c) {
                        var h = ft(l, f, u, o, c);
                        n = n.concat(h);
                    }
                }
                var m = n.reduce(function(e, t) {
                    return t.getTime() <= i.getTime() ? t : e;
                }, n[0]);
                return n.map(function(e) {
                    return ue.default.createElement("li", {
                        key: e.valueOf(),
                        onClick: r.handleClick.bind(r, e),
                        className: r.liClasses(e),
                        ref: function(t) {
                            e === m && (r.centerLi = t);
                        },
                        onKeyDown: function(t) {
                            r.handleOnKeyDown(t, e);
                        },
                        tabIndex: e === m ? 0 : -1,
                        role: "option",
                        "aria-selected": r.isSelectedTime(e) ? "true" : void 0,
                        "aria-disabled": r.isDisabledTime(e) ? "true" : void 0
                    }, _e(e, a, r.props.locale));
                });
            }, r;
        }
        return ve(t, e), Object.defineProperty(t, "defaultProps", {
            get: function() {
                return {
                    intervals: 30,
                    todayButton: null,
                    timeCaption: "Time"
                };
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.componentDidMount = function() {
            this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({
                height: this.props.monthRef.clientHeight - this.header.clientHeight
            });
        }, t.prototype.render = function() {
            var e, r = this, n = this.state.height;
            return ue.default.createElement("div", {
                className: "react-datepicker__time-container ".concat((null !== (e = this.props.todayButton) && void 0 !== e ? e : t.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "")
            }, ue.default.createElement("div", {
                className: "react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""),
                ref: function(e) {
                    r.header = e;
                }
            }, ue.default.createElement("div", {
                className: "react-datepicker-time__header"
            }, this.props.timeCaption)), ue.default.createElement("div", {
                className: "react-datepicker__time"
            }, ue.default.createElement("div", {
                className: "react-datepicker__time-box"
            }, ue.default.createElement("ul", {
                className: "react-datepicker__time-list",
                ref: function(e) {
                    r.list = e;
                },
                style: n ? {
                    height: n
                } : {},
                role: "listbox",
                "aria-label": this.props.timeCaption
            }, this.renderTimes()))));
        }, t.calcCenterPosition = function(e, t) {
            return t.offsetTop - (e / 2 - t.clientHeight / 2);
        }, t;
    }(r.Component), Ht = function(e) {
        function n(n) {
            var a = e.call(this, n) || this;
            return a.YEAR_REFS = De([], Array(a.props.yearItemNumber), !0).map(function() {
                return r.createRef();
            }), a.isDisabled = function(e) {
                return je(e, {
                    minDate: a.props.minDate,
                    maxDate: a.props.maxDate,
                    excludeDates: a.props.excludeDates,
                    includeDates: a.props.includeDates,
                    filterDate: a.props.filterDate
                });
            }, a.isExcluded = function(e) {
                return Ue(e, {
                    excludeDates: a.props.excludeDates
                });
            }, a.selectingDate = function() {
                var e;
                return null !== (e = a.props.selectingDate) && void 0 !== e ? e : a.props.preSelection;
            }, a.updateFocusOnPaginate = function(e) {
                window.requestAnimationFrame(function() {
                    var t, r;
                    null === (r = null === (t = a.YEAR_REFS[e]) || void 0 === t ? void 0 : t.current) || void 0 === r || r.focus();
                });
            }, a.handleYearClick = function(e, t) {
                a.props.onDayClick && a.props.onDayClick(e, t);
            }, a.handleYearNavigation = function(e, t) {
                var r, n, o, s, i = a.props, l = i.date, c = i.yearItemNumber;
                if (void 0 !== l && void 0 !== c) {
                    var p = mt(l, c).startPeriod;
                    a.isDisabled(t) || a.isExcluded(t) || (null === (n = (r = a.props).setPreSelection) || void 0 === n || n.call(r, t), e - p < 0 ? a.updateFocusOnPaginate(c - (p - e)) : e - p >= c ? a.updateFocusOnPaginate(Math.abs(c - (e - p))) : null === (s = null === (o = a.YEAR_REFS[e - p]) || void 0 === o ? void 0 : o.current) || void 0 === s || s.focus());
                }
            }, a.isSameDay = function(e, t) {
                return He(e, t);
            }, a.isCurrentYear = function(e) {
                return e === x.getYear(Me());
            }, a.isRangeStart = function(e) {
                return a.props.startDate && a.props.endDate && Le(G.setYear(Me(), e), a.props.startDate);
            }, a.isRangeEnd = function(e) {
                return a.props.startDate && a.props.endDate && Le(G.setYear(Me(), e), a.props.endDate);
            }, a.isInRange = function(e) {
                return Je(e, a.props.startDate, a.props.endDate);
            }, a.isInSelectingRange = function(e) {
                var t = a.props, r = t.selectsStart, n = t.selectsEnd, o = t.selectsRange, s = t.startDate, i = t.endDate;
                return !(!(r || n || o) || !a.selectingDate()) && (r && i ? Je(e, a.selectingDate(), i) : (n && s || !(!o || !s || i)) && Je(e, s, a.selectingDate()));
            }, a.isSelectingRangeStart = function(e) {
                var t;
                if (!a.isInSelectingRange(e)) return !1;
                var r = a.props, n = r.startDate, o = r.selectsStart, s = G.setYear(Me(), e);
                return Le(s, o ? null !== (t = a.selectingDate()) && void 0 !== t ? t : null : null != n ? n : null);
            }, a.isSelectingRangeEnd = function(e) {
                var t;
                if (!a.isInSelectingRange(e)) return !1;
                var r = a.props, n = r.endDate, o = r.selectsEnd, s = r.selectsRange, i = G.setYear(Me(), e);
                return Le(i, o || s ? null !== (t = a.selectingDate()) && void 0 !== t ? t : null : null != n ? n : null);
            }, a.isKeyboardSelected = function(e) {
                if (void 0 !== a.props.date && null != a.props.selected && null != a.props.preSelection) {
                    var t = a.props, r = t.minDate, n = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate, l = Oe(G.setYear(a.props.date, e)), c = (r || n || o || s || i) && Ze(e, a.props);
                    return !a.props.disabledKeyboardNavigation && !a.props.inline && !He(l, Oe(a.props.selected)) && He(l, Oe(a.props.preSelection)) && !c;
                }
            }, a.onYearClick = function(e, t) {
                var r = a.props.date;
                void 0 !== r && a.handleYearClick(Oe(G.setYear(r, t)), e);
            }, a.onYearKeyDown = function(e, t) {
                var r, n, o = e.key, s = a.props, i = s.date, l = s.yearItemNumber, c = s.handleOnKeyDown;
                if (o !== ye.Tab && e.preventDefault(), !a.props.disabledKeyboardNavigation) switch(o){
                    case ye.Enter:
                        if (null == a.props.selected) break;
                        a.onYearClick(e, t), null === (n = (r = a.props).setPreSelection) || void 0 === n || n.call(r, a.props.selected);
                        break;
                    case ye.ArrowRight:
                        if (null == a.props.preSelection) break;
                        a.handleYearNavigation(t + 1, d.addYears(a.props.preSelection, 1));
                        break;
                    case ye.ArrowLeft:
                        if (null == a.props.preSelection) break;
                        a.handleYearNavigation(t - 1, ie.subYears(a.props.preSelection, 1));
                        break;
                    case ye.ArrowUp:
                        if (void 0 === i || void 0 === l || null == a.props.preSelection) break;
                        var p = mt(i, l).startPeriod;
                        if ((h = t - (f = 3)) < p) {
                            var u = l % f;
                            t >= p && t < p + u ? f = u : f += u, h = t - f;
                        }
                        a.handleYearNavigation(h, ie.subYears(a.props.preSelection, f));
                        break;
                    case ye.ArrowDown:
                        if (void 0 === i || void 0 === l || null == a.props.preSelection) break;
                        var f, h, m = mt(i, l).endPeriod;
                        if ((h = t + (f = 3)) > m) {
                            u = l % f;
                            t <= m && t > m - u ? f = u : f += u, h = t + f;
                        }
                        a.handleYearNavigation(h, d.addYears(a.props.preSelection, f));
                }
                c && c(e);
            }, a.getYearClassNames = function(e) {
                var r = a.props, n = r.date, o = r.minDate, s = r.maxDate, i = r.selected, l = r.excludeDates, c = r.includeDates, p = r.filterDate, d = r.yearClassName;
                return t.clsx("react-datepicker__year-text", "react-datepicker__year-".concat(e), n ? null == d ? void 0 : d(G.setYear(n, e)) : void 0, {
                    "react-datepicker__year-text--selected": i ? e === x.getYear(i) : void 0,
                    "react-datepicker__year-text--disabled": (o || s || l || c || p) && Ze(e, a.props),
                    "react-datepicker__year-text--keyboard-selected": a.isKeyboardSelected(e),
                    "react-datepicker__year-text--range-start": a.isRangeStart(e),
                    "react-datepicker__year-text--range-end": a.isRangeEnd(e),
                    "react-datepicker__year-text--in-range": a.isInRange(e),
                    "react-datepicker__year-text--in-selecting-range": a.isInSelectingRange(e),
                    "react-datepicker__year-text--selecting-range-start": a.isSelectingRangeStart(e),
                    "react-datepicker__year-text--selecting-range-end": a.isSelectingRangeEnd(e),
                    "react-datepicker__year-text--today": a.isCurrentYear(e)
                });
            }, a.getYearTabIndex = function(e) {
                return a.props.disabledKeyboardNavigation || null == a.props.preSelection ? "-1" : e === x.getYear(a.props.preSelection) ? "0" : "-1";
            }, a.getYearContainerClassNames = function() {
                var e = a.props, r = e.selectingDate, n = e.selectsStart, o = e.selectsEnd, s = e.selectsRange;
                return t.clsx("react-datepicker__year", {
                    "react-datepicker__year--selecting-range": r && (n || o || s)
                });
            }, a.getYearContent = function(e) {
                return a.props.renderYearContent ? a.props.renderYearContent(e) : e;
            }, a;
        }
        return ve(n, e), n.prototype.render = function() {
            var e = this, t = [], r = this.props, n = r.date, a = r.yearItemNumber, o = r.onYearMouseEnter, s = r.onYearMouseLeave;
            if (void 0 === n) return null;
            for(var i = mt(n, a), l = i.startPeriod, c = i.endPeriod, p = function(r) {
                t.push(ue.default.createElement("div", {
                    ref: d.YEAR_REFS[r - l],
                    onClick: function(t) {
                        e.onYearClick(t, r);
                    },
                    onKeyDown: function(t) {
                        yt(t) && (t.preventDefault(), t.key = ye.Enter), e.onYearKeyDown(t, r);
                    },
                    tabIndex: Number(d.getYearTabIndex(r)),
                    className: d.getYearClassNames(r),
                    onMouseEnter: d.props.usePointerEvent ? void 0 : function(e) {
                        return o(e, r);
                    },
                    onPointerEnter: d.props.usePointerEvent ? function(e) {
                        return o(e, r);
                    } : void 0,
                    onMouseLeave: d.props.usePointerEvent ? void 0 : function(e) {
                        return s(e, r);
                    },
                    onPointerLeave: d.props.usePointerEvent ? function(e) {
                        return s(e, r);
                    } : void 0,
                    key: r,
                    "aria-current": d.isCurrentYear(r) ? "date" : void 0
                }, d.getYearContent(r)));
            }, d = this, u = l; u <= c; u++)p(u);
            return ue.default.createElement("div", {
                className: this.getYearContainerClassNames()
            }, ue.default.createElement("div", {
                className: "react-datepicker__year-wrapper",
                onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate,
                onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0
            }, t));
        }, n;
    }(r.Component);
    function Wt(e, t, r, n) {
        for(var a = [], o = 0; o < 2 * t + 1; o++){
            var s = e + t - o, i = !0;
            r && (i = x.getYear(r) <= s), n && i && (i = x.getYear(n) >= s), i && a.push(s);
        }
        return a;
    }
    var Qt = function(e) {
        function n(t) {
            var n = e.call(this, t) || this;
            n.renderOptions = function() {
                var e = n.props.year, t = n.state.yearsList.map(function(t) {
                    return ue.default.createElement("div", {
                        className: e === t ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option",
                        key: t,
                        onClick: n.onChange.bind(n, t),
                        "aria-selected": e === t ? "true" : void 0
                    }, e === t ? ue.default.createElement("span", {
                        className: "react-datepicker__year-option--selected"
                    }, "✓") : "", t);
                }), r = n.props.minDate ? x.getYear(n.props.minDate) : null, a = n.props.maxDate ? x.getYear(n.props.maxDate) : null;
                return a && n.state.yearsList.find(function(e) {
                    return e === a;
                }) || t.unshift(ue.default.createElement("div", {
                    className: "react-datepicker__year-option",
                    key: "upcoming",
                    onClick: n.incrementYears
                }, ue.default.createElement("a", {
                    className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                }))), r && n.state.yearsList.find(function(e) {
                    return e === r;
                }) || t.push(ue.default.createElement("div", {
                    className: "react-datepicker__year-option",
                    key: "previous",
                    onClick: n.decrementYears
                }, ue.default.createElement("a", {
                    className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                }))), t;
            }, n.onChange = function(e) {
                n.props.onChange(e);
            }, n.handleClickOutside = function() {
                n.props.onCancel();
            }, n.shiftYears = function(e) {
                var t = n.state.yearsList.map(function(t) {
                    return t + e;
                });
                n.setState({
                    yearsList: t
                });
            }, n.incrementYears = function() {
                return n.shiftYears(1);
            }, n.decrementYears = function() {
                return n.shiftYears(-1);
            };
            var a = t.yearDropdownItemNumber, o = t.scrollableYearDropdown, s = a || (o ? 10 : 5);
            return n.state = {
                yearsList: Wt(n.props.year, s, n.props.minDate, n.props.maxDate)
            }, n.dropdownRef = r.createRef(), n;
        }
        return ve(n, e), n.prototype.componentDidMount = function() {
            var e = this.dropdownRef.current;
            if (e) {
                var t = e.children ? Array.from(e.children) : null, r = t ? t.find(function(e) {
                    return e.ariaSelected;
                }) : null;
                e.scrollTop = r && r instanceof HTMLElement ? r.offsetTop + (r.clientHeight - e.clientHeight) / 2 : (e.scrollHeight - e.clientHeight) / 2;
            }
        }, n.prototype.render = function() {
            var e = t.clsx({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
            });
            return ue.default.createElement("div", {
                className: e,
                ref: this.dropdownRef
            }, this.renderOptions());
        }, n;
    }(r.Component), qt = fe.default(Qt), Kt = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                dropdownVisible: !1
            }, t.renderSelectOptions = function() {
                for(var e = t.props.minDate ? x.getYear(t.props.minDate) : 1900, r = t.props.maxDate ? x.getYear(t.props.maxDate) : 2100, n = [], a = e; a <= r; a++)n.push(ue.default.createElement("option", {
                    key: a,
                    value: a
                }, a));
                return n;
            }, t.onSelectChange = function(e) {
                t.onChange(parseInt(e.target.value));
            }, t.renderSelectMode = function() {
                return ue.default.createElement("select", {
                    value: t.props.year,
                    className: "react-datepicker__year-select",
                    onChange: t.onSelectChange
                }, t.renderSelectOptions());
            }, t.renderReadView = function(e) {
                return ue.default.createElement("div", {
                    key: "read",
                    style: {
                        visibility: e ? "visible" : "hidden"
                    },
                    className: "react-datepicker__year-read-view",
                    onClick: function(e) {
                        return t.toggleDropdown(e);
                    }
                }, ue.default.createElement("span", {
                    className: "react-datepicker__year-read-view--down-arrow"
                }), ue.default.createElement("span", {
                    className: "react-datepicker__year-read-view--selected-year"
                }, t.props.year));
            }, t.renderDropdown = function() {
                return ue.default.createElement(qt, ge({
                    key: "dropdown"
                }, t.props, {
                    onChange: t.onChange,
                    onCancel: t.toggleDropdown
                }));
            }, t.renderScrollMode = function() {
                var e = t.state.dropdownVisible, r = [
                    t.renderReadView(!e)
                ];
                return e && r.unshift(t.renderDropdown()), r;
            }, t.onChange = function(e) {
                t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
            }, t.toggleDropdown = function(e) {
                t.setState({
                    dropdownVisible: !t.state.dropdownVisible
                }, function() {
                    t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
                });
            }, t.handleYearChange = function(e, r) {
                t.onSelect(e, r), t.setOpen();
            }, t.onSelect = function(e, r) {
                t.props.onSelect && t.props.onSelect(e, r);
            }, t.setOpen = function() {
                t.props.setOpen && t.props.setOpen(!0);
            }, t;
        }
        return ve(t, e), t.prototype.render = function() {
            var e;
            switch(this.props.dropdownMode){
                case "scroll":
                    e = this.renderScrollMode();
                    break;
                case "select":
                    e = this.renderSelectMode();
            }
            return ue.default.createElement("div", {
                className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)
            }, e);
        }, t;
    }(r.Component), Bt = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select"
    ], Vt = function(e) {
        function n(o) {
            var s = e.call(this, o) || this;
            return s.monthContainer = void 0, s.handleClickOutside = function(e) {
                s.props.onClickOutside(e);
            }, s.setClickOutsideRef = function() {
                return s.containerRef.current;
            }, s.handleDropdownFocus = function(e) {
                var t, r, n, a;
                n = e.target, a = (n.className || "").split(/\s+/), Bt.some(function(e) {
                    return a.indexOf(e) >= 0;
                }) && (null === (r = (t = s.props).onDropdownFocus) || void 0 === r || r.call(t, e));
            }, s.getDateInView = function() {
                var e = s.props, t = e.preSelection, r = e.selected, n = e.openToDate, a = ct(s.props), o = pt(s.props), i = Me(), l = n || r || t;
                return l || (a && O.isBefore(i, a) ? a : o && N.isAfter(i, o) ? o : i);
            }, s.increaseMonth = function() {
                s.setState(function(e) {
                    var t = e.date;
                    return {
                        date: i.addMonths(t, 1)
                    };
                }, function() {
                    return s.handleMonthChange(s.state.date);
                });
            }, s.decreaseMonth = function() {
                s.setState(function(e) {
                    var t = e.date;
                    return {
                        date: ae.subMonths(t, 1)
                    };
                }, function() {
                    return s.handleMonthChange(s.state.date);
                });
            }, s.handleDayClick = function(e, t, r) {
                s.props.onSelect(e, t, r), s.props.setPreSelection && s.props.setPreSelection(e);
            }, s.handleDayMouseEnter = function(e) {
                s.setState({
                    selectingDate: e
                }), s.props.onDayMouseEnter && s.props.onDayMouseEnter(e);
            }, s.handleMonthMouseLeave = function() {
                s.setState({
                    selectingDate: void 0
                }), s.props.onMonthMouseLeave && s.props.onMonthMouseLeave();
            }, s.handleYearMouseEnter = function(e, t) {
                s.setState({
                    selectingDate: G.setYear(Me(), t)
                }), s.props.onYearMouseEnter && s.props.onYearMouseEnter(e, t);
            }, s.handleYearMouseLeave = function(e, t) {
                s.props.onYearMouseLeave && s.props.onYearMouseLeave(e, t);
            }, s.handleYearChange = function(e) {
                s.props.onYearChange && (s.props.onYearChange(e), s.setState({
                    isRenderAriaLiveMessage: !0
                })), s.props.adjustDateOnChange && (s.props.onSelect && s.props.onSelect(e), s.props.setOpen && s.props.setOpen(!0)), s.props.setPreSelection && s.props.setPreSelection(e);
            }, s.handleMonthChange = function(e) {
                s.handleCustomMonthChange(e), s.props.adjustDateOnChange && (s.props.onSelect && s.props.onSelect(e), s.props.setOpen && s.props.setOpen(!0)), s.props.setPreSelection && s.props.setPreSelection(e);
            }, s.handleCustomMonthChange = function(e) {
                s.props.onMonthChange && (s.props.onMonthChange(e), s.setState({
                    isRenderAriaLiveMessage: !0
                }));
            }, s.handleMonthYearChange = function(e) {
                s.handleYearChange(e), s.handleMonthChange(e);
            }, s.changeYear = function(e) {
                s.setState(function(t) {
                    var r = t.date;
                    return {
                        date: G.setYear(r, Number(e))
                    };
                }, function() {
                    return s.handleYearChange(s.state.date);
                });
            }, s.changeMonth = function(e) {
                s.setState(function(t) {
                    var r = t.date;
                    return {
                        date: $.setMonth(r, Number(e))
                    };
                }, function() {
                    return s.handleMonthChange(s.state.date);
                });
            }, s.changeMonthYear = function(e) {
                s.setState(function(t) {
                    var r = t.date;
                    return {
                        date: G.setYear($.setMonth(r, _.getMonth(e)), x.getYear(e))
                    };
                }, function() {
                    return s.handleMonthYearChange(s.state.date);
                });
            }, s.header = function(e) {
                void 0 === e && (e = s.state.date);
                var r = xe(e, s.props.locale, s.props.calendarStartDay), n = [];
                return s.props.showWeekNumbers && n.push(ue.default.createElement("div", {
                    key: "W",
                    className: "react-datepicker__day-name"
                }, s.props.weekLabel || "#")), n.concat([
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ].map(function(e) {
                    var n = a.addDays(r, e), o = s.formatWeekday(n, s.props.locale), i = s.props.weekDayClassName ? s.props.weekDayClassName(n) : void 0;
                    return ue.default.createElement("div", {
                        key: e,
                        "aria-label": _e(n, "EEEE", s.props.locale),
                        className: t.clsx("react-datepicker__day-name", i)
                    }, o);
                }));
            }, s.formatWeekday = function(e, t) {
                return s.props.formatWeekDay ? function(e, t, r) {
                    return t(_e(e, "EEEE", r));
                }(e, s.props.formatWeekDay, t) : s.props.useWeekdaysShort ? function(e, t) {
                    return _e(e, "EEE", t);
                }(e, t) : function(e, t) {
                    return _e(e, "EEEEEE", t);
                }(e, t);
            }, s.decreaseYear = function() {
                s.setState(function(e) {
                    var t, r = e.date;
                    return {
                        date: ie.subYears(r, s.props.showYearPicker ? null !== (t = s.props.yearItemNumber) && void 0 !== t ? t : n.defaultProps.yearItemNumber : 1)
                    };
                }, function() {
                    return s.handleYearChange(s.state.date);
                });
            }, s.clearSelectingDate = function() {
                s.setState({
                    selectingDate: void 0
                });
            }, s.renderPreviousButton = function() {
                var e;
                if (!s.props.renderCustomHeader) {
                    var t;
                    switch(!0){
                        case s.props.showMonthYearPicker:
                            t = it(s.state.date, s.props);
                            break;
                        case s.props.showYearPicker:
                            t = function(e, t) {
                                var r = void 0 === t ? {} : t, n = r.minDate, a = r.yearItemNumber, o = void 0 === a ? Se : a, s = mt(Oe(ie.subYears(e, o)), o).endPeriod, i = n && x.getYear(n);
                                return i && i > s || !1;
                            }(s.state.date, s.props);
                            break;
                        case s.props.showQuarterYearPicker:
                            t = function(e, t) {
                                var r = void 0 === t ? {} : t, n = r.minDate, a = r.includeDates, o = re.startOfYear(e), s = oe.subQuarters(o, 1);
                                return n && h.differenceInCalendarQuarters(n, s) > 0 || a && a.every(function(e) {
                                    return h.differenceInCalendarQuarters(e, s) > 0;
                                }) || !1;
                            }(s.state.date, s.props);
                            break;
                        default:
                            t = ot(s.state.date, s.props);
                    }
                    if (((null !== (e = s.props.forceShowMonthNavigation) && void 0 !== e ? e : n.defaultProps.forceShowMonthNavigation) || s.props.showDisabledMonthNavigation || !t) && !s.props.showTimeSelectOnly) {
                        var r = [
                            "react-datepicker__navigation",
                            "react-datepicker__navigation--previous"
                        ], a = s.decreaseMonth;
                        (s.props.showMonthYearPicker || s.props.showQuarterYearPicker || s.props.showYearPicker) && (a = s.decreaseYear), t && s.props.showDisabledMonthNavigation && (r.push("react-datepicker__navigation--previous--disabled"), a = void 0);
                        var o = s.props.showMonthYearPicker || s.props.showQuarterYearPicker || s.props.showYearPicker, i = s.props, l = i.previousMonthButtonLabel, c = void 0 === l ? n.defaultProps.previousMonthButtonLabel : l, p = i.previousYearButtonLabel, d = void 0 === p ? n.defaultProps.previousYearButtonLabel : p, u = s.props, f = u.previousMonthAriaLabel, m = void 0 === f ? "string" == typeof c ? c : "Previous Month" : f, v = u.previousYearAriaLabel, g = void 0 === v ? "string" == typeof d ? d : "Previous Year" : v;
                        return ue.default.createElement("button", {
                            type: "button",
                            className: r.join(" "),
                            onClick: a,
                            onKeyDown: s.props.handleOnKeyDown,
                            "aria-label": o ? g : m
                        }, ue.default.createElement("span", {
                            className: [
                                "react-datepicker__navigation-icon",
                                "react-datepicker__navigation-icon--previous"
                            ].join(" ")
                        }, o ? d : c));
                    }
                }
            }, s.increaseYear = function() {
                s.setState(function(e) {
                    var t, r = e.date;
                    return {
                        date: d.addYears(r, s.props.showYearPicker ? null !== (t = s.props.yearItemNumber) && void 0 !== t ? t : n.defaultProps.yearItemNumber : 1)
                    };
                }, function() {
                    return s.handleYearChange(s.state.date);
                });
            }, s.renderNextButton = function() {
                var e;
                if (!s.props.renderCustomHeader) {
                    var t;
                    switch(!0){
                        case s.props.showMonthYearPicker:
                            t = lt(s.state.date, s.props);
                            break;
                        case s.props.showYearPicker:
                            t = function(e, t) {
                                var r = void 0 === t ? {} : t, n = r.maxDate, a = r.yearItemNumber, o = void 0 === a ? Se : a, s = mt(d.addYears(e, o), o).startPeriod, i = n && x.getYear(n);
                                return i && i < s || !1;
                            }(s.state.date, s.props);
                            break;
                        case s.props.showQuarterYearPicker:
                            t = function(e, t) {
                                var r = void 0 === t ? {} : t, n = r.maxDate, a = r.includeDates, o = y.endOfYear(e), s = l.addQuarters(o, 1);
                                return n && h.differenceInCalendarQuarters(s, n) > 0 || a && a.every(function(e) {
                                    return h.differenceInCalendarQuarters(s, e) > 0;
                                }) || !1;
                            }(s.state.date, s.props);
                            break;
                        default:
                            t = st(s.state.date, s.props);
                    }
                    if (((null !== (e = s.props.forceShowMonthNavigation) && void 0 !== e ? e : n.defaultProps.forceShowMonthNavigation) || s.props.showDisabledMonthNavigation || !t) && !s.props.showTimeSelectOnly) {
                        var r = [
                            "react-datepicker__navigation",
                            "react-datepicker__navigation--next"
                        ];
                        s.props.showTimeSelect && r.push("react-datepicker__navigation--next--with-time"), s.props.todayButton && r.push("react-datepicker__navigation--next--with-today-button");
                        var a = s.increaseMonth;
                        (s.props.showMonthYearPicker || s.props.showQuarterYearPicker || s.props.showYearPicker) && (a = s.increaseYear), t && s.props.showDisabledMonthNavigation && (r.push("react-datepicker__navigation--next--disabled"), a = void 0);
                        var o = s.props.showMonthYearPicker || s.props.showQuarterYearPicker || s.props.showYearPicker, i = s.props, c = i.nextMonthButtonLabel, p = void 0 === c ? n.defaultProps.nextMonthButtonLabel : c, u = i.nextYearButtonLabel, f = void 0 === u ? n.defaultProps.nextYearButtonLabel : u, m = s.props, v = m.nextMonthAriaLabel, g = void 0 === v ? "string" == typeof p ? p : "Next Month" : v, D = m.nextYearAriaLabel, k = void 0 === D ? "string" == typeof f ? f : "Next Year" : D;
                        return ue.default.createElement("button", {
                            type: "button",
                            className: r.join(" "),
                            onClick: a,
                            onKeyDown: s.props.handleOnKeyDown,
                            "aria-label": o ? k : g
                        }, ue.default.createElement("span", {
                            className: [
                                "react-datepicker__navigation-icon",
                                "react-datepicker__navigation-icon--next"
                            ].join(" ")
                        }, o ? f : p));
                    }
                }
            }, s.renderCurrentMonth = function(e) {
                void 0 === e && (e = s.state.date);
                var t = [
                    "react-datepicker__current-month"
                ];
                return s.props.showYearDropdown && t.push("react-datepicker__current-month--hasYearDropdown"), s.props.showMonthDropdown && t.push("react-datepicker__current-month--hasMonthDropdown"), s.props.showMonthYearDropdown && t.push("react-datepicker__current-month--hasMonthYearDropdown"), ue.default.createElement("h2", {
                    className: t.join(" ")
                }, _e(e, s.props.dateFormat, s.props.locale));
            }, s.renderYearDropdown = function(e) {
                if (void 0 === e && (e = !1), s.props.showYearDropdown && !e) return ue.default.createElement(Kt, ge({}, n.defaultProps, s.props, {
                    date: s.state.date,
                    onChange: s.changeYear,
                    year: x.getYear(s.state.date)
                }));
            }, s.renderMonthDropdown = function(e) {
                if (void 0 === e && (e = !1), s.props.showMonthDropdown && !e) return ue.default.createElement(It, ge({}, n.defaultProps, s.props, {
                    month: _.getMonth(s.state.date),
                    onChange: s.changeMonth
                }));
            }, s.renderMonthYearDropdown = function(e) {
                if (void 0 === e && (e = !1), s.props.showMonthYearDropdown && !e) return ue.default.createElement(At, ge({}, n.defaultProps, s.props, {
                    date: s.state.date,
                    onChange: s.changeMonthYear
                }));
            }, s.handleTodayButtonClick = function(e) {
                s.props.onSelect(Te(), e), s.props.setPreSelection && s.props.setPreSelection(Te());
            }, s.renderTodayButton = function() {
                if (s.props.todayButton && !s.props.showTimeSelectOnly) return ue.default.createElement("div", {
                    className: "react-datepicker__today-button",
                    onClick: s.handleTodayButtonClick
                }, s.props.todayButton);
            }, s.renderDefaultHeader = function(e) {
                var t = e.monthDate, r = e.i;
                return ue.default.createElement("div", {
                    className: "react-datepicker__header ".concat(s.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "")
                }, s.renderCurrentMonth(t), ue.default.createElement("div", {
                    className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(s.props.dropdownMode),
                    onFocus: s.handleDropdownFocus
                }, s.renderMonthDropdown(0 !== r), s.renderMonthYearDropdown(0 !== r), s.renderYearDropdown(0 !== r)), ue.default.createElement("div", {
                    className: "react-datepicker__day-names"
                }, s.header(t)));
            }, s.renderCustomHeader = function(e) {
                var t, r, n = e.monthDate, a = e.i;
                if (s.props.showTimeSelect && !s.state.monthContainer || s.props.showTimeSelectOnly) return null;
                var o = ot(s.state.date, s.props), i = st(s.state.date, s.props), l = it(s.state.date, s.props), c = lt(s.state.date, s.props), p = !s.props.showMonthYearPicker && !s.props.showQuarterYearPicker && !s.props.showYearPicker;
                return ue.default.createElement("div", {
                    className: "react-datepicker__header react-datepicker__header--custom",
                    onFocus: s.props.onDropdownFocus
                }, null === (r = (t = s.props).renderCustomHeader) || void 0 === r ? void 0 : r.call(t, ge(ge({}, s.state), {
                    customHeaderCount: a,
                    monthDate: n,
                    changeMonth: s.changeMonth,
                    changeYear: s.changeYear,
                    decreaseMonth: s.decreaseMonth,
                    increaseMonth: s.increaseMonth,
                    decreaseYear: s.decreaseYear,
                    increaseYear: s.increaseYear,
                    prevMonthButtonDisabled: o,
                    nextMonthButtonDisabled: i,
                    prevYearButtonDisabled: l,
                    nextYearButtonDisabled: c
                })), p && ue.default.createElement("div", {
                    className: "react-datepicker__day-names"
                }, s.header(n)));
            }, s.renderYearHeader = function(e) {
                var t = e.monthDate, r = s.props, a = r.showYearPicker, o = r.yearItemNumber, i = mt(t, void 0 === o ? n.defaultProps.yearItemNumber : o), l = i.startPeriod, c = i.endPeriod;
                return ue.default.createElement("div", {
                    className: "react-datepicker__header react-datepicker-year-header"
                }, a ? "".concat(l, " - ").concat(c) : x.getYear(t));
            }, s.renderHeader = function(e) {
                var t = e.monthDate, r = e.i, n = {
                    monthDate: t,
                    i: void 0 === r ? 0 : r
                };
                switch(!0){
                    case void 0 !== s.props.renderCustomHeader:
                        return s.renderCustomHeader(n);
                    case s.props.showMonthYearPicker || s.props.showQuarterYearPicker || s.props.showYearPicker:
                        return s.renderYearHeader(n);
                    default:
                        return s.renderDefaultHeader(n);
                }
            }, s.renderMonths = function() {
                var e, t;
                if (!s.props.showTimeSelectOnly && !s.props.showYearPicker) {
                    for(var r = [], a = null !== (e = s.props.monthsShown) && void 0 !== e ? e : n.defaultProps.monthsShown, o = s.props.showPreviousMonths ? a - 1 : 0, l = s.props.showMonthYearPicker || s.props.showQuarterYearPicker ? d.addYears(s.state.date, o) : ae.subMonths(s.state.date, o), c = null !== (t = s.props.monthSelectedIn) && void 0 !== t ? t : o, p = 0; p < a; ++p){
                        var u = p - c + o, f = s.props.showMonthYearPicker || s.props.showQuarterYearPicker ? d.addYears(l, u) : i.addMonths(l, u), h = "month-".concat(p), m = p < a - 1, v = p > 0;
                        r.push(ue.default.createElement("div", {
                            key: h,
                            ref: function(e) {
                                s.monthContainer = null != e ? e : void 0;
                            },
                            className: "react-datepicker__month-container"
                        }, s.renderHeader({
                            monthDate: f,
                            i: p
                        }), ue.default.createElement(xt, ge({}, n.defaultProps, s.props, {
                            ariaLabelPrefix: s.props.monthAriaLabelPrefix,
                            day: f,
                            onDayClick: s.handleDayClick,
                            handleOnKeyDown: s.props.handleOnDayKeyDown,
                            handleOnMonthKeyDown: s.props.handleOnKeyDown,
                            onDayMouseEnter: s.handleDayMouseEnter,
                            onMouseLeave: s.handleMonthMouseLeave,
                            orderInDisplay: p,
                            selectingDate: s.state.selectingDate,
                            monthShowsDuplicateDaysEnd: m,
                            monthShowsDuplicateDaysStart: v
                        }))));
                    }
                    return r;
                }
            }, s.renderYears = function() {
                if (!s.props.showTimeSelectOnly) return s.props.showYearPicker ? ue.default.createElement("div", {
                    className: "react-datepicker__year--container"
                }, s.renderHeader({
                    monthDate: s.state.date
                }), ue.default.createElement(Ht, ge({}, n.defaultProps, s.props, {
                    selectingDate: s.state.selectingDate,
                    date: s.state.date,
                    onDayClick: s.handleDayClick,
                    clearSelectingDate: s.clearSelectingDate,
                    onYearMouseEnter: s.handleYearMouseEnter,
                    onYearMouseLeave: s.handleYearMouseLeave
                }))) : void 0;
            }, s.renderTimeSection = function() {
                if (s.props.showTimeSelect && (s.state.monthContainer || s.props.showTimeSelectOnly)) return ue.default.createElement(Ft, ge({}, n.defaultProps, s.props, {
                    onChange: s.props.onTimeChange,
                    format: s.props.timeFormat,
                    intervals: s.props.timeIntervals,
                    monthRef: s.state.monthContainer
                }));
            }, s.renderInputTimeSection = function() {
                var e = s.props.selected ? new Date(s.props.selected) : void 0, t = e && Ce(e) && Boolean(s.props.selected) ? "".concat(ht(e.getHours()), ":").concat(ht(e.getMinutes())) : "";
                if (s.props.showTimeInput) return ue.default.createElement(wt, ge({}, n.defaultProps, s.props, {
                    date: e,
                    timeString: t,
                    onChange: s.props.onTimeChange
                }));
            }, s.renderAriaLiveRegion = function() {
                var e, t, r = mt(s.state.date, null !== (e = s.props.yearItemNumber) && void 0 !== e ? e : n.defaultProps.yearItemNumber), a = r.startPeriod, o = r.endPeriod;
                return t = s.props.showYearPicker ? "".concat(a, " - ").concat(o) : s.props.showMonthYearPicker || s.props.showQuarterYearPicker ? x.getYear(s.state.date) : "".concat(Be(_.getMonth(s.state.date), s.props.locale), " ").concat(x.getYear(s.state.date)), ue.default.createElement("span", {
                    role: "alert",
                    "aria-live": "polite",
                    className: "react-datepicker__aria-live"
                }, s.state.isRenderAriaLiveMessage && t);
            }, s.renderChildren = function() {
                if (s.props.children) return ue.default.createElement("div", {
                    className: "react-datepicker__children-container"
                }, s.props.children);
            }, s.containerRef = r.createRef(), s.state = {
                date: s.getDateInView(),
                selectingDate: void 0,
                monthContainer: void 0,
                isRenderAriaLiveMessage: !1
            }, s;
        }
        return ve(n, e), Object.defineProperty(n, "defaultProps", {
            get: function() {
                return {
                    monthsShown: 1,
                    forceShowMonthNavigation: !1,
                    timeCaption: "Time",
                    previousYearButtonLabel: "Previous Year",
                    nextYearButtonLabel: "Next Year",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthButtonLabel: "Next Month",
                    yearItemNumber: Se
                };
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.componentDidMount = function() {
            var e = this;
            this.props.showTimeSelect && (this.assignMonthContainer = void e.setState({
                monthContainer: e.monthContainer
            }));
        }, n.prototype.componentDidUpdate = function(e) {
            var t = this;
            if (!this.props.preSelection || He(this.props.preSelection, e.preSelection) && this.props.monthSelectedIn === e.monthSelectedIn) this.props.openToDate && !He(this.props.openToDate, e.openToDate) && this.setState({
                date: this.props.openToDate
            });
            else {
                var r = !Ae(this.state.date, this.props.preSelection);
                this.setState({
                    date: this.props.preSelection
                }, function() {
                    return r && t.handleCustomMonthChange(t.state.date);
                });
            }
        }, n.prototype.render = function() {
            var e = this.props.container || ke;
            return ue.default.createElement("div", {
                style: {
                    display: "contents"
                },
                ref: this.containerRef
            }, ue.default.createElement(e, {
                className: t.clsx("react-datepicker", this.props.className, {
                    "react-datepicker--time-only": this.props.showTimeSelectOnly
                }),
                showTime: this.props.showTimeSelect || this.props.showTimeInput,
                showTimeSelectOnly: this.props.showTimeSelectOnly
            }, this.renderAriaLiveRegion(), this.renderPreviousButton(), this.renderNextButton(), this.renderMonths(), this.renderYears(), this.renderTodayButton(), this.renderTimeSection(), this.renderInputTimeSection(), this.renderChildren()));
        }, n;
    }(r.Component), jt = function(e) {
        var t = e.icon, r = e.className, n = void 0 === r ? "" : r, a = e.onClick, o = "react-datepicker__calendar-icon";
        return "string" == typeof t ? ue.default.createElement("i", {
            className: "".concat(o, " ").concat(t, " ").concat(n),
            "aria-hidden": "true",
            onClick: a
        }) : ue.default.isValidElement(t) ? ue.default.cloneElement(t, {
            className: "".concat(t.props.className || "", " ").concat(o, " ").concat(n),
            onClick: function(e) {
                "function" == typeof t.props.onClick && t.props.onClick(e), "function" == typeof a && a(e);
            }
        }) : ue.default.createElement("svg", {
            className: "".concat(o, " ").concat(n),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            onClick: a
        }, ue.default.createElement("path", {
            d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
        }));
    }, Ut = function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.portalRoot = null, r.el = document.createElement("div"), r;
        }
        return ve(t, e), t.prototype.componentDidMount = function() {
            this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
        }, t.prototype.componentWillUnmount = function() {
            this.portalRoot && this.portalRoot.removeChild(this.el);
        }, t.prototype.render = function() {
            return he.default.createPortal(this.props.children, this.el);
        }, t;
    }(r.Component), $t = function(e) {
        return (e instanceof HTMLAnchorElement || !e.disabled) && -1 !== e.tabIndex;
    }, zt = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.getTabChildren = function() {
                var e;
                return Array.prototype.slice.call(null === (e = n.tabLoopRef.current) || void 0 === e ? void 0 : e.querySelectorAll("[tabindex], a, button, input, select, textarea"), 1, -1).filter($t);
            }, n.handleFocusStart = function() {
                var e = n.getTabChildren();
                e && e.length > 1 && e[e.length - 1].focus();
            }, n.handleFocusEnd = function() {
                var e = n.getTabChildren();
                e && e.length > 1 && e[0].focus();
            }, n.tabLoopRef = r.createRef(), n;
        }
        return ve(t, e), t.prototype.render = function() {
            var e;
            return (null !== (e = this.props.enableTabLoop) && void 0 !== e ? e : t.defaultProps.enableTabLoop) ? ue.default.createElement("div", {
                className: "react-datepicker__tab-loop",
                ref: this.tabLoopRef
            }, ue.default.createElement("div", {
                className: "react-datepicker__tab-loop__start",
                tabIndex: 0,
                onFocus: this.handleFocusStart
            }), this.props.children, ue.default.createElement("div", {
                className: "react-datepicker__tab-loop__end",
                tabIndex: 0,
                onFocus: this.handleFocusEnd
            })) : this.props.children;
        }, t.defaultProps = {
            enableTabLoop: !0
        }, t;
    }(r.Component);
    var Xt, Gt = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return ve(n, e), Object.defineProperty(n, "defaultProps", {
            get: function() {
                return {
                    hidePopper: !0
                };
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.render = function() {
            var e = this.props, a = e.className, o = e.wrapperClassName, s = e.hidePopper, i = void 0 === s ? n.defaultProps.hidePopper : s, l = e.popperComponent, c = e.targetComponent, p = e.enableTabLoop, d = e.popperOnKeyDown, u = e.portalId, f = e.portalHost, h = e.popperProps, m = e.showArrow, v = void 0;
            if (!i) {
                var g = t.clsx("react-datepicker-popper", a);
                v = ue.default.createElement(zt, {
                    enableTabLoop: p
                }, ue.default.createElement("div", {
                    ref: h.refs.setFloating,
                    style: h.floatingStyles,
                    className: g,
                    "data-placement": h.placement,
                    onKeyDown: d
                }, l, m && ue.default.createElement(ce.FloatingArrow, {
                    ref: h.arrowRef,
                    context: h.context,
                    fill: "currentColor",
                    strokeWidth: 1,
                    height: 8,
                    width: 16,
                    style: {
                        transform: "translateY(-1px)"
                    },
                    className: "react-datepicker__triangle"
                })));
            }
            this.props.popperContainer && (v = r.createElement(this.props.popperContainer, {}, v)), u && !i && (v = ue.default.createElement(Ut, {
                portalId: u,
                portalHost: f
            }, v));
            var D = t.clsx("react-datepicker-wrapper", o);
            return ue.default.createElement(ue.default.Fragment, null, ue.default.createElement("div", {
                ref: h.refs.setReference,
                className: D
            }, c), v);
        }, n;
    }(r.Component), Jt = (Xt = Gt, function(e) {
        var t, n = "boolean" != typeof e.hidePopper || e.hidePopper, a = r.useRef(null), o = ce.useFloating(ge({
            open: !n,
            whileElementsMounted: ce.autoUpdate,
            placement: e.popperPlacement,
            middleware: De([
                ce.flip({
                    padding: 15
                }),
                ce.offset(10),
                ce.arrow({
                    element: a
                })
            ], null !== (t = e.popperModifiers) && void 0 !== t ? t : [], !0)
        }, e.popperProps)), s = ge(ge({}, e), {
            hidePopper: n,
            popperProps: ge(ge({}, o), {
                arrowRef: a
            })
        });
        return ue.default.createElement(Xt, ge({}, s));
    }), Zt = "react-datepicker-ignore-onclickoutside", er = fe.default(Vt);
    var tr = "Date input not valid.", rr = function(e) {
        function n(o) {
            var s = e.call(this, o) || this;
            return s.calendar = null, s.input = null, s.getPreSelection = function() {
                return s.props.openToDate ? s.props.openToDate : s.props.selectsEnd && s.props.startDate ? s.props.startDate : s.props.selectsStart && s.props.endDate ? s.props.endDate : Me();
            }, s.modifyHolidays = function() {
                var e;
                return null === (e = s.props.holidays) || void 0 === e ? void 0 : e.reduce(function(e, t) {
                    var r = new Date(t.date);
                    return Ce(r) ? De(De([], e, !0), [
                        ge(ge({}, t), {
                            date: r
                        })
                    ], !1) : e;
                }, []);
            }, s.calcInitialState = function() {
                var e, t = s.getPreSelection(), r = ct(s.props), n = pt(s.props), a = r && O.isBefore(t, Ye(r)) ? r : n && N.isAfter(t, Re(n)) ? n : t;
                return {
                    open: s.props.startOpen || !1,
                    preventFocus: !1,
                    inputValue: null,
                    preSelection: null !== (e = s.props.selectsRange ? s.props.startDate : s.props.selected) && void 0 !== e ? e : a,
                    highlightDates: dt(s.props.highlightDates),
                    focused: !1,
                    shouldFocusDayInline: !1,
                    isRenderAriaLiveMessage: !1,
                    wasHidden: !1
                };
            }, s.resetHiddenStatus = function() {
                s.setState(ge(ge({}, s.state), {
                    wasHidden: !1
                }));
            }, s.setHiddenStatus = function() {
                s.setState(ge(ge({}, s.state), {
                    wasHidden: !0
                }));
            }, s.setHiddenStateOnVisibilityHidden = function() {
                "hidden" === document.visibilityState && s.setHiddenStatus();
            }, s.clearPreventFocusTimeout = function() {
                s.preventFocusTimeout && clearTimeout(s.preventFocusTimeout);
            }, s.setFocus = function() {
                s.input && s.input.focus && s.input.focus({
                    preventScroll: !0
                });
            }, s.setBlur = function() {
                s.input && s.input.blur && s.input.blur(), s.cancelFocusInput();
            }, s.setOpen = function(e, t) {
                void 0 === t && (t = !1), s.setState({
                    open: e,
                    preSelection: e && s.state.open ? s.state.preSelection : s.calcInitialState().preSelection,
                    lastPreSelectChange: ar
                }, function() {
                    e || s.setState(function(e) {
                        return {
                            focused: !!t && e.focused
                        };
                    }, function() {
                        !t && s.setBlur(), s.setState({
                            inputValue: null
                        });
                    });
                });
            }, s.inputOk = function() {
                return I.isDate(s.state.preSelection);
            }, s.isCalendarOpen = function() {
                return void 0 === s.props.open ? s.state.open && !s.props.disabled && !s.props.readOnly : s.props.open;
            }, s.handleFocus = function(e) {
                var t, r, n = s.state.wasHidden, a = !n || s.state.open;
                n && s.resetHiddenStatus(), !s.state.preventFocus && a && (null === (r = (t = s.props).onFocus) || void 0 === r || r.call(t, e), s.props.preventOpenOnFocus || s.props.readOnly || s.setOpen(!0)), s.setState({
                    focused: !0
                });
            }, s.sendFocusBackToInput = function() {
                s.preventFocusTimeout && s.clearPreventFocusTimeout(), s.setState({
                    preventFocus: !0
                }, function() {
                    s.preventFocusTimeout = setTimeout(function() {
                        s.setFocus(), s.setState({
                            preventFocus: !1
                        });
                    });
                });
            }, s.cancelFocusInput = function() {
                clearTimeout(s.inputFocusTimeout), s.inputFocusTimeout = void 0;
            }, s.deferFocusInput = function() {
                s.cancelFocusInput(), s.inputFocusTimeout = setTimeout(function() {
                    return s.setFocus();
                }, 1);
            }, s.handleDropdownFocus = function() {
                s.cancelFocusInput();
            }, s.handleBlur = function(e) {
                var t, r;
                (!s.state.open || s.props.withPortal || s.props.showTimeInput) && (null === (r = (t = s.props).onBlur) || void 0 === r || r.call(t, e)), s.setState({
                    focused: !1
                });
            }, s.handleCalendarClickOutside = function(e) {
                var t, r;
                s.props.inline || s.setOpen(!1), null === (r = (t = s.props).onClickOutside) || void 0 === r || r.call(t, e), s.props.withPortal && e.preventDefault();
            }, s.handleChange = function() {
                for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                var r = e[0];
                if (!s.props.onChangeRaw || (s.props.onChangeRaw.apply(s, e), r && "function" == typeof r.isDefaultPrevented && !r.isDefaultPrevented())) {
                    s.setState({
                        inputValue: (null == r ? void 0 : r.target) instanceof HTMLInputElement ? r.target.value : null,
                        lastPreSelectChange: nr
                    });
                    var a = s.props, o = a.dateFormat, i = void 0 === o ? n.defaultProps.dateFormat : o, l = a.strictParsing, c = void 0 === l ? n.defaultProps.strictParsing : l, p = function(e, t, r, n, a) {
                        var o, s = null, i = Ke(r) || Ke(qe()), l = !0;
                        if (Array.isArray(t)) return t.forEach(function(t) {
                            var o = K.parse(e, t, new Date, {
                                locale: i,
                                useAdditionalWeekYearTokens: !0,
                                useAdditionalDayOfYearTokens: !0
                            });
                            n && (l = Ce(o, a) && e === _e(o, t, r)), Ce(o, a) && l && (s = o);
                        }), s;
                        if (s = K.parse(e, t, new Date, {
                            locale: i,
                            useAdditionalWeekYearTokens: !0,
                            useAdditionalDayOfYearTokens: !0
                        }), n) l = Ce(s) && e === _e(s, t, r);
                        else if (!Ce(s)) {
                            var c = (null !== (o = t.match(be)) && void 0 !== o ? o : []).map(function(e) {
                                var t = e[0];
                                if ("p" === t || "P" === t) {
                                    var r = k.longFormatters[t];
                                    return i ? r(e, i.formatLong) : t;
                                }
                                return e;
                            }).join("");
                            e.length > 0 && (s = K.parse(e, c.slice(0, e.length), new Date, {
                                useAdditionalWeekYearTokens: !0,
                                useAdditionalDayOfYearTokens: !0
                            })), Ce(s) || (s = new Date(e));
                        }
                        return Ce(s) && l ? s : null;
                    }((null == r ? void 0 : r.target) instanceof HTMLInputElement ? r.target.value : "", i, s.props.locale, c, s.props.minDate);
                    s.props.showTimeSelectOnly && s.props.selected && p && !He(p, s.props.selected) && (p = V.set(s.props.selected, {
                        hours: b.getHours(p),
                        minutes: C.getMinutes(p),
                        seconds: P.getSeconds(p)
                    })), !p && (null == r ? void 0 : r.target) instanceof HTMLInputElement && (null == r ? void 0 : r.target.value) || s.setSelected(p, r, !0);
                }
            }, s.handleSelect = function(e, t, r) {
                if (s.props.shouldCloseOnSelect && !s.props.showTimeSelect && s.sendFocusBackToInput(), s.props.onChangeRaw && s.props.onChangeRaw(t), s.setSelected(e, t, !1, r), s.props.showDateSelect && s.setState({
                    isRenderAriaLiveMessage: !0
                }), !s.props.shouldCloseOnSelect || s.props.showTimeSelect) s.setPreSelection(e);
                else if (!s.props.inline) {
                    s.props.selectsRange || s.setOpen(!1);
                    var n = s.props, a = n.startDate, o = n.endDate;
                    !a || o || !s.props.swapRange && Dt(e, a) || s.setOpen(!1);
                }
            }, s.setSelected = function(e, t, r, a) {
                var o, i = e;
                if (s.props.showYearPicker) {
                    if (null !== i && Ze(x.getYear(i), s.props)) return;
                } else if (s.props.showMonthYearPicker) {
                    if (null !== i && $e(i, s.props)) return;
                } else if (null !== i && je(i, s.props)) return;
                var l = s.props, c = l.onChange, p = l.selectsRange, d = l.startDate, u = l.endDate, f = l.selectsMultiple, h = l.selectedDates, m = l.minTime, v = l.swapRange;
                if (!We(s.props.selected, i) || s.props.allowSameDay || p || f) if (null !== i && (!s.props.selected || r && (s.props.showTimeSelect || s.props.showTimeSelectOnly || s.props.showTimeInput) || (i = Pe(i, {
                    hour: b.getHours(s.props.selected),
                    minute: C.getMinutes(s.props.selected),
                    second: P.getSeconds(s.props.selected)
                })), r || !s.props.showTimeSelect && !s.props.showTimeSelectOnly || m && (i = Pe(i, {
                    hour: m.getHours(),
                    minute: m.getMinutes(),
                    second: m.getSeconds()
                })), s.props.inline || s.setState({
                    preSelection: i
                }), s.props.focusSelectedMonth || s.setState({
                    monthSelectedIn: a
                })), p) {
                    var g = d && !u, D = d && u;
                    !d && !u ? c ? c([
                        i,
                        null
                    ], t) : n.defaultProps.onChange : g && (null === i ? c ? c([
                        null,
                        null
                    ], t) : n.defaultProps.onChange : Dt(i, d) ? v ? c ? c([
                        i,
                        d
                    ], t) : n.defaultProps.onChange : c ? c([
                        i,
                        null
                    ], t) : n.defaultProps.onChange : c ? c([
                        d,
                        i
                    ], t) : n.defaultProps.onChange), D && (c ? c([
                        i,
                        null
                    ], t) : n.defaultProps.onChange);
                } else if (f) {
                    if (null !== i) if (null == h ? void 0 : h.length) if (h.some(function(e) {
                        return He(e, i);
                    })) {
                        var y = h.filter(function(e) {
                            return !He(e, i);
                        });
                        c ? c(y, t) : n.defaultProps.onChange;
                    } else c ? c(De(De([], h, !0), [
                        i
                    ], !1), t) : n.defaultProps.onChange;
                    else c ? c([
                        i
                    ], t) : n.defaultProps.onChange;
                } else c ? c(i, t) : n.defaultProps.onChange;
                r || ((null !== (o = s.props.onSelect) && void 0 !== o ? o : n.defaultProps.onSelect)(i, t), s.setState({
                    inputValue: null
                }));
            }, s.setPreSelection = function(e) {
                var t = I.isDate(s.props.minDate), r = I.isDate(s.props.maxDate), n = !0;
                if (e) {
                    var a = Ye(e);
                    if (t && r) n = Qe(e, s.props.minDate, s.props.maxDate);
                    else if (t) {
                        var o = Ye(s.props.minDate);
                        n = N.isAfter(e, o) || We(a, o);
                    } else if (r) {
                        var i = Re(s.props.maxDate);
                        n = O.isBefore(e, i) || We(a, i);
                    }
                }
                n && s.setState({
                    preSelection: e
                });
            }, s.toggleCalendar = function() {
                s.setOpen(!s.state.open);
            }, s.handleTimeChange = function(e) {
                var t;
                if (!s.props.selectsRange && !s.props.selectsMultiple) {
                    var r = s.props.selected ? s.props.selected : s.getPreSelection(), a = s.props.selected ? e : Pe(r, {
                        hour: b.getHours(e),
                        minute: C.getMinutes(e)
                    });
                    s.setState({
                        preSelection: a
                    }), (null !== (t = s.props.onChange) && void 0 !== t ? t : n.defaultProps.onChange)(a), s.props.shouldCloseOnSelect && !s.props.showTimeInput && (s.sendFocusBackToInput(), s.setOpen(!1)), s.props.showTimeInput && s.setOpen(!0), (s.props.showTimeSelectOnly || s.props.showTimeSelect) && s.setState({
                        isRenderAriaLiveMessage: !0
                    }), s.setState({
                        inputValue: null
                    });
                }
            }, s.onInputClick = function() {
                var e, t;
                s.props.disabled || s.props.readOnly || s.setOpen(!0), null === (t = (e = s.props).onInputClick) || void 0 === t || t.call(e);
            }, s.onInputKeyDown = function(e) {
                var t, r, n, a, o;
                null === (r = (t = s.props).onKeyDown) || void 0 === r || r.call(t, e);
                var i = e.key;
                if (s.state.open || s.props.inline || s.props.preventOpenOnFocus) {
                    if (s.state.open) {
                        if (i === ye.ArrowDown || i === ye.ArrowUp) {
                            e.preventDefault();
                            var l = s.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : s.props.showWeekPicker && s.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : s.props.showFullMonthYearPicker || s.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', c = (null === (n = s.calendar) || void 0 === n ? void 0 : n.componentNode) instanceof Element && s.calendar.componentNode.querySelector(l);
                            return void (c instanceof HTMLElement && c.focus({
                                preventScroll: !0
                            }));
                        }
                        var p = Me(s.state.preSelection);
                        i === ye.Enter ? (e.preventDefault(), s.inputOk() && s.state.lastPreSelectChange === ar ? (s.handleSelect(p, e), !s.props.shouldCloseOnSelect && s.setPreSelection(p)) : s.setOpen(!1)) : i === ye.Escape ? (e.preventDefault(), s.sendFocusBackToInput(), s.setOpen(!1)) : i === ye.Tab && s.setOpen(!1), s.inputOk() || null === (o = (a = s.props).onInputError) || void 0 === o || o.call(a, {
                            code: 1,
                            msg: tr
                        });
                    }
                } else i !== ye.ArrowDown && i !== ye.ArrowUp && i !== ye.Enter || s.onInputClick();
            }, s.onPortalKeyDown = function(e) {
                e.key === ye.Escape && (e.preventDefault(), s.setState({
                    preventFocus: !0
                }, function() {
                    s.setOpen(!1), setTimeout(function() {
                        s.setFocus(), s.setState({
                            preventFocus: !1
                        });
                    });
                }));
            }, s.onDayKeyDown = function(e) {
                var t, r, n, o, l = s.props, c = l.minDate, u = l.maxDate, f = l.disabledKeyboardNavigation, h = l.showWeekPicker, m = l.shouldCloseOnSelect, v = l.locale, g = l.calendarStartDay, y = l.adjustDateOnChange, k = l.inline;
                if (null === (r = (t = s.props).onKeyDown) || void 0 === r || r.call(t, e), !f) {
                    var w = e.key, S = e.shiftKey, b = Me(s.state.preSelection), M = function(e, t) {
                        var r = t;
                        switch(e){
                            case ye.ArrowRight:
                                r = h ? p.addWeeks(t, 1) : a.addDays(t, 1);
                                break;
                            case ye.ArrowLeft:
                                r = h ? se.subWeeks(t, 1) : ne.subDays(t, 1);
                                break;
                            case ye.ArrowUp:
                                r = se.subWeeks(t, 1);
                                break;
                            case ye.ArrowDown:
                                r = p.addWeeks(t, 1);
                                break;
                            case ye.PageUp:
                                r = S ? ie.subYears(t, 1) : ae.subMonths(t, 1);
                                break;
                            case ye.PageDown:
                                r = S ? d.addYears(t, 1) : i.addMonths(t, 1);
                                break;
                            case ye.Home:
                                r = xe(t, v, g);
                                break;
                            case ye.End:
                                r = function(e) {
                                    return D.endOfWeek(e);
                                }(t);
                        }
                        return r;
                    };
                    if (w === ye.Enter) return e.preventDefault(), s.handleSelect(b, e), void (!m && s.setPreSelection(b));
                    if (w === ye.Escape) return e.preventDefault(), s.setOpen(!1), void (s.inputOk() || null === (o = (n = s.props).onInputError) || void 0 === o || o.call(n, {
                        code: 1,
                        msg: tr
                    }));
                    var C = null;
                    switch(w){
                        case ye.ArrowLeft:
                        case ye.ArrowRight:
                        case ye.ArrowUp:
                        case ye.ArrowDown:
                        case ye.PageUp:
                        case ye.PageDown:
                        case ye.Home:
                        case ye.End:
                            C = function(e, t) {
                                for(var r = e, n = !1, a = 0, o = M(e, t); !n;){
                                    if (a >= 40) {
                                        o = t;
                                        break;
                                    }
                                    c && o < c && (r = ye.ArrowRight, o = je(c, s.props) ? M(r, o) : c), u && o > u && (r = ye.ArrowLeft, o = je(u, s.props) ? M(r, o) : u), je(o, s.props) ? (r !== ye.PageUp && r !== ye.Home || (r = ye.ArrowRight), r !== ye.PageDown && r !== ye.End || (r = ye.ArrowLeft), o = M(r, o)) : n = !0, a++;
                                }
                                return o;
                            }(w, b);
                    }
                    if (C) {
                        if (e.preventDefault(), s.setState({
                            lastPreSelectChange: ar
                        }), y && s.setSelected(C), s.setPreSelection(C), k) {
                            var E = _.getMonth(b), P = _.getMonth(C), Y = x.getYear(b), N = x.getYear(C);
                            E !== P || Y !== N ? s.setState({
                                shouldFocusDayInline: !0
                            }) : s.setState({
                                shouldFocusDayInline: !1
                            });
                        }
                    } else s.props.onInputError && s.props.onInputError({
                        code: 1,
                        msg: tr
                    });
                }
            }, s.onPopperKeyDown = function(e) {
                e.key === ye.Escape && (e.preventDefault(), s.sendFocusBackToInput());
            }, s.onClearClick = function(e) {
                e && e.preventDefault && e.preventDefault(), s.sendFocusBackToInput();
                var t = s.props, r = t.selectsRange, a = t.onChange;
                r ? a ? a([
                    null,
                    null
                ], e) : n.defaultProps.onChange() : a ? a(null, e) : n.defaultProps.onChange(), s.setState({
                    inputValue: null
                });
            }, s.clear = function() {
                s.onClearClick();
            }, s.onScroll = function(e) {
                "boolean" == typeof s.props.closeOnScroll && s.props.closeOnScroll ? e.target !== document && e.target !== document.documentElement && e.target !== document.body || s.setOpen(!1) : "function" == typeof s.props.closeOnScroll && s.props.closeOnScroll(e) && s.setOpen(!1);
            }, s.renderCalendar = function() {
                var e, t;
                return s.props.inline || s.isCalendarOpen() ? ue.default.createElement(er, ge({
                    ref: function(e) {
                        s.calendar = e;
                    }
                }, s.props, s.state, {
                    setOpen: s.setOpen,
                    dateFormat: null !== (e = s.props.dateFormatCalendar) && void 0 !== e ? e : n.defaultProps.dateFormatCalendar,
                    onSelect: s.handleSelect,
                    onClickOutside: s.handleCalendarClickOutside,
                    holidays: ut(s.modifyHolidays()),
                    outsideClickIgnoreClass: Zt,
                    onDropdownFocus: s.handleDropdownFocus,
                    onTimeChange: s.handleTimeChange,
                    className: s.props.calendarClassName,
                    container: s.props.calendarContainer,
                    handleOnKeyDown: s.props.onKeyDown,
                    handleOnDayKeyDown: s.onDayKeyDown,
                    setPreSelection: s.setPreSelection,
                    dropdownMode: null !== (t = s.props.dropdownMode) && void 0 !== t ? t : n.defaultProps.dropdownMode
                }), s.props.children) : null;
            }, s.renderAriaLiveRegion = function() {
                var e, t = s.props, r = t.dateFormat, a = void 0 === r ? n.defaultProps.dateFormat : r, o = t.locale, i = s.props.showTimeInput || s.props.showTimeSelect ? "PPPPp" : "PPPP";
                return e = s.props.selectsRange ? "Selected start date: ".concat(Ee(s.props.startDate, {
                    dateFormat: i,
                    locale: o
                }), ". ").concat(s.props.endDate ? "End date: " + Ee(s.props.endDate, {
                    dateFormat: i,
                    locale: o
                }) : "") : s.props.showTimeSelectOnly ? "Selected time: ".concat(Ee(s.props.selected, {
                    dateFormat: a,
                    locale: o
                })) : s.props.showYearPicker ? "Selected year: ".concat(Ee(s.props.selected, {
                    dateFormat: "yyyy",
                    locale: o
                })) : s.props.showMonthYearPicker ? "Selected month: ".concat(Ee(s.props.selected, {
                    dateFormat: "MMMM yyyy",
                    locale: o
                })) : s.props.showQuarterYearPicker ? "Selected quarter: ".concat(Ee(s.props.selected, {
                    dateFormat: "yyyy, QQQ",
                    locale: o
                })) : "Selected date: ".concat(Ee(s.props.selected, {
                    dateFormat: i,
                    locale: o
                })), ue.default.createElement("span", {
                    role: "alert",
                    "aria-live": "polite",
                    className: "react-datepicker__aria-live"
                }, e);
            }, s.renderDateInput = function() {
                var e, a, o, i = t.clsx(s.props.className, ((e = {})[Zt] = s.state.open, e)), l = s.props.customInput || ue.default.createElement("input", {
                    type: "text"
                }), c = s.props.customInputRef || "ref", p = s.props, d = p.dateFormat, u = void 0 === d ? n.defaultProps.dateFormat : d, f = p.locale, h = "string" == typeof s.props.value ? s.props.value : "string" == typeof s.state.inputValue ? s.state.inputValue : s.props.selectsRange ? function(e, t, r) {
                    if (!e) return "";
                    var n = Ee(e, r), a = t ? Ee(t, r) : "";
                    return "".concat(n, " - ").concat(a);
                }(s.props.startDate, s.props.endDate, {
                    dateFormat: u,
                    locale: f
                }) : s.props.selectsMultiple ? function(e, t) {
                    if (!(null == e ? void 0 : e.length)) return "";
                    var r = e[0] ? Ee(e[0], t) : "";
                    if (1 === e.length) return r;
                    if (2 === e.length && e[1]) {
                        var n = Ee(e[1], t);
                        return "".concat(r, ", ").concat(n);
                    }
                    var a = e.length - 1;
                    return "".concat(r, " (+").concat(a, ")");
                }(null !== (o = s.props.selectedDates) && void 0 !== o ? o : [], {
                    dateFormat: u,
                    locale: f
                }) : Ee(s.props.selected, {
                    dateFormat: u,
                    locale: f
                });
                return r.cloneElement(l, ((a = {})[c] = function(e) {
                    s.input = e;
                }, a.value = h, a.onBlur = s.handleBlur, a.onChange = s.handleChange, a.onClick = s.onInputClick, a.onFocus = s.handleFocus, a.onKeyDown = s.onInputKeyDown, a.id = s.props.id, a.name = s.props.name, a.form = s.props.form, a.autoFocus = s.props.autoFocus, a.placeholder = s.props.placeholderText, a.disabled = s.props.disabled, a.autoComplete = s.props.autoComplete, a.className = t.clsx(l.props.className, i), a.title = s.props.title, a.readOnly = s.props.readOnly, a.required = s.props.required, a.tabIndex = s.props.tabIndex, a["aria-describedby"] = s.props.ariaDescribedBy, a["aria-invalid"] = s.props.ariaInvalid, a["aria-labelledby"] = s.props.ariaLabelledBy, a["aria-required"] = s.props.ariaRequired, a));
            }, s.renderClearButton = function() {
                var e = s.props, r = e.isClearable, n = e.disabled, a = e.selected, o = e.startDate, i = e.endDate, l = e.clearButtonTitle, c = e.clearButtonClassName, p = void 0 === c ? "" : c, d = e.ariaLabelClose, u = void 0 === d ? "Close" : d, f = e.selectedDates;
                return r && (null != a || null != o || null != i || (null == f ? void 0 : f.length)) ? ue.default.createElement("button", {
                    type: "button",
                    className: t.clsx("react-datepicker__close-icon", p, {
                        "react-datepicker__close-icon--disabled": n
                    }),
                    disabled: n,
                    "aria-label": u,
                    onClick: s.onClearClick,
                    title: l,
                    tabIndex: -1
                }) : null;
            }, s.state = s.calcInitialState(), s.preventFocusTimeout = void 0, s;
        }
        return ve(n, e), Object.defineProperty(n, "defaultProps", {
            get: function() {
                return {
                    allowSameDay: !1,
                    dateFormat: "MM/dd/yyyy",
                    dateFormatCalendar: "LLLL yyyy",
                    onChange: function() {},
                    disabled: !1,
                    disabledKeyboardNavigation: !1,
                    dropdownMode: "scroll",
                    onFocus: function() {},
                    onBlur: function() {},
                    onKeyDown: function() {},
                    onInputClick: function() {},
                    onSelect: function() {},
                    onClickOutside: function() {},
                    onMonthChange: function() {},
                    onCalendarOpen: function() {},
                    onCalendarClose: function() {},
                    preventOpenOnFocus: !1,
                    onYearChange: function() {},
                    onInputError: function() {},
                    monthsShown: 1,
                    readOnly: !1,
                    withPortal: !1,
                    selectsDisabledDaysInRange: !1,
                    shouldCloseOnSelect: !0,
                    showTimeSelect: !1,
                    showTimeInput: !1,
                    showPreviousMonths: !1,
                    showMonthYearPicker: !1,
                    showFullMonthYearPicker: !1,
                    showTwoColumnMonthYearPicker: !1,
                    showFourColumnMonthYearPicker: !1,
                    showYearPicker: !1,
                    showQuarterYearPicker: !1,
                    showWeekPicker: !1,
                    strictParsing: !1,
                    swapRange: !1,
                    timeIntervals: 30,
                    timeCaption: "Time",
                    previousMonthAriaLabel: "Previous Month",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthAriaLabel: "Next Month",
                    nextMonthButtonLabel: "Next Month",
                    previousYearAriaLabel: "Previous Year",
                    previousYearButtonLabel: "Previous Year",
                    nextYearAriaLabel: "Next Year",
                    nextYearButtonLabel: "Next Year",
                    timeInputLabel: "Time",
                    enableTabLoop: !0,
                    yearItemNumber: Se,
                    focusSelectedMonth: !1,
                    showPopperArrow: !0,
                    excludeScrollbar: !0,
                    customTimeInput: null,
                    calendarStartDay: void 0,
                    toggleCalendarOnIconClick: !1,
                    usePointerEvent: !1
                };
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.componentDidMount = function() {
            window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
        }, n.prototype.componentDidUpdate = function(e, t) {
            var r, n, a, o, s, i;
            e.inline && (s = e.selected, i = this.props.selected, s && i ? _.getMonth(s) !== _.getMonth(i) || x.getYear(s) !== x.getYear(i) : s !== i) && this.setPreSelection(this.props.selected), void 0 !== this.state.monthSelectedIn && e.monthsShown !== this.props.monthsShown && this.setState({
                monthSelectedIn: 0
            }), e.highlightDates !== this.props.highlightDates && this.setState({
                highlightDates: dt(this.props.highlightDates)
            }), t.focused || We(e.selected, this.props.selected) || this.setState({
                inputValue: null
            }), t.open !== this.state.open && (!1 === t.open && !0 === this.state.open && (null === (n = (r = this.props).onCalendarOpen) || void 0 === n || n.call(r)), !0 === t.open && !1 === this.state.open && (null === (o = (a = this.props).onCalendarClose) || void 0 === o || o.call(a)));
        }, n.prototype.componentWillUnmount = function() {
            this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
        }, n.prototype.renderInputContainer = function() {
            var e = this.props, r = e.showIcon, n = e.icon, a = e.calendarIconClassname, o = e.calendarIconClassName, s = e.toggleCalendarOnIconClick, i = this.state.open;
            return a && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), ue.default.createElement("div", {
                className: "react-datepicker__input-container".concat(r ? " react-datepicker__view-calendar-icon" : "")
            }, r && ue.default.createElement(jt, ge({
                icon: n,
                className: t.clsx(o, !o && a, i && "react-datepicker-ignore-onclickoutside")
            }, s ? {
                onClick: this.toggleCalendar
            } : null)), this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(), this.renderDateInput(), this.renderClearButton());
        }, n.prototype.render = function() {
            var e = this.renderCalendar();
            if (this.props.inline) return e;
            if (this.props.withPortal) {
                var t = this.state.open ? ue.default.createElement(zt, {
                    enableTabLoop: this.props.enableTabLoop
                }, ue.default.createElement("div", {
                    className: "react-datepicker__portal",
                    tabIndex: -1,
                    onKeyDown: this.onPortalKeyDown
                }, e)) : null;
                return this.state.open && this.props.portalId && (t = ue.default.createElement(Ut, ge({
                    portalId: this.props.portalId
                }, this.props), t)), ue.default.createElement("div", null, this.renderInputContainer(), t);
            }
            return ue.default.createElement(Jt, ge({}, this.props, {
                className: this.props.popperClassName,
                hidePopper: !this.isCalendarOpen(),
                targetComponent: this.renderInputContainer(),
                popperComponent: e,
                popperOnKeyDown: this.onPopperKeyDown,
                showArrow: this.props.showPopperArrow
            }));
        }, n;
    }(r.Component), nr = "input", ar = "navigate";
    e.CalendarContainer = ke, e.default = rr, e.getDefaultLocale = qe, e.registerLocale = function(e, t) {
        var r = we();
        r.__localeData__ || (r.__localeData__ = {}), r.__localeData__[e] = t;
    }, e.setDefaultLocale = function(e) {
        we().__localeId__ = e;
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    });
});

}.call(this) }),
}]);

//# sourceMappingURL=03924_react-datepicker_dist_react-datepicker_min_bf03c6.js.map