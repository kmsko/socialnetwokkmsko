(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{16:function(e,t,a){e.exports={navbar:"NavBar_navbar__2-ynL",link:"NavBar_link__28Al1",active:"NavBar_active__2uqpO"}},17:function(e,t,a){e.exports={wrapper:"ProfileCard_wrapper__3bbR6",avatar_wrapper:"ProfileCard_avatar_wrapper__3TXrd",wrapper_description:"ProfileCard_wrapper_description__13gQp",avatar:"ProfileCard_avatar__1SWxT",wrapper_form__status_input:"ProfileCard_wrapper_form__status_input__2qaNs",wrapper_form__status_label:"ProfileCard_wrapper_form__status_label__3JkKl",wrapper_form__image:"ProfileCard_wrapper_form__image__GR8n0"}},20:function(e,t,a){e.exports={header:"Header_header__1qxa3",logout:"Header_logout__1bb2P",logout_image:"Header_logout_image__21OAb",loginBlock:"Header_loginBlock__1WPw9",statusLogin:"Header_statusLogin__qF2Y_",online:"Header_online__14_7w",offline:"Header_offline__uO88Z"}},26:function(e,t,a){e.exports={wrapper:"Posts_wrapper__om8P3",post:"Posts_post__3gWQy",textPost:"Posts_textPost__3uJmM",like_wrapper:"Posts_like_wrapper__3Ag7P",likecount:"Posts_likecount__R5whM",like:"Posts_like__3V_EM",photoPost_img:"Posts_photoPost_img__wKXhq"}},27:function(e,t,a){e.exports={wrapperFormLogin:"login_wrapperFormLogin__2wBhl",titlePageLogin:"login_titlePageLogin__2qV4g",textEmail:"login_textEmail__3mOAI",textPass:"login_textPass__1LCr_",emailInput:"login_emailInput__3oTnI",passwordInput:"login_passwordInput__2j9U9",buttonLogin:"login_buttonLogin__gHn7R"}},29:function(e,t,a){e.exports={wrap_profile:"Profile_wrap_profile__3oayV",status:"Profile_status__1IVLL",status_de:"Profile_status_de__23KDq",editOn:"Profile_editOn__1I4v1",editOff:"Profile_editOff__3zJhd"}},34:function(e,t,a){e.exports={wrapper:"Message_wrapper__2Bqi4",message:"Message_message__33xvg",in_text:"Message_in_text__UtrQn",push_text:"Message_push_text__3H849"}},41:function(e,t,a){e.exports={wrapper:"AddPost_wrapper__3Cv_D",in_text:"AddPost_in_text__wdIzn",push_text:"AddPost_push_text__1i2T3"}},42:function(e,t,a){e.exports={wrapper:"DialogItem_wrapper__2TCX8",linkUser:"DialogItem_linkUser__3aryz",activeUser:"DialogItem_activeUser__1RNkk"}},59:function(e,t,a){e.exports={preloader:"preloader_preloader__3SBxE"}},60:function(e,t,a){e.exports={wrapper:"Dialogs_wrapper__24-Us"}},68:function(e,t,a){},69:function(e,t,a){},7:function(e,t,a){e.exports={wrapper:"Users_wrapper__tQZcM",avatar:"Users_avatar__3zRan",avatar_image:"Users_avatar_image__wHFG0",avatar__wrapperr_fullname:"Users_avatar__wrapperr_fullname__298wb",avatar__fullname:"Users_avatar__fullname__vCxGv",avatar_button:"Users_avatar_button__Ktvqy",avatar_button_add:"Users_avatar_button_add__2IhyJ",avatar_button_del:"Users_avatar_button_del__28ya2",wrapperPaginator:"Users_wrapperPaginator__2V_DL",pages:"Users_pages__1iL2L",pagesActive:"Users_pagesActive__22TmC",buttonPage:"Users_buttonPage__2SpE7",nextPageNone:"Users_nextPageNone__3aWa5",prevPageNone:"Users_prevPageNone__3PwJJ"}},97:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(36),i=a.n(r),o=(a(68),a(21)),c=a(22),u=a(24),l=a(23),m=(a(69),a(3)),p=a(2),d=a(6),j=a(8),g="REFRESH-BAR",h={activeURL:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(p.a)(Object(p.a)({},e),{},{activeURL:t.activeURL});default:return e}},b=a(31),x=a(58).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c9cc03a8-a5a0-429f-9b7b-6081107a0adf"}}),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return x.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},M=function(e){return x.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))},w=function(e){return x.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},v=function(){return x.get("auth/me").then((function(e){return e}))},P=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return x.post("/auth/login",{email:e,password:t,rememberMe:a})},z=function(){return x.delete("/auth/login")},Y=function(e){return x.get("profile/"+e).then((function(e){return e.data}))},_=function(e){return x.get("profile/status/".concat(e))},N=function(e){return x.put("profile/status/",{status:e})},A=function(e){var t=new FormData;return t.append("image",e),x.put("profile/photo",t,{headers:{"content-type":"multipart/form-data"}})},T="ADD-POST",U="REFRESH-POST",Z="SET_USER_PROFILE",y="SET_USER_STATUS",E="SET_PHOTO_PROFILE",I="REFRESH-PROFILE",F="IS_FETCHING",C={myPosts:[],textPost:"",profile:null,status:"",myId:null,isFetching:!0},S=function(e){return{type:F,bool:e}},k=function(e){return{type:y,status:e}},G=function(e){return function(t){t(S(!0)),Y(e).then((function(e){t({type:Z,profile:e}),t(S(!1))}))}},D=function(e){return function(t){_(e).then((function(e){t(k(e.data))}))}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:var a={id:1,textPost:e.textPost,likeCount:0};return Object(p.a)(Object(p.a)({},e),{},{myPosts:[a].concat(Object(b.a)(e.myPosts)),textPost:""});case U:return Object(p.a)(Object(p.a)({},e),{},{textPost:t.post_text});case Z:return Object(p.a)(Object(p.a)({},e),{},{profile:t.profile});case y:return Object(p.a)(Object(p.a)({},e),{},{status:t.status});case E:return Object(p.a)(Object(p.a)({},e),{},{profile:Object(p.a)(Object(p.a)({},e.profile),{},{photos:t.photoAva})});case I:return Object(p.a)(Object(p.a)({},e),{},{myId:t.myId});case F:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.bool});default:return e}},L=a.p+"static/media/preloader.6af3b8bc.gif",B=a(59),H=a.n(B),R=a(1),K=function(){return Object(R.jsx)("div",{children:Object(R.jsx)("img",{className:H.a.preloader,src:L})})},J=a(29),V=a.n(J),Q=a(28),X=a(26),q=a.n(X),$=n.a.memo((function(e){var t=Object(s.useState)(0),a=Object(Q.a)(t,2),n=a[0],r=a[1],i=e.myPosts.map((function(t){return Object(R.jsxs)("div",{className:q.a.post,children:[Object(R.jsx)("img",{className:q.a.photoPost_img,src:e.profile.photos.large||"https://im0-tub-ru.yandex.net/i?id=6609e59aee1e75f7220e3dca7d0d660d-l&n=13",alt:"user_avatar"}),Object(R.jsx)("div",{className:q.a.textPost,children:t.textPost}),Object(R.jsxs)("div",{className:q.a.like_wrapper,children:[Object(R.jsxs)("span",{className:q.a.likecount,children:["  ",n,"    "]}),Object(R.jsx)("span",{onClick:function(){r(n+1)},className:q.a.like,children:"\u2764 "})]})]})}));return Object(R.jsx)("div",{className:q.a.wrapper,children:i})})),ee=a(41),te=a.n(ee),ae=n.a.memo((function(e){return Object(R.jsx)(R.Fragment,{children:parseInt(e.userId)===e.myId&&Object(R.jsxs)("div",{className:te.a.wrapper,children:[Object(R.jsx)("textarea",{onChange:function(t){var a=t.target.value;" "!==a&&"\n"!==a&&e.refreshTextPost(a)},className:te.a.in_text,value:e.textPost,placeholder:"demo version \u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}),Object(R.jsx)("button",{disabled:!e.textPost,onClick:function(){""!==e.messageWrite&&e.addPost()},className:te.a.push_text,children:"Add Post"})]})})})),se=a(17),ne=a.n(se),re=a.p+"static/media/download.275b7e7b.png",ie=function(e){var t=Object(s.useState)(!1),a=Object(Q.a)(t,2),n=a[0],r=a[1],i=Object(s.useState)(e.status),o=Object(Q.a)(i,2),c=o[0],u=o[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return Object(R.jsxs)(R.Fragment,{children:[!n&&Object(R.jsxs)("span",{className:"".concat(V.a.status_de," "),onClick:function(){parseInt(e.userId)===e.myId&&r(!0)},children:[Object(R.jsx)("span",{children:"\u0421\u0442\u0430\u0442\u0443\u0441 : "}),e.status||" no status",Object(R.jsx)("img",{className:parseInt(e.userId)===e.myId?V.a.editOn:V.a.editOff,src:"data:image/png;base64,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",alt:"edit"})]}),n&&Object(R.jsx)("div",{children:Object(R.jsx)("textarea",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.setUserStatusThunk(c)},className:V.a.status,value:c,type:"text"})})]})},oe=function(e){return Object(R.jsxs)("div",{className:ne.a.wrapper,children:[Object(R.jsxs)("div",{className:ne.a.avatar_wrapper,children:[Object(R.jsx)("img",{className:ne.a.avatar,src:e.profile.photos.large||"https://im0-tub-ru.yandex.net/i?id=6609e59aee1e75f7220e3dca7d0d660d-l&n=13",alt:"user_avatar"}),parseInt(e.userId)===e.myId&&Object(R.jsxs)("div",{className:ne.a.wrapper_form,children:[Object(R.jsx)("input",{className:ne.a.wrapper_form__status_input,id:"profileCard-input-file",type:"file",onChange:function(t){t.target.files.length&&e.savePhotoThunk(t.target.files[0])}}),Object(R.jsxs)("label",{className:ne.a.wrapper_form__status_label,htmlFor:"profileCard-input-file",children:["\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",Object(R.jsx)("img",{className:ne.a.wrapper_form__image,src:re,alt:"download",width:"25"})]})]})]}),Object(R.jsxs)("div",{className:ne.a.wrapper_description,children:[Object(R.jsxs)("div",{className:ne.a.name,children:["\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f : ",e.profile.fullName]}),Object(R.jsx)(ie,{setUserStatusThunk:e.setUserStatusThunk,status:e.status,myId:e.myId,userId:e.userId}),Object(R.jsxs)("div",{children:["user ID: ",e.profile.userId]})]})]})},ce=function(e){return"null"===e.match.params.userId?Object(R.jsx)(m.a,{to:"/User"}):e.profile?Object(R.jsxs)("div",{className:V.a.wrap_profile,children:[Object(R.jsx)(oe,{savePhotoThunk:e.savePhotoThunk,profile:e.profile,myId:e.myId,userId:e.match.params.userId,setUserStatusThunk:e.setUserStatusThunk,status:e.status}),Object(R.jsx)(ae,{myId:e.myId,userId:e.match.params.userId,addPost:e.addPost,refreshTextPost:e.refreshTextPost,textPost:e.textPost}),Object(R.jsx)($,{profile:e.profile,myPosts:e.myPosts,textPost:e.textPost})]}):Object(R.jsx)(K,{})},ue=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.refreshBarAC(this.props.match.url),this.props.getProfileThunkAPI(e),this.props.getUserStatusThunk(e)}},{key:"render",value:function(){return Object(R.jsx)(R.Fragment,{children:"null"===this.props.match.params.userId?Object(R.jsx)(m.a,{to:"/User"}):this.props.isFetching?Object(R.jsx)("div",{children:"Loading. . ."}):this.props.profile?Object(R.jsx)(ce,Object(p.a)(Object(p.a)({},this.props),{},{savePhotoThunk:this.props.savePhotoThunk,setUserStatusThunk:this.props.setUserStatusThunk,profile:this.props.profile,status:this.props.status})):Object(R.jsx)(K,{})})}}]),a}(n.a.Component),le=Object(j.d)(m.f,Object(d.b)((function(e){return{textPost:e.ProfilePage.textPost,myPosts:e.ProfilePage.myPosts,profile:e.ProfilePage.profile,status:e.ProfilePage.status,myId:e.auth.id,activeURL:e.navBar.activeURL,isFetching:e.ProfilePage.isFetching}}),{addPost:function(){return{type:T}},refreshTextPost:function(e){return{type:U,post_text:e}},getProfileThunkAPI:G,refreshBarAC:function(e){return{type:"REFRESH-BAR",activeURL:e}},getUserStatusThunk:D,setUserStatusThunk:function(e){return function(t){N(e).then((function(a){t(k(e))}))}},savePhotoThunk:function(e){return function(t){A(e).then((function(e){var a;0===e.data.resultCode&&t((a=e.data.data.photos,{type:E,photoAva:a}))}))}}}))(ue),me=a(37),pe=function(e){return{logOn:e.auth.logOn}},de="ADD-MESSAGE",je="REFRESH-MESSAGE",ge={listDialogs:[{name:"Maxim",lastname:"Kotovshchikov",id:1}],message:[],messageWrite:""},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(p.a)(Object(p.a)({},e),{},{message:[].concat(Object(b.a)(e.message),[{id:1,Name:"Max",lastName:"Kot",text:e.messageWrite}]),messageWrite:""});case je:return Object(p.a)(Object(p.a)({},e),{},{messageWrite:t.message_text});default:return e}},fe=a(9),be=a(42),xe=a.n(be),Oe=function(e){var t=e.listDialogs.map((function(e){return Object(R.jsxs)(fe.b,{className:xe.a.linkUser,activeClassName:xe.a.activeUser,to:"/dialogs/".concat(e.id),children:[" ",e.name,"  ",e.lastname]})}));return Object(R.jsx)("div",{className:xe.a.wrapper,children:t})},Me=a(60),we=a.n(Me),ve=a(34),Pe=a.n(ve),ze=function(e){var t=e.message.map((function(e){return Object(R.jsxs)("div",{className:Pe.a.message,children:[" ",e.text," "]},e.id)}));return Object(R.jsxs)("div",{className:Pe.a.wrapper,children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("textarea",{onChange:function(t){var a=t.target.value;" "!==a&&"\n"!==a&&e.readTextChange(a)},className:Pe.a.in_text,value:e.messageWrite}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{onClick:function(){""!==e.messageWrite&&e.addMessage()},className:Pe.a.push_text,children:"SEND"})})]}),Object(R.jsx)("div",{children:t})]})},Ye=function(e){return Object(R.jsxs)("div",{className:we.a.wrapper,children:[Object(R.jsx)(Oe,{listDialogs:e.listDialogs}),Object(R.jsx)(ze,{messageWrite:e.messageWrite,addMessage:e.addMessage,readTextChange:e.readTextChange,message:e.message})]})},_e=Object(j.d)((function(e){return Object(d.b)(pe)((function(t){return t.logOn?Object(R.jsx)(e,Object(p.a)({},t)):Object(R.jsx)(m.a,{to:"/login"})}))}),Object(d.b)((function(e){return Object(me.a)({listDialogs:e.dialogsPage.listDialogs,messageWrite:e.dialogsPage.messageWrite,message:e.dialogsPage.message},"messageWrite",e.dialogsPage.messageWrite)}),(function(e){return{addMessage:function(){return e({type:"ADD-MESSAGE"})},readTextChange:function(t){return e(function(e){return{type:"REFRESH-MESSAGE",message_text:e}}(t))}}})))(Ye),Ne="FOLLOW",Ae="UNFOLLOW",Te="SET_USERS",Ue="SET_TOTAL_COUNT",Ze="ACTIVE_PAGE",ye="IS_FETCHING",Ee="IS_FOLLOWING",Ie={users:[],pageSize:5,totalUsersCount:0,curentPage:1,isFetching:!0,followingProgres:[]},Fe=function(e){return{type:Te,users:e}},Ce=function(e){return{type:Ze,numberPage:e}},Se=function(e){return{type:ye,bool:e}},ke=function(e,t){return{type:Ee,isFetching:e,userId:t}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(p.a)(Object(p.a)({},e),{},{followed:!0}):e}))});case Ae:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(p.a)(Object(p.a)({},e),{},{followed:!1}):e}))});case Te:return Object(p.a)(Object(p.a)({},e),{},{users:t.users});case Ze:return Object(p.a)(Object(p.a)({},e),{},{curentPage:t.numberPage});case Ue:return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.count});case ye:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.bool});case Ee:return Object(p.a)(Object(p.a)({},e),{},{followingProgres:t.isFetching?[].concat(Object(b.a)(e.followingProgres),[t.userId]):e.followingProgres.filter((function(e){return e!=t.userId}))});default:return e}},De=a(7),We=a.n(De),Le=function(e){var t=Object(s.useState)([1,2,3,4,5]),a=Object(Q.a)(t,2),n=a[0],r=a[1];return Object(R.jsxs)("div",{className:We.a.wrapper,children:[Object(R.jsxs)("div",{className:We.a.wrapperPaginator,children:[Object(R.jsx)("button",{className:1===n[0]?We.a.prevPageNone:We.a.buttonPage,onClick:function(){var e=n.map((function(e){return e-1}));r(e)},children:"left"}),n.map((function(t){return Object(R.jsxs)("span",{className:" ".concat(We.a.pages," ").concat(e.curentPage===t&&We.a.pagesActive),onClick:function(a){e.onClickUsersPage(t,e.pageSize)},children:[" ",t,"  "]})})),Object(R.jsx)("button",{className:n[4]===e.totalUsersCount?We.a.nextPageNone:We.a.buttonPage,onClick:function(){var e=n.map((function(e){return e+1}));r(e)},children:"right"})]}),e.users.map((function(t){return Object(R.jsxs)("div",{className:We.a.avatar,children:[Object(R.jsx)(fe.b,{to:"/profile/"+t.id,children:Object(R.jsx)("img",{className:We.a.avatar_image,src:null===t.photos.small?"https://im0-tub-ru.yandex.net/i?id=6609e59aee1e75f7220e3dca7d0d660d-l&n=13":t.photos.small,alt:"user_avatar"})}),Object(R.jsx)("div",{className:We.a.avatar__wrapperr_fullname,children:Object(R.jsxs)("span",{className:We.a.avatar__fullname,children:[" \u0418\u043c\u044f :  ",t.name," "]})}),e.logOn&&!0===t.followed?Object(R.jsx)("button",{className:"".concat(We.a.avatar_button_add," ").concat(We.a.avatar_button),disabled:e.followingProgres.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:" \u0443\u0434\u0430\u043b\u0438\u0442\u044c "}):Object(R.jsx)("button",{className:"".concat(We.a.avatar_button_del," ").concat(We.a.avatar_button),disabled:e.followingProgres.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:" \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c "})]},t.id)}))]})},Be=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.curentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(R.jsxs)(R.Fragment,{children:[!0===this.props.isFetching?Object(R.jsx)(K,{}):null,Object(R.jsx)(Le,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,curentPage:this.props.curentPage,onClickUsersPage:this.props.onClickUsersPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingProgresAC:this.props.followingProgresAC,followingProgres:this.props.followingProgres,logOn:this.props.logOn})]})}}]),a}(n.a.Component),He=Object(j.d)(Object(d.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,curentPage:e.usersPage.curentPage,isFetching:e.usersPage.isFetching,followingProgres:e.usersPage.followingProgres,logOn:e.auth.logOn}}),{follow:function(e){return function(t){t(ke(!0,e)),M(e).then((function(a){0===a&&(t(function(e){return{type:Ne,userId:e}}(e)),t(ke(!1,e)))}))}},unfollow:function(e){return function(t){t(ke(!0,e)),w(e).then((function(a){0===a&&(t(function(e){return{type:Ae,userId:e}}(e)),t(ke(!1,e)))}))}},activePage:Ce,fetching:Se,followingProgresAC:ke,getUsersThunkCreator:function(e,t){return function(a){a(Se(!0)),O(e,t).then((function(e){var t;a(Fe(e.items)),a((t=e.totalCount,{type:Ue,count:t})),a(Se(!1))}))}},onClickUsersPage:function(e,t){return function(a){a(Ce(e)),a(Se(!0)),O(e,t).then((function(e){a(Fe(e.items)),a(Se(!1))}))}}}))(Be),Re=a(20),Ke=a.n(Re),Je=a.p+"static/media/exit.ff5453a1.jpg",Ve=function(e){var t=document.querySelector("body");return e.dayOrNight?(t.classList.remove("night"),t.classList.add("day")):(t.classList.remove("day"),t.classList.add("night")),Object(R.jsxs)("div",{className:Ke.a.header,children:[Object(R.jsx)("div",{className:Ke.a.loginBlock,children:Object(R.jsxs)(fe.b,{className:Ke.a.statusLogin,to:"/login",children:[" ",e.logOn?Object(R.jsx)("span",{className:Ke.a.online,children:"online"}):Object(R.jsx)("span",{className:Ke.a.offline,children:"\u0412\u043e\u0439\u0442\u0438"})]})}),Object(R.jsx)("div",{className:Ke.a.online,children:"Social Network"}),e.logOn&&Object(R.jsx)("button",{className:Ke.a.logout,onClick:e.logout,children:Object(R.jsx)("img",{className:Ke.a.logout_image,src:Je,alt:"exit"})})]})},Qe="SET_DAY_OR_NIGHT",Xe={dayOrNight:!1},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qe:return{dayOrNight:t.bool};default:return e}},$e="SET_USER_AUTH",et={id:null,email:null,login:null,logOn:!1},tt=function(e,t,a,s){return{type:$e,data:{email:e,id:t,login:a,logOn:s}}},at=function(){return function(e){return v().then((function(t){var a=t.data.data,s=a.email,n=a.id,r=a.login;0===t.data.resultCode&&e(tt(s,n,r,!0))}))}},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $e:return Object(p.a)(Object(p.a)({},e),t.data);default:return e}},nt=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(R.jsx)(Ve,{logout:this.props.logout,logOn:this.props.logOn,dayOrNight:this.props.dayOrNight,dayOrNighAC:this.props.dayOrNighAC})}}]),a}(n.a.Component),rt=Object(d.b)((function(e){return{logOn:e.auth.logOn,dayOrNight:e.themPage.dayOrNight}}),{dayOrNighAC:function(e){return{type:Qe,bool:e}},logout:function(){return function(e){z().then((function(t){0===t.data.resultCode&&e(tt(null,null,null,!1))}))}}})(nt),it=a(32),ot=a(27),ct=a.n(ot),ut=Object(d.b)((function(e){return{id:e.auth.id}}),{login:function(e,t,a){return function(s){P(e,t,a).then((function(e){0===e.data.resultCode&&s(at())}))}}})((function(e){return e.id?Object(R.jsx)(m.a,{to:"/profile/".concat(e.id)}):Object(R.jsxs)("div",{children:[Object(R.jsx)("h2",{className:ct.a.titlePageLogin,children:"\u0412\u0445\u043e\u0434"}),Object(R.jsx)(it.c,{initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t,a){var s=a.setSubmitting;e.login(t.email,t.password,t.rememberMe),s(!1)},children:Object(R.jsxs)(it.b,{className:ct.a.wrapperFormLogin,children:[Object(R.jsx)("div",{className:ct.a.textEmail,children:"Email"}),Object(R.jsx)(it.a,{type:"email",name:"email",placeholder:"email@",className:ct.a.emailInput}),Object(R.jsx)("div",{className:ct.a.textPass,children:"Password"}),Object(R.jsx)(it.a,{type:"password",name:"password",placeholder:"password",autoComplete:"current-password",className:ct.a.passwordInput}),Object(R.jsx)("div",{children:"\u0417\u0430\u043f\u043e\u0438\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"}),Object(R.jsx)(it.a,{type:"checkbox",name:"rememberMe"}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{className:ct.a.buttonLogin,type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})})]})})]})})),lt=a(16),mt=a.n(lt),pt=Object(j.d)(m.f,Object(d.b)((function(e){return{id:e.auth.id,activeURL:e.navBar.activeURL}}),{refreshProfileAC:function(e){return{type:I,myId:e}},getProfileThunkAPI:G,getUserStatusThunk:D}))((function(e){return Object(R.jsxs)("div",{className:mt.a.navbar,children:[Object(R.jsx)(fe.b,{to:"/profile/"+e.id,activeClassName:mt.a.active,className:"".concat(mt.a.link," ").concat(e.activeURL===e.location.pathname&&mt.a.active),onClick:function(){e.refreshProfileAC(e.id),e.getProfileThunkAPI(e.id),e.getUserStatusThunk(e.id)},children:"Profile"}),Object(R.jsx)(fe.b,{to:"/dialogs",activeClassName:mt.a.active,className:mt.a.link,children:"Message"}),Object(R.jsx)(fe.b,{to:"/News",activeClassName:mt.a.active,className:mt.a.link,children:"News"}),Object(R.jsx)(fe.b,{to:"/User",activeClassName:mt.a.active,className:mt.a.link,children:"User"})]})})),dt="INITIALIZ",jt={itialazed:!1},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case dt:return Object(p.a)(Object(p.a)({},e),{},{itialazed:!0});default:return e}},ht=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.initialApp()}},{key:"render",value:function(){return this.props.itialazed?Object(R.jsxs)("div",{className:"app_wrapper",children:[Object(R.jsx)(rt,{}),Object(R.jsxs)("div",{className:"content",children:[Object(R.jsx)(pt,{}),Object(R.jsxs)("div",{className:"dynamic_content",children:[Object(R.jsx)(m.b,{path:"/profile/:userId",render:function(){return Object(R.jsx)(le,{})}}),Object(R.jsx)(m.b,{path:"/dialogs",render:function(){return Object(R.jsx)(_e,{})}}),Object(R.jsx)(m.b,{path:"/user",render:function(){return Object(R.jsx)(He,{})}}),Object(R.jsx)(m.b,{path:"/login",render:function(){return Object(R.jsx)(ut,{})}})]})]})]}):Object(R.jsx)(K,{})}}]),a}(n.a.Component),ft=Object(j.d)(m.f,Object(d.b)((function(e){return{itialazed:e.app.itialazed}}),{initialApp:function(){return function(e){e(at()).then((function(){e({type:dt})}))}}}))(ht),bt=a(63),xt=Object(j.c)({dialogsPage:he,ProfilePage:W,usersPage:Ge,auth:st,themPage:qe,navBar:f,app:gt}),Ot=Object(j.e)(xt,Object(j.a)(bt.a));window.store=Ot;var Mt=Ot;i.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(fe.a,{children:Object(R.jsx)(d.a,{store:Mt,children:Object(R.jsx)(ft,{})})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.cb0f18ce.chunk.js.map