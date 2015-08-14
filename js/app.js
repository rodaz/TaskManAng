angular.module('app', [])
	.controller('controller', function(){
		var list = this;
		list.all = [
			{text:'buy milk', done:false, enter:false, vis: true, prior: 1}];
		list.add = function(){
			list.all.push({text:list.todo, done:false, enter:false, vis: true, prior:list.all.length+1});
			list.todo = '';
		};
		list.taskDel = function(del){
			var oldList = list.all;
			list.all = [];
			angular.forEach(oldList, function(td){
				if(td != del) list.all.push(td);
			});
		};
		list.ent = function(td){
			td.enter = true;
		};
		list.leav = function(td){
			td.enter = false;
		};
		list.taskEd = function(td){
			td.vis = false;
		};
		list.save = function(td){
			td.text = list.taskEdit;
			td.vis = true;
			list.taskEdit = '';
		};
		list.priorDown = function(td, ind){
			tdN = list.all[ind+1];
			tdN.prior = Math.abs(tdN.prior-list.all.length)+1;
			td.prior = (td.prior%list.all.length)+1;	
		};
		list.priorUp = function(td, ind){
			tdP = list.all[ind-1];
			tdP.prior = (tdP.prior%list.all.length)+1;
			td.prior= Math.abs(td.prior-list.all.length)+1;
		};
	});