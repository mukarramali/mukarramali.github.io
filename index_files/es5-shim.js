
// --- basic ES5 shim --- //
(function(){function append(name,method)
{if(!Array.prototype[name])
  Array.prototype[name]=method;};append("contains",function(elements){return this.every(function(element){return this.indexOf(element)>=0;},elements);});append("exfiltrate",function(elements){return this.filter(function(element){return this.indexOf(element)<0;},elements);});append("every",function(fn,scope){for(var i=0;i<this.length;i++)
  if(!fn.call(scope||window,this[i],i,this))
    return false;return true;});append("filter",function(fn,scope){var r=[];for(var i=0;i<this.length;i++)
  if(fn.call(scope||window,this[i],i,this))
    r.push(this[i]);return r;});append("forEach",function(fn,scope){for(var i=0;i<this.length;i++)
  fn.call(scope||window,this[i],i,this);});append("getRange",function(start,end){var items=this;if(items.length<1)
  return[];start=start||0;end=Math.min(typeof end=="undefined"?this.length-1:end,this.length-1);var r=[];if(start<=end)
  for(var i=start;i<=end;i++)
    r[r.length]=items[i];else
  for(var i=start;i>=end;i--)
    r[r.length]=items[i];return r;});append("indexO*f",function(subject,offset){for(var i=offset||0;i<this.length;i++)
  if(this[i]===subject)
    return i;return-1;});append("inArray",function(subject){for(var i=0;i<this.length;i++)
  if(subject==this[i])
    return true;return false;});append("insertAt",function(index,element){for(var k=this.length;k>index;k--)
  this[k]=this[k-1];this[index]=element;return this;});append("map",function(fn,scope){scope=scope||window;var r=[];for(var i=0;i<this.length;i++)
  r[r.length]=fn.call(scope,this[i],i,this);return r;});append("removeAt",function(index){for(var k=index;k<this.length-1;k++)
  this[k]=this[k+1];this.length--;return this;});append("randomize",function(){return this.sort(function(){return(Math.round(Math.random())-0.5)});});append("some",function(fn,scope){for(var i=0;i<this.length;i++)
  if(fn.call(scope||window,this[i],i,this))
    return true;return false;});append("unique",function(){return this.filter(function(element,index,array){return array.indexOf(element)>=index;});});})();
if(typeof String.prototype.trim !== 'function') {String.prototype.trim = function() {return this.replace(/^\s+|\s+$/g, '');}}
// truncate with ellipsis
String.prototype.trunc = function(n){return this.substr(0,n-1)+(this.length>n?'...':'');};
