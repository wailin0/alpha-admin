"use strict";(()=>{var e={};e.id=3933,e.ids=[3933],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},56397:(e,a,t)=>{t.r(a),t.d(a,{originalPathname:()=>l,patchFetch:()=>M,requestAsyncStorage:()=>u,routeModule:()=>m,serverHooks:()=>g,staticGenerationAsyncStorage:()=>c});var r={};t.r(r),t.d(r,{GET:()=>p});var s=t(86751),i=t(71854),n=t(45579),o=t(32507),d=t(47345);async function p(){return o.NextResponse.json(d.db)}let m=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/apps/permissions/route",pathname:"/api/apps/permissions",filename:"route",bundlePath:"app/api/apps/permissions/route"},resolvedPagePath:"D:\\ALPHA PROJECT\\dashboard\\src\\app\\api\\apps\\permissions\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:u,staticGenerationAsyncStorage:c,serverHooks:g}=m,l="/api/apps/permissions/route";function M(){return(0,n.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:c})}},47345:(e,a,t)=>{t.d(a,{db:()=>r});let r=[{id:1,name:"Management",assignedTo:"administrator",createdDate:"14 Apr 2021, 8:43 PM"},{id:2,assignedTo:"administrator",name:"Manage Billing & Roles",createdDate:"16 Sep 2021, 5:20 PM"},{id:3,name:"Add & Remove Users",createdDate:"14 Oct 2021, 10:20 AM",assignedTo:["administrator","manager"]},{id:4,name:"Project Planning",createdDate:"14 Oct 2021, 10:20 AM",assignedTo:["administrator","users","support"]},{id:5,name:"Manage Email Sequences",createdDate:"23 Aug 2021, 2:00 PM",assignedTo:["administrator","users","support"]},{id:6,name:"Client Communication",createdDate:"15 Apr 2021, 11:30 AM",assignedTo:["administrator","manager"]},{id:7,name:"Only View",createdDate:"04 Dec 2021, 8:15 PM",assignedTo:["administrator","restricted-user"]},{id:8,name:"Financial Management",createdDate:"25 Feb 2021, 10:30 AM",assignedTo:["administrator","manager"]},{id:9,name:"Manage Others’ Tasks",createdDate:"04 Nov 2021, 11:45 AM",assignedTo:["administrator","support"]}]}};var a=require("../../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[9357,395],()=>t(56397));module.exports=r})();