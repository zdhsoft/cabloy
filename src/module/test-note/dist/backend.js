(()=>{var e={129:e=>{e.exports=e=>({})},521:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function o(e,t,o,r,n,a,s){try{var i=e[a](s),c=i.value}catch(e){return void o(e)}i.done?t(c):Promise.resolve(c).then(r,n)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){o(s,n,a,i,c,"next",e)}function c(e){o(s,n,a,i,c,"throw",e)}i(void 0)}))}}e.exports=e=>{class o extends e.meta.AtomBase{create(e){var t=()=>super.create,o=this;return r((function*(){let r=e.atomClass,n=e.item,a=e.user;const s=yield t().call(o,{atomClass:r,item:n,user:a}),i=yield o.ctx.model.note.insert({atomId:s.atomId});return{atomId:s.atomId,itemId:i.insertId}}))()}read(e){var t=()=>super.read,o=this;return r((function*(){let r=e.atomClass,n=e.options,a=e.key,s=e.user;const i=yield t().call(o,{atomClass:r,options:n,key:a,user:s});return i?(o._getMeta(i),i):null}))()}select(e){var o=()=>super.select,n=this;return r((function*(){let r=e.atomClass,a=e.options,s=e.items,i=e.user;yield o().call(n,{atomClass:r,options:a,items:s,user:i});var c,l=function(e,o){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,o){if(e){if("string"==typeof e)return t(e,o);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,o):void 0}}(e))||o&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,s=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw s}}}}(s);try{for(l.s();!(c=l.n()).done;){const e=c.value;n._getMeta(e)}}catch(e){l.e(e)}finally{l.f()}}))()}write(e){var t=()=>super.write,o=this;return r((function*(){let r=e.atomClass,n=e.target,a=e.key,s=e.item,i=e.options,c=e.user;yield t().call(o,{atomClass:r,target:n,key:a,item:s,options:i,user:c});const l=yield o.ctx.model.note.prepareData(s);l.id=a.itemId,yield o.ctx.model.note.update(l)}))()}delete(e){var t=()=>super.delete,o=this;return r((function*(){let r=e.atomClass,n=e.key,a=e.user;yield o.ctx.model.note.delete({id:n.itemId}),yield t().call(o,{atomClass:r,key:n,user:a})}))()}_getMeta(e){const t={summary:e.summary,flags:[]};e._meta=t}}return o}},223:e=>{function t(e,t,o,r,n,a,s){try{var i=e[a](s),c=i.value}catch(e){return void o(e)}i.done?t(c):Promise.resolve(c).then(r,n)}function o(e){return function(){var o=this,r=arguments;return new Promise((function(n,a){var s=e.apply(o,r);function i(e){t(s,n,a,i,c,"next",e)}function c(e){t(s,n,a,i,c,"throw",e)}i(void 0)}))}}e.exports=e=>{class t extends e.meta.BeanBase{update(e){var t=this;return o((function*(){if(1===e.version){const e="\n          CREATE TABLE testNote (\n            id int(11) NOT NULL AUTO_INCREMENT,\n            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n            deleted int(11) DEFAULT '0',\n            iid int(11) DEFAULT '0',\n            atomId int(11) DEFAULT '0',\n            summary TEXT DEFAULT NULL,\n            content LONGTEXT DEFAULT NULL,\n            html LONGTEXT DEFAULT NULL,\n            PRIMARY KEY (id)\n          )\n        ";yield t.ctx.model.query(e)}}))()}init(e){var t=this;return o((function*(){if(1===e.version){const e=[{roleName:"authenticated",action:"create"},{roleName:"authenticated",action:"read",scopeNames:0},{roleName:"authenticated",action:"write",scopeNames:0},{roleName:"authenticated",action:"delete",scopeNames:0},{roleName:"authenticated",action:"clone",scopeNames:0},{roleName:"authenticated",action:"deleteBulk"},{roleName:"authenticated",action:"exportBulk"},{roleName:"authenticated",action:"layoutBulk"},{roleName:"system",action:"read",scopeNames:"authenticated"}];yield t.ctx.bean.role.addRoleRightBatch({atomClassName:"note",roleRights:e})}}))()}test(){return o((function*(){}))()}}return t}},313:(e,t,o)=>{const r=o(223),n=o(521);e.exports=e=>({"version.manager":{mode:"app",bean:r},"atom.note":{mode:"app",bean:n}})},817:e=>{e.exports=e=>({})},971:e=>{e.exports={}},724:e=>{e.exports={}},995:e=>{e.exports={Note:"便签","Create Note":"新建便签","Note List":"便签列表","Note Test":"便签测试"}},266:(e,t,o)=>{e.exports={"en-us":o(724),"zh-cn":o(995)}},1:e=>{e.exports=e=>{const t=e.meta.mockUtil.parseInfoFromPackage(__dirname);return[{atomName:"Create Note",atomStaticKey:"createNote",atomRevision:0,atomCategoryId:"a-base:menu.Create",resourceType:"a-base:menu",resourceConfig:JSON.stringify({module:t.relativeName,atomClassName:"note",atomAction:"create"}),resourceRoles:"authenticated"},{atomName:"Note List",atomStaticKey:"listNote",atomRevision:0,atomCategoryId:"a-base:menu.List",resourceType:"a-base:menu",resourceConfig:JSON.stringify({module:t.relativeName,atomClassName:"note",atomAction:"read"}),resourceRoles:"authenticated"}]}},70:e=>{e.exports=e=>({note:{type:"object",properties:{atomName:{type:"string",ebType:"text",ebTitle:"Title",notEmpty:!0},content:{type:"string",ebType:"text",ebTitle:"Content",ebTextarea:!0}}},noteSearch:{type:"object",properties:{description:{type:"string",ebType:"text",ebTitle:"Description"}}}})},326:(e,t,o)=>{const r=o(70);e.exports=e=>{const t={};return Object.assign(t,r(e)),t}},691:e=>{e.exports=e=>({})},312:(e,t,o)=>{const r=o(817),n=o(266),a=o(971);e.exports=e=>{const t=o(129)(e),s=o(313)(e),i=o(788)(e),c=o(691)(e),l=o(481)(e),u=o(700)(e),m=o(730)(e);return{aops:t,beans:s,routes:i,controllers:c,services:l,models:u,config:r,locales:n,errors:a,meta:m}}},730:(e,t,o)=>{e.exports=e=>{const t=o(326)(e);return{base:{atoms:{note:{info:{bean:"note",title:"Note",tableName:"testNote",language:!1,category:!0,tag:!0,simple:!0},actions:{},validator:"note",search:{validator:"noteSearch"}}},statics:{"a-base.resource":{items:o(1)(e)}}},validation:{validators:{note:{schemas:"note"},noteSearch:{schemas:"noteSearch"}},keywords:{},schemas:t},index:{indexes:{testNote:"createdAt,updatedAt,atomId"}}}}},732:e=>{e.exports=e=>{class t extends e.meta.Model{constructor(e){super(e,{table:"testNote",options:{disableDeleted:!1}})}}return t}},700:(e,t,o)=>{const r=o(732);e.exports=e=>({note:r})},788:e=>{e.exports=e=>[]},481:e=>{e.exports=e=>({})}},t={},o=function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}(312);module.exports=o})();