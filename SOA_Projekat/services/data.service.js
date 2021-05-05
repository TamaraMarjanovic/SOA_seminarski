"use strict";

const DbService = require("../mixins/db.mixin");

module.exports = {
	name: "data",
	mixins: [
		DbService("tornadoes")
	],
	settings: {
	},
	actions: {
		/**
		 * Add a new row.
		 *
		 * @actions
		 * @param {Object} data - Data entity
		 *
		 * @returns {Object} Created entity
		 */
		postData:{
			rest: {
				method: "POST",
				path: "/Data",
			},
			params: {
				data: { type: "object" }
			},
			async handler(ctx){
				const result = await this.adapter.insert(ctx.params.data);
				return result;
			}
		},

		getData:{
			rest:{
				method: "GET",
				path: "/Data"
			},
			async handler(ctx){
			let params = {
				sort: ["yr","st","mag","inj","fat"],
				query: {}
				 };
				 if(ctx.params.yr){
					 params.query["yr"]=ctx.params.yr.toString();
				 }
				 if(ctx.params.mo){
					params.query["mo"]=ctx.params.mo.toString();
				}
				if(ctx.params.dy){
					params.query["dy"]=ctx.params.dy.toString();
				}
				if(ctx.params.st){
					params.query["st"]=ctx.params.st.toString();
				}
				if(ctx.params.mag){
					params.query["mag"]=ctx.params.mag.toString();
				}
				if(ctx.params.inj){
					params.query["inj"]={ $gt: ctx.params.inj };
				}
				if(ctx.params.fat){
					params.query["fat"]={ $gt: ctx.params.fat };
				}
				if(ctx.params.loss){
					params.query["loss"]={ $gt: ctx.params.loss };
				}
				const result=await this.adapter.find(params);
				return result;
			}
		},	
	}
};