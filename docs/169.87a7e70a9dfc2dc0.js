"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[169],{169:(J,h,r)=>{r.r(h),r.d(h,{ProductsModule:()=>l});var i=r(6895),c=r(8869),v=r(8505),t=r(4650),x=r(461),_=r(529);class p{constructor(){this.title=""}toUpper(){return this.title.toUpperCase()}toLower(){return this.title.toLowerCase()}}p.\u0275fac=function(o){return new(o||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["custom-title"]],inputs:{title:"title"},decls:2,vars:1,consts:[[1,"product-title"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._uU(1),t.qZA()),2&o&&(t.xp6(1),t.Oqu(n.title))},styles:[".product-title[_ngcontent-%COMP%]{font-size:18px;font-family:MullerBold,sans-serif;color:#382400}"]});class d{constructor(){this.count=0}}d.\u0275fac=function(o){return new(o||d)},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac});class a{transform(o,n){let u=o;return n.forEach(C=>{u=u.replace(new RegExp("[\u0410-\u042f\u0430-\u044f]*"+C+"[\u0430-\u044f]*","g"),B=>B.toUpperCase())}),u}}a.\u0275fac=function(o){return new(o||a)},a.\u0275pipe=t.Yjl({name:"wordUpper",type:a,pure:!0});const P=["elem"];function Z(e,o){1&e&&t._UZ(0,"div")}function T(e,o){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.s9C("src",n.product.image,t.LSH)}}function y(e,o){1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",12),t.qZA())}const M=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441"]},O=function(e){return{product:e}},A=function(e){return["/products",e]};class m{constructor(o){this.cartProductService=o,this.addToCartEvent=new t.vpe,this.product={id:0,image:"",title:"",description:"",dateTime:""}}}function U(e,o){1&e&&t._UZ(0,"product-card",6),2&e&&t.Q6J("product",o.$implicit)}function b(e,o){1&e&&(t.TgZ(0,"div",7),t._UZ(1,"div",8),t.qZA())}m.\u0275fac=function(o){return new(o||m)(t.Y36(d))},m.\u0275cmp=t.Xpm({type:m,selectors:[["product-card"]],viewQuery:function(o,n){if(1&o&&(t.Gf(p,5),t.Gf(P,5)),2&o){let u;t.iGM(u=t.CRH())&&(n.titleComponent=u.first),t.iGM(u=t.CRH())&&(n.elem=u.first)}},inputs:{product:"product"},outputs:{addToCartEvent:"addToCartEvent"},features:[t._Bn([d])],decls:17,vars:17,consts:[[1,"product"],[4,"ngIf","ngIfThen","ngIfElse"],["productImageBlock",""],["defaultImageBlock",""],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],["routerLink","/order",1,"button","btn-add-to-card",3,"queryParams"],[1,"button","btn-white",3,"routerLink"],[1,"product-image"],[3,"src"],["src","assets/images/pizzzzza.png"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0),t.YNc(1,Z,1,0,"div",1),t.YNc(2,T,2,1,"ng-template",null,2,t.W1O),t.YNc(4,y,2,0,"ng-template",null,3,t.W1O),t._UZ(6,"custom-title",4),t.ALo(7,"uppercase"),t.TgZ(8,"div",5),t._uU(9),t.ALo(10,"wordUpper"),t.qZA(),t.TgZ(11,"div",6,7)(13,"a",8),t._uU(14,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA(),t.TgZ(15,"a",9),t._uU(16,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()),2&o){const u=t.MAs(3),C=t.MAs(5);t.xp6(1),t.Q6J("ngIf",n.product.image)("ngIfThen",u)("ngIfElse",C),t.xp6(5),t.Q6J("title",t.lcZ(7,7,n.product.title)),t.xp6(3),t.Oqu(t.xi3(10,9,n.product.description,t.DdM(12,M))),t.xp6(4),t.Q6J("queryParams",t.VKq(13,O,n.product.title)),t.xp6(2),t.Q6J("routerLink",t.VKq(15,A,n.product.id))}},dependencies:[i.O5,c.rH,p,i.gd,a],styles:[".product[_ngcontent-%COMP%]{width:282px;margin-top:24px;padding:15px 20px;background-color:#fff;box-shadow:0 3px 13.8px 1.2px #98989833;text-align:center;box-sizing:border-box}.product-image[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:180px}.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.product-text[_ngcontent-%COMP%]{margin:14px 0 15px;font-size:14px;color:#181a1a;line-height:1.286;height:49px}.product-action[_ngcontent-%COMP%]{display:flex;flex-direction:column}.product-action[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:242px;height:50px;padding:17px}.product-action[_ngcontent-%COMP%]   .button.btn-white[_ngcontent-%COMP%]{margin-top:10px}@media screen and (max-width: 1229px){.product[_ngcontent-%COMP%]{margin:12px}}"]});class g{constructor(o,n,u){this.productService=o,this.http=n,this.router=u,this.products=[],this.loading=!1}ngOnInit(){this.loading=!0,this.productService.getProducts().pipe((0,v.b)(()=>{this.loading=!1})).subscribe({next:o=>{this.products=o},error:o=>{console.log(o),this.router.navigate(["/"])}})}}function z(e,o){1&e&&t._UZ(0,"div")}function E(e,o){if(1&e&&(t.TgZ(0,"div",12),t._UZ(1,"img",13),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.s9C("src",n.product.image,t.LSH)}}function I(e,o){1&e&&(t.TgZ(0,"div",12),t._UZ(1,"img",14),t.qZA())}g.\u0275fac=function(o){return new(o||g)(t.Y36(x.M),t.Y36(_.eN),t.Y36(c.F0))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-products"]],decls:7,vars:2,consts:[["id","products",1,"products"],[1,"container"],["id","products-title",1,"products-title"],[1,"products-items"],[3,"product",4,"ngFor","ngForOf"],["class","loader-bg",4,"ngIf"],[3,"product"],[1,"loader-bg"],[1,"loader"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3," \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u043f\u0438\u0446\u0446\u0443 "),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,U,1,1,"product-card",4),t.qZA(),t.YNc(6,b,2,0,"div",5),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngForOf",n.products),t.xp6(1),t.Q6J("ngIf",n.loading))},dependencies:[i.sg,i.O5,m]});const w=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441"]},q=function(e){return{product:e}};class f{constructor(o,n,u){this.activatedRoute=o,this.productService=n,this.router=u,this.subscription=null,this.product={id:0,image:"",title:"",description:"",dateTime:""}}ngOnInit(){this.subscription=this.activatedRoute.params.subscribe(o=>{o.id&&this.productService.getProduct(+o.id).subscribe({next:n=>{this.product=n},error:n=>{this.router.navigate(["/"])}})})}ngOnDestroy(){this.subscription?.unsubscribe()}}f.\u0275fac=function(o){return new(o||f)(t.Y36(c.gz),t.Y36(x.M),t.Y36(c.F0))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-product"]],decls:19,vars:14,consts:[["id","products",1,"products"],[1,"container"],[1,"products-title"],[1,"product-items"],[4,"ngIf","ngIfThen","ngIfElse"],["productImageBlock",""],["defaultImageBlock",""],[3,"title"],[1,"product-text"],[1,"product-action"],["elem",""],["routerLink","/order",1,"button","btn-add-to-card",3,"queryParams"],[1,"product-image"],[3,"src"],["src","assets/images/pizzzzza.png"]],template:function(o,n){if(1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0438\u0446\u0446\u044b"),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,z,1,0,"div",4),t.YNc(6,E,2,1,"ng-template",null,5,t.W1O),t.YNc(8,I,2,0,"ng-template",null,6,t.W1O),t._UZ(10,"custom-title",7),t.ALo(11,"uppercase"),t.TgZ(12,"div",8),t._uU(13),t.ALo(14,"wordUpper"),t.qZA(),t.TgZ(15,"div",9,10)(17,"a",11),t._uU(18,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA()()()()()),2&o){const u=t.MAs(7),C=t.MAs(9);t.xp6(5),t.Q6J("ngIf",n.product.image)("ngIfThen",u)("ngIfElse",C),t.xp6(5),t.Q6J("title",t.lcZ(11,6,n.product.title)),t.xp6(3),t.Oqu(t.xi3(14,8,n.product.description,t.DdM(11,w))),t.xp6(4),t.Q6J("queryParams",t.VKq(12,q,n.product.title))}},dependencies:[i.O5,p,c.rH,i.gd,a],styles:[".product-items[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.product-items[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-top:10px}"]});const F=[{path:"",component:g},{path:":id",component:f}];class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.Bz.forChild(F),c.Bz]});var Y=r(4466);class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[i.ez,Y.m,c.Bz,s,s]})}}]);