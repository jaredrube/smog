define(["ext/jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,buf=[];with(locals||{}){var interp;buf.push("<div"),buf.push(attrs({"class":"well row"},{})),buf.push("><div"),buf.push(attrs({"class":"page-header"},{})),buf.push("><h1>Administration</h1></div><div"),buf.push(attrs({"class":"span4"},{})),buf.push("><h2>Build</h2><b>System: </b><p"),buf.push(attrs({title:""+buildInfo.sysInfo+"","class":"crop"},{title:!0})),buf.push(">"+escape((interp=buildInfo.sysInfo)==null?"":interp)+"</p><b>Version: </b><p>"+escape((interp=buildInfo.version)==null?"":interp)+"</p><b>Bits: </b><p>"+escape((interp=buildInfo.bits)==null?"":interp)+"</p><b>Debug: </b><p>"+escape((interp=buildInfo.debug)==null?"":interp)+"</p></div><div"),buf.push(attrs({"class":"span4"},{})),buf.push("><h2>System</h2><b>Host: </b><p>"+escape((interp=serverStatus.host)==null?"":interp)+"</p><b>Uptime: </b><p>"+escape((interp=serverStatus.uptime)==null?"":interp)+" seconds</p><b>Collections: </b><p>"+escape((interp=collections.length)==null?"":interp)+"</p><b>Connections: </b><p>"+escape((interp=serverStatus.connections.current)==null?"":interp)+"/"+escape((interp=serverStatus.connections.total)==null?"":interp)+"</p></div><div"),buf.push(attrs({"class":"span4"},{})),buf.push("><h2>Performance</h2><b>Requests: </b><p>"+escape((interp=serverStatus.network.numRequests)==null?"":interp)+"</p><b>Input: </b><p>"+escape((interp=serverStatus.network.bytesIn)==null?"":interp)+"mb</p><b>Output: </b><p>"+escape((interp=serverStatus.network.bytesOut)==null?"":interp)+"mb</p><b>Disk Memory:</b><p>"+escape((interp=serverStatus.mem.mapped)==null?"":interp)+"mb</p><b>Virtual Memory: </b><p>"+escape((interp=serverStatus.mem.virtual)==null?"":interp)+"mb</p></div></div>")}return buf.join("")}})