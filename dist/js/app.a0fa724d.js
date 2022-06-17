(()=>{"use strict";var e={526:(e,o,t)=>{var a=t(963),n=(t(244),t(371),t(893)),s=t(252),i=t(577),l=t(262);const d=JSON.parse('{"brand":{"appname":"Pokédex","logo":"/logo.png"},"generic":{"load":{"loadingMessage":"Carregando...","fewSecondsLeft":"Espere mais alguns segundos.","error":"Algo errado aconteceu :("},"buttons":{"details":"Detalhes","capture":"Capturar","remove":"Remover","removeImage":"Remover imagem"},"nothingFound":"Nada encontrado."},"pokemons":{"weight":"Peso","height":"Altura","evolutions":"Evoluçõe(s)","species":"Espécie","stats":"Estatística(s)","physiognomy":"Fisionomia","moves":"Movimento(s)","types":"Tipo(s)","image":"Mudar imagem do pokemon","abilitys":"Habilidade(s)"},"searchPokemon":{"placeholder":"Digite o nome do pokémon","label":"Pesquisar pokémon"},"views":{"pokemons":{"title":"Pokémons","description":"Capture pokemons selvagens"},"pokemonByType":{"title":"Pokémons por tipo","description":"Capture pokemons selvagens"},"pokedex":{"title":"Pokédex","description":"Veja todos os seus pokemons capturados","empty":"Sua pokedex está vazia."}},"notifications":{"pokedex":"Pokédex","pokemonImage":"Imagem do pokémon","capturedPokemon":"Capturou um pokémon","removedPokemon":"Removido um pokémon","removedImage":"Removida uma imagem do pokémon","updatedImage":"Atualizada uma imagem do pokémon","pokemonAlreadyCaptured":"Este pokémon já foi capturado"}}'),r=e=>((0,s.dD)("data-v-29008d91"),e=e(),(0,s.Cn)(),e),m={class:"navbar navbar-expand-lg navbar-light position-fixed bg-light"},p={class:"container-fluid"},u=["src"],c={class:"appname"},g=r((()=>(0,s._)("button",{class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1))),k={class:"collapse navbar-collapse",id:"navbarCollapse"},h={class:"navbar-nav me-auto mb-2 mb-lg-0"},y={class:"navbar-nav mb-2 mb-lg-0"},f={__name:"NavBarComposition",setup(e){return(e,o)=>{const t=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("nav",m,[(0,s._)("div",p,[(0,s.Wm)(t,{class:"navbar-brand",to:"/"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:(0,l.SU)(d).brand.logo,alt:"",width:"60",height:"60"},null,8,u),(0,s._)("a",c,(0,i.zw)((0,l.SU)(d).brand.appname),1)])),_:1}),g,(0,s._)("div",k,[(0,s._)("ul",h,[(0,s.WI)(e.$slots,"left")]),(0,s._)("ul",y,[(0,s.WI)(e.$slots,"right")])])])])}}};var w=t(744);const b=(0,w.Z)(f,[["__scopeId","data-v-29008d91"]]),v=b;function P(){let e=localStorage.getItem("pokemonList");return null==e&&(e=""),e}function _(e){let o=P();o=o.replace(`${e}, `,""),o=o.replace(`, ${e}`,""),o=o.replace(e,""),localStorage.setItem("pokemonList",o)}function I(e){let o=P();return!o.match(e)&&(""!==o?o+=`, ${e}`:o=e,localStorage.setItem("pokemonList",o),!0)}function C(){const e=P();if(""===e)return 0;const o=e.split(", ");return o.length}function U(){return 0===C()}const S={class:"nav-item"},M=(0,s.Uk)("Pokémons"),T={class:"nav-item"},D={class:"content"},x={data(){return{countPokemons:C()}},methods:{pokemonsCount(){this.countPokemons=C()}}},L=Object.assign(x,{__name:"App",setup(e){return(e,o)=>{const t=(0,s.up)("notifications"),a=(0,s.up)("RouterLink"),n=(0,s.up)("RouterView");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(t,{position:"bottom right"}),(0,s.Wm)(v,null,{right:(0,s.w5)((()=>[(0,s._)("li",S,[(0,s.Wm)(a,{class:"nav-link",to:"/"},{default:(0,s.w5)((()=>[M])),_:1})]),(0,s._)("li",T,[(0,s.Wm)(a,{class:"nav-link",to:"/pokedex"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Minha pokédex ("+(0,i.zw)(e.countPokemons)+") ",1)])),_:1})])])),_:1}),(0,s._)("div",D,[(0,s.Wm)(n,{onRefreshPokemonCount:o[0]||(o[0]=o=>e.pokemonsCount())})])],64)}}}),O=(0,w.Z)(L,[["__scopeId","data-v-9652a61a"]]),W=O;var B=t(119);const $={key:0},z={key:1},j={key:2},q={key:3},E={key:4},H={key:5};function R(e,o,t,a,n,i){return"h1"==t.type?((0,s.wg)(),(0,s.iD)("h1",$,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])):"h2"==t.type?((0,s.wg)(),(0,s.iD)("h2",z,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])):"h3"==t.type?((0,s.wg)(),(0,s.iD)("h3",j,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])):"h4"==t.type?((0,s.wg)(),(0,s.iD)("h4",q,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])):"h5"==t.type?((0,s.wg)(),(0,s.iD)("h5",E,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])):"h6"==t.type?((0,s.wg)(),(0,s.iD)("h6",H,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])):(0,s.kq)("",!0)}const Q={props:{type:{type:String,default:"h2"}}},A=(0,w.Z)(Q,[["render",R],["__scopeId","data-v-659dd358"]]),Z=A;function V(e,o){return(0,s.wg)(),(0,s.iD)("p",null,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}const F={},G=(0,w.Z)(F,[["render",V],["__scopeId","data-v-5131417c"]]),N=G,Y={key:1};function K(e,o,t,a,n,l){const d=(0,s.up)("RouterLink");return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.badges,(e=>((0,s.wg)(),(0,s.iD)("span",{key:e,class:(0,i.C_)("badge badge-pill bg-"+e[0]),"data-bs-dismiss":"modal"},[t.GoToType?((0,s.wg)(),(0,s.j4)(d,{key:0,to:"/type/"+e[1]},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e[1]),1)])),_:2},1032,["to"])):((0,s.wg)(),(0,s.iD)("a",Y,(0,i.zw)(e[1]),1))],2)))),128)}const J={props:{badges:{type:Array},GoToType:{type:Boolean}}},X=(0,w.Z)(J,[["render",K]]),ee=X,oe={key:0,class:"card-header"},te={class:"card-body"},ae=["src"],ne=["href"],se=["src"],ie={props:{collum:{type:String,default:"col-12 col-md-6 col-lg-4"},style:{type:String,default:""},urlType:{type:String,default:"router"},url:{type:String},imgUrl:{type:String,default:""},headerTitle:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},maxDescription:{type:Number},badges:{type:Array}},data(){return{descriptionProcessed:{type:String}}},created(){null!=this.description&&(this.description.length>this.maxDescription?(this.descriptionProcessed=this.description.substring(0,this.maxDescription),this.descriptionProcessed+="..."):this.descriptionProcessed=this.description)},component:{TitleComponent:Z,TextComponent:N,BadgeComponent:ee}},le=Object.assign(ie,{__name:"CardComposition",setup(e){return(o,t)=>{const a=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(e.collum)},[(0,s._)("div",{class:"card text-white mb-3",style:(0,i.j5)(e.style)},[""!=e.headerTitle?((0,s.wg)(),(0,s.iD)("div",oe,(0,i.zw)(e.headerTitle),1)):(0,s.kq)("",!0),(0,s._)("div",te,[""!=e.imgUrl&&"router"==e.urlType&&void 0!==e.url?((0,s.wg)(),(0,s.j4)(a,{key:0,to:e.url},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.imgUrl,loading:"lazy",class:"card-img-top mx-auto d-block",alt:"..."},null,8,ae)])),_:1},8,["to"])):""!=e.imgUrl?((0,s.wg)(),(0,s.iD)("a",{key:1,href:e.url},[(0,s._)("img",{src:e.imgUrl,loading:"lazy",class:"card-img-top mx-auto d-block",alt:"..."},null,8,se)],8,ne)):(0,s.kq)("",!0),(0,s._)("div",null,[(0,s.Wm)(ee,{badges:e.badges},null,8,["badges"]),""!=e.title?((0,s.wg)(),(0,s.j4)(Z,{key:0,type:"h5"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.title),1)])),_:1})):(0,s.kq)("",!0),""!=e.description?((0,s.wg)(),(0,s.j4)(N,{key:1},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.descriptionProcessed),1)])),_:1})):(0,s.kq)("",!0),(0,s.WI)(o.$slots,"default")])])],4)],2)}}}),de=(0,w.Z)(le,[["__scopeId","data-v-6f1488e5"]]),re=de,me={class:"container"},pe={key:0},ue={key:1},ce={key:3,class:"spinner"},ge={key:0,class:"spinner-border",role:"status"},ke={class:"visually-hidden"},he={key:1},ye={key:2},fe={props:{isLoaded:{type:Boolean,required:!0},loadingHasError:{type:Boolean,required:!1},title:{type:null},description:{type:null},isTitleVisible:{type:Boolean,default:!0},isDescriptionVisible:{type:Boolean,default:!0}},data(){return{isLoadingSlow:!1}},mounted(){setTimeout((()=>{this.isLoadingSlow=!0}),500)},components:{TextComponent:N,TitleComponent:Z}},we=Object.assign(fe,{__name:"PageComposition",setup(e){return(o,t)=>((0,s.wg)(),(0,s.iD)("div",me,[e.isTitleVisible&&e.isLoaded?((0,s.wg)(),(0,s.iD)("div",pe,[(0,s.Wm)(Z,{type:"h2"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.title),1)])),_:1})])):(0,s.kq)("",!0),e.isDescriptionVisible&&e.isLoaded?((0,s.wg)(),(0,s.iD)("div",ue,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.description),1)])),_:1})])):(0,s.kq)("",!0),e.isLoaded?(0,s.WI)(o.$slots,"default",{key:2}):((0,s.wg)(),(0,s.iD)("div",ce,[e.loadingHasError?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",ge,[(0,s._)("span",ke,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.load.loadingMessage),1)])),_:1})])])),o.isLoadingSlow&&!e.loadingHasError?((0,s.wg)(),(0,s.iD)("div",he,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.load.fewSecondsLeft),1)])),_:1})])):(0,s.kq)("",!0),e.loadingHasError?((0,s.wg)(),(0,s.iD)("div",ye,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.load.error),1)])),_:1})])):(0,s.kq)("",!0)]))]))}}),be=(0,w.Z)(we,[["__scopeId","data-v-ec1e009c"]]),ve=be,Pe=["data-bs-toggle","data-bs-dismiss","data-bs-target","disabled"];function _e(e,o,t,a,n,l){const d=(0,s.up)("RouterLink");return"router"==t.type?((0,s.wg)(),(0,s.j4)(d,{key:0,class:(0,i.C_)("btn btn-"+t.styleType),"data-bs-toggle":t.dataBsToggle,"data-bs-target":t.dataBsTarget,"data-bs-dismiss":t.dataBsDismiss,disabled:t.isDisabled},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"default")])),_:3},8,["class","data-bs-toggle","data-bs-target","data-bs-dismiss","disabled"])):((0,s.wg)(),(0,s.iD)("a",{key:1,class:(0,i.C_)("btn btn-"+t.styleType),"data-bs-toggle":t.dataBsToggle,"data-bs-dismiss":t.dataBsDismiss,"data-bs-target":t.dataBsTarget,disabled:t.isDisabled},[(0,s.WI)(e.$slots,"default")],10,Pe))}const Ie={props:{styleType:{type:String,default:"primary"},type:{type:String,default:"link"},isDisabled:{type:Boolean,default:!1},dataBsToggle:{type:String,default:""},dataBsTarget:{type:String,default:""},dataBsDismiss:{type:String,default:""}}},Ce=(0,w.Z)(Ie,[["render",_e]]),Ue=Ce,Se={style:{width:"100%"}},Me=["for"],Te=["id","name","placeholder","readonly","disable","type"],De={class:"form-text"};function xe(e,o,t,a,n,l){return(0,s.wg)(),(0,s.iD)("div",Se,[(0,s._)("label",{for:t.name,class:(0,i.C_)([t.col,"form-label"])},[(0,s.Uk)((0,i.zw)(t.label)+" ",1),(0,s._)("input",{class:"form-control",id:t.name,name:t.name,placeholder:t.placeholder,readonly:!0===t.isReadonly,disable:!0===t.isDisabled,ref:"input",type:t.type},null,8,Te),(0,s._)("div",De,(0,i.zw)(t.footer),1)],10,Me)])}const Le={props:{name:{type:String,default:""},placeholder:{type:String,default:""},col:{type:String,default:"col-12 col-md-6 mb-3"},label:{type:String,default:""},footer:{type:String,default:""},isDisabled:{type:Boolean,default:!1},isReadonly:{type:Boolean,default:!1},type:{type:String,default:"text"}},methods:{}},Oe=(0,w.Z)(Le,[["render",xe]]),We=Oe,Be=["id"],$e={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},ze={class:"modal-content"},je={class:"modal-header"},qe=(0,s._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ee={class:"modal-body"},He={props:{id:{type:String,required:!0},title:{type:String}},components:{TitleComponent:Z}},Re=Object.assign(He,{__name:"ModalComposition",setup(e){return(o,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"modal fade",id:e.id,tabindex:"-1","aria-hidden":"true"},[(0,s._)("div",$e,[(0,s._)("div",ze,[(0,s._)("div",je,[(0,s.Wm)(Z,{type:"h3"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.title),1)])),_:1}),qe]),(0,s._)("div",Ee,[(0,s.WI)(o.$slots,"default")])])])],8,Be))}}),Qe=Re,Ae=Qe;function Ze(e){const o=localStorage.getItem(`pokemonImage${e}`);return null==o?"":o}function Ve(e){localStorage.removeItem(`pokemonImage${e}`)}function Fe(e,o){localStorage.setItem(`pokemonImage${e}`,o)}const Ge=JSON.parse('{"n":"https://pokeapi.co/api/v2/","w":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"}'),Ne=["src"],Ye={key:0,class:"section"},Ke={for:"changeImage"},Je={props:{pokemonId:{required:!0},showChange:{type:Boolean,default:!1}},data(){return{pokemonImage:this.getPokemonImage()}},methods:{changePokemonImage(){const e=document.querySelector("input[type=file]").files[0],o=new FileReader;let t;o.onloadend=()=>{t=o.result,Fe(this.pokemonId,t),this.pokemonImage=this.getPokemonImage(),this.$emit("imageChanged")},o.readAsDataURL(e),this.$notify({title:d.notifications.pokemonImage,text:d.notifications.updatedImage,type:"success"})},getPokemonImage(){const e=Ze(this.pokemonId);return""===e?`${Ge.w}/${this.pokemonId}.png`:e},removePokemonImage(){Ve(this.pokemonId),this.pokemonImage=this.getPokemonImage(),this.$emit("imageChanged"),this.$notify({title:d.notifications.pokemonImage,text:d.notifications.removedImage,type:"error"})}}},Xe=Object.assign(Je,{__name:"PokemonImageComposition",setup(e){return(o,t)=>((0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("img",{src:o.pokemonImage,alt:"pokemon image",style:{width:"100%","margin-bottom":"10px"}},null,8,Ne),e.showChange?((0,s.wg)(),(0,s.iD)("div",Ye,[(0,s._)("label",Ke,[(0,s.Uk)((0,i.zw)((0,l.SU)(d).pokemons.image)+" ",1),(0,s._)("input",{type:"file",id:"changeImage",accept:"image/jpeg/*",onChange:t[0]||(t[0]=e=>o.changePokemonImage())},null,32)]),(0,s.Wm)(Ue,{styleType:"warning",style:{"margin-top":"10px"},onClick:t[1]||(t[1]=e=>o.removePokemonImage())},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.buttons.removeImage),1)])),_:1})])):(0,s.kq)("",!0)]))}}),eo=Xe,oo=eo,to={key:0},ao={class:"section"},no={class:"section"},so={class:"section"},io={class:"section"},lo={class:"section"},ro={key:1,class:"spinner"},mo={key:0,class:"spinner-border",role:"status"},po={class:"visually-hidden"},uo={key:1},co={props:{pokemonOnModal:{type:Object,required:!0},modalId:{type:String,required:!0},isModalLoaded:{type:Boolean,required:!0},loadingHasError:{type:Boolean,required:!1},GoToType:{type:Boolean,default:!0,required:!1}},methods:{getPokemonStatsBadge(e){const o=[];return e.forEach((e=>{o.push(["danger",`${e.stat.name}: ${e.base_stat}`])})),o},getPokemonTypesBadge(e){const o=[];return e.forEach((e=>{o.push(["success",`${e.type.name}`])})),o},getPokemonMovesBadge(e){const o=[];return e.forEach((e=>{o.push(["warning",`${e.move.name}`])})),o},getPokemonAbilitiesBadge(e){const o=[];return e.forEach((e=>{o.push(["warning",`${e.ability.name}`])})),o}},components:{TextComponent:N,ModalComposition:Ae,BadgeComponent:ee,PokemonImageComposition:oo}},go=Object.assign(co,{__name:"PokemonDetailsModalComposition",setup(e){return(o,t)=>((0,s.wg)(),(0,s.j4)(Ae,{id:e.modalId,title:e.pokemonOnModal.name},{default:(0,s.w5)((()=>[e.isModalLoaded?((0,s.wg)(),(0,s.iD)("div",to,[(0,s.Wm)(oo,{showChange:!0,pokemonId:e.pokemonOnModal.id,onImageChanged:t[0]||(t[0]=e=>o.$emit("imageChanged"))},null,8,["pokemonId"]),(0,s._)("div",ao,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).pokemons.types),1)])),_:1}),(0,s.Wm)(ee,{GoToType:e.GoToType,badges:o.getPokemonTypesBadge(e.pokemonOnModal.types)},null,8,["GoToType","badges"])]),(0,s._)("div",no,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).pokemons.physiognomy),1)])),_:1}),(0,s.Wm)(ee,{badges:[["primary",`${(0,l.SU)(d).pokemons.weight}:\n              ${(.453592*e.pokemonOnModal.weight).toFixed(2)} kg`],["primary",`${(0,l.SU)(d).pokemons.height}: ${2.54*e.pokemonOnModal.height} cm`]]},null,8,["badges"])]),(0,s._)("div",so,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).pokemons.abilitys),1)])),_:1}),(0,s.Wm)(ee,{badges:o.getPokemonAbilitiesBadge(e.pokemonOnModal.abilities)},null,8,["badges"])]),(0,s._)("div",io,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).pokemons.stats),1)])),_:1}),(0,s.Wm)(ee,{badges:o.getPokemonStatsBadge(e.pokemonOnModal.stats)},null,8,["badges"])]),(0,s._)("div",lo,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).pokemons.moves),1)])),_:1}),(0,s.Wm)(ee,{badges:o.getPokemonMovesBadge(e.pokemonOnModal.moves)},null,8,["badges"])])])):((0,s.wg)(),(0,s.iD)("div",ro,[e.loadingHasError?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",mo,[(0,s._)("span",po,(0,i.zw)((0,l.SU)(d).generic.load.loadingMessage),1)])),e.loadingHasError?((0,s.wg)(),(0,s.iD)("div",uo,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.load.error),1)])),_:1})])):(0,s.kq)("",!0),(0,s._)("div",null,[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.load.fewSecondsLeft),1)])),_:1})])]))])),_:1},8,["id","title"]))}}),ko=go,ho=ko;var yo=t(669),fo=t.n(yo);fo().defaults.baseURL=Ge.n;const wo=fo(),bo=(0,s._)("hr",null,null,-1),vo={class:"row"},Po={name:"HomeView",data(){return{entities:{results:[]},pokemonOnModal:{},pokemonEvolutionOnModal:{},pokemonSpeciesOnModal:{},searchQuery:"",isModalLoaded:!1,isLoaded:!1}},created(){this.loadPage()},methods:{loadPage(){wo.get("pokemon?offset=1&limit=1").then((e=>{let o;o=e.data.count>=500?500:e.data.count,wo.get("pokemon?offset=[offset]&limit=[limit]".replace("[offset]",0).replace("[limit]",o)).then((e=>{this.entities=e.data,this.isLoaded=!0}))}))},loadPokemonOnModal(e){this.isModalLoaded=!1,wo.get(`pokemon/${e}`).then((e=>{this.pokemonOnModal=e.data,this.isModalLoaded=!0}))},getPokemonIdByUrl(e){const o=e.split("/api/v2/pokemon/");return o[1].replace("/","")},addPokemonToPokedex(e){I(e)?(this.$emit("refreshPokemonCount"),this.$notify({title:d.notifications.pokedex,text:d.notifications.capturedPokemon,type:"success"})):this.$notify({title:d.notifications.pokedex,text:d.notifications.pokemonAlreadyCaptured,type:"error"})}},computed:{searchPokemon(){let e=this.entities.results;return""===this.searchQuery||(e=e.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())))),e}},components:{CardComponent:re,TitleComponent:Z,PageComposition:ve,ButtonComponent:Ue,InputComponent:We,PokemonDetailsModalComposition:ho,PokemonImageComposition:oo}},_o=Object.assign(Po,{setup(e){return(e,o)=>((0,s.wg)(),(0,s.j4)(ve,{title:(0,l.SU)(d).views.pokemons.title,description:(0,l.SU)(d).views.pokemons.description,isLoaded:e.isLoaded},{default:(0,s.w5)((()=>[bo,(0,s.Wm)(We,{value:e.searchQuery,onInput:o[0]||(o[0]=o=>e.searchQuery=o.target.value),placeholder:(0,l.SU)(d).searchPokemon.placeholder,label:(0,l.SU)(d).searchPokemon.label,type:"search",name:"seach",col:"col-12"},null,8,["value","placeholder","label"]),(0,s._)("div",vo,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.searchPokemon,(o=>((0,s.wg)(),(0,s.j4)(re,{key:o,collum:"col-12 col-md-6 col-lg-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(oo,{pokemonId:e.getPokemonIdByUrl(o.url)},null,8,["pokemonId"]),(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.name),1)])),_:2},1024),(0,s.Wm)(Ue,{onClick:t=>e.addPokemonToPokedex(e.getPokemonIdByUrl(o.url)),style:{"margin-right":"16px"},styleType:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.buttons.capture),1)])),_:2},1032,["onClick"]),(0,s.Wm)(Ue,{dataBsToggle:"modal",styleType:"success",dataBsTarget:"#pokemonDetails",onClick:t=>e.loadPokemonOnModal(e.getPokemonIdByUrl(o.url))},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.buttons.details),1)])),_:2},1032,["onClick"])])),_:2},1024)))),128))]),(0,s.Wm)(ho,{modalId:"pokemonDetails",pokemonOnModal:e.pokemonOnModal,isModalLoaded:e.isModalLoaded,onImageChanged:o[1]||(o[1]=o=>e.loadPage())},null,8,["pokemonOnModal","isModalLoaded"])])),_:1},8,["title","description","isLoaded"]))}}),Io=_o,Co=Io,Uo=(0,s._)("hr",null,null,-1),So={key:1,class:"row"},Mo={name:"HomeView",data(){return{entities:[],pokemonOnModal:{},searchQuery:"",isModalLoaded:!1,isLoaded:!1}},created(){this.loadPage()},methods:{loadPage(){wo.get("pokemon?offset=1&limit=1").then((e=>{wo.get("pokemon?offset=[offset]&limit=[limit]".replace("[offset]",0).replace("[limit]",e.data.count)).then((e=>{this.entities=e.data.results,this.isLoaded=!0}))}))},loadPokemonOnModal(e){this.isModalLoaded=!1,wo.get(`pokemon/${e}`).then((e=>{this.pokemonOnModal=e.data,this.isModalLoaded=!0}))},getPokemonIdByUrl(e){const o=e.split("/api/v2/pokemon/");return o[1].replace("/","")},removePokemonFromPokedex(e,o){this.pokemonOnPokedex.splice(o,1),_(e),this.loadPage(),this.$emit("refreshPokemonCount"),this.$notify({title:d.notifications.pokedex,text:d.notifications.removedPokemon,type:"error"})}},computed:{searchPokemon(){let e=this.pokemonOnPokedex;return""===this.searchQuery||(e=e.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())))),e},pokemonOnPokedex(){const e=P().split(", "),o=[];return this.entities.forEach((t=>{for(let a=0;a<e.length;a+=1)this.getPokemonIdByUrl(t.url)===e[a]&&o.push(t)})),o}},components:{CardComposition:re,TitleComponent:Z,PageComposition:ve,ButtonComponent:Ue,InputComponent:We,PokemonDetailsModalComposition:ho,PokemonImageComposition:oo}},To=Object.assign(Mo,{setup(e){return(e,o)=>((0,s.wg)(),(0,s.j4)(ve,{title:(0,l.SU)(d).views.pokedex.title,description:(0,l.SU)(d).views.pokedex.description,isLoaded:e.isLoaded},{default:(0,s.w5)((()=>[Uo,(0,s.Wm)(We,{value:e.searchQuery,onInput:o[0]||(o[0]=o=>e.searchQuery=o.target.value),placeholder:(0,l.SU)(d).searchPokemon.placeholder,label:(0,l.SU)(d).searchPokemon.label,type:"search",name:"seach",col:"col-12"},null,8,["value","placeholder","label"]),(0,l.SU)(U)()?((0,s.wg)(),(0,s.j4)(Z,{key:0,type:"h3"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).views.pokedex.empty),1)])),_:1})):((0,s.wg)(),(0,s.iD)("div",So,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.searchPokemon,((o,t)=>((0,s.wg)(),(0,s.j4)(re,{key:o,collum:"col-12 col-md-6 col-lg-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(oo,{pokemonId:e.getPokemonIdByUrl(o.url)},null,8,["pokemonId"]),(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.name),1)])),_:2},1024),(0,s.Wm)(Ue,{onClick:a=>e.removePokemonFromPokedex(e.getPokemonIdByUrl(o.url),t),style:{"margin-right":"16px"},styleType:"warning"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.buttons.remove),1)])),_:2},1032,["onClick"]),(0,s.Wm)(Ue,{dataBsToggle:"modal",dataBsTarget:"#pokemonDetails",styleType:"success",onClick:t=>e.loadPokemonOnModal(e.getPokemonIdByUrl(o.url))},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.buttons.details),1)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),(0,s.Wm)(ho,{modalId:"pokemonDetails",pokemonOnModal:e.pokemonOnModal,isModalLoaded:e.isModalLoaded,onImageChanged:o[1]||(o[1]=o=>e.loadPage())},null,8,["pokemonOnModal","isModalLoaded"])])),_:1},8,["title","description","isLoaded"]))}}),Do=To,xo=Do,Lo=(0,s._)("hr",null,null,-1),Oo={class:"row"},Wo={name:"HomeView",data(){return{id:this.$route.params.id,entities:{},pokemonOnModal:{},searchQuery:"",isModalLoaded:!1,isLoaded:!1}},created(){this.loadPage()},methods:{loadPage(){wo.get("type/[id]".replace("[id]",this.id)).then((e=>{this.entities=e.data,this.isLoaded=!0}))},loadPokemonOnModal(e){this.isModalLoaded=!1,wo.get(`pokemon/${e}`).then((e=>{this.pokemonOnModal=e.data,this.isModalLoaded=!0}))},getPokemonIdByUrl(e){const o=e.split("/api/v2/pokemon/");return o[1].replace("/","")},addPokemonToPokedex(e){I(e)?(this.$emit("refreshPokemonCount"),this.$notify({title:d.notifications.pokedex,text:d.notifications.capturedPokemon,type:"success"})):this.$notify({title:d.notifications.pokedex,text:d.notifications.pokemonAlreadyCaptured,type:"error"})}},computed:{searchPokemon(){let e=this.entities.pokemon;return""===this.searchQuery||(e=e.filter((e=>e.pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase())))),e}},components:{CardComponent:re,TitleComponent:Z,PageComposition:ve,ButtonComponent:Ue,InputComponent:We,PokemonDetailsModalComposition:ho,PokemonImageComposition:oo}},Bo=Object.assign(Wo,{setup(e){return(e,o)=>((0,s.wg)(),(0,s.j4)(ve,{title:(0,l.SU)(d).views.pokemonByType.title+": "+e.id,description:(0,l.SU)(d).views.pokemonByType.description,isLoaded:e.isLoaded},{default:(0,s.w5)((()=>[Lo,(0,s.Wm)(We,{value:e.searchQuery,onInput:o[0]||(o[0]=o=>e.searchQuery=o.target.value),placeholder:(0,l.SU)(d).searchPokemon.placeholder,label:(0,l.SU)(d).searchPokemon.label,type:"search",name:"seach",col:"col-12"},null,8,["value","placeholder","label"]),(0,s._)("div",Oo,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.searchPokemon,(o=>((0,s.wg)(),(0,s.j4)(re,{key:o,collum:"col-12 col-md-6 col-lg-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(oo,{pokemonId:e.getPokemonIdByUrl(o.pokemon.url)},null,8,["pokemonId"]),(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.pokemon.name),1)])),_:2},1024),(0,s.Wm)(Ue,{onClick:t=>e.addPokemonToPokedex(e.getPokemonIdByUrl(o.pokemon.url)),style:{"margin-right":"16px"},styleType:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.buttons.capture),1)])),_:2},1032,["onClick"]),(0,s.Wm)(Ue,{dataBsToggle:"modal",styleType:"success",dataBsTarget:"#pokemonDetails",onClick:t=>e.loadPokemonOnModal(e.getPokemonIdByUrl(o.pokemon.url))},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)((0,l.SU)(d).generic.buttons.details),1)])),_:2},1032,["onClick"])])),_:2},1024)))),128))]),(0,s.Wm)(ho,{modalId:"pokemonDetails",pokemonOnModal:e.pokemonOnModal,isModalLoaded:e.isModalLoaded,GoToType:!1,onImageChanged:o[1]||(o[1]=o=>e.loadPage())},null,8,["pokemonOnModal","isModalLoaded"])])),_:1},8,["title","description","isLoaded"]))}}),$o=Bo,zo=$o,jo=[{path:"/",name:"home",component:Co},{path:"/type/:id",name:"pokemon list by type",component:zo},{path:"/pokedex",name:"pokedex",component:xo}],qo=(0,B.p7)({history:(0,B.PO)("/pokedex/"),routes:jo}),Eo=qo;(0,a.ri)(W).use(Eo).use(n.Z).mount("#app")}},o={};function t(a){var n=o[a];if(void 0!==n)return n.exports;var s=o[a]={exports:{}};return e[a](s,s.exports,t),s.exports}t.m=e,(()=>{var e=[];t.O=(o,a,n,s)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,n,s]=e[m],l=!0,d=0;d<a.length;d++)(!1&s||i>=s)&&Object.keys(t.O).every((e=>t.O[e](a[d])))?a.splice(d--,1):(l=!1,s<i&&(i=s));if(l){e.splice(m--,1);var r=n();void 0!==r&&(o=r)}}return o}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[a,n,s]}})(),(()=>{t.n=e=>{var o=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(o,{a:o}),o}})(),(()=>{t.d=(e,o)=>{for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o)})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={143:0};t.O.j=o=>0===e[o];var o=(o,a)=>{var n,s,[i,l,d]=a,r=0;if(i.some((o=>0!==e[o]))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(d)var m=d(t)}for(o&&o(a);r<i.length;r++)s=i[r],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(m)},a=self["webpackChunkpokedex"]=self["webpackChunkpokedex"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))})();var a=t.O(void 0,[998],(()=>t(526)));a=t.O(a)})();
//# sourceMappingURL=app.a0fa724d.js.map