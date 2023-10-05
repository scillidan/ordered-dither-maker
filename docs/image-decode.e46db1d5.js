function $parcel$export(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var $parcel$global="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},parcelRequire=$parcel$global.parcelRequire0bde;parcelRequire.register("iyI0k",function(t,e){var r=parcelRequire("9UjRe"),n=parcelRequire("5bHNC");function i(t,e){if(!(t=n(t)))return null;e?"string"==typeof e&&(e={type:e}):e={};var o=e.type;if(!o){// we do not throw an error since argument can be decoded data already
if(!(o=r(new Uint8Array(t))))return null;if(!i[o=o.mime])throw Error("Type `"+o+"` does not seem to be supported")}return i[o](t,e)}t.exports=i,i.png=i["image/png"]=parcelRequire("jiTGB"),i.gif=i["image/gif"]=parcelRequire("gJbbI"),i["image/jpeg"]=i["image/jpg"]=i.jpg=i.jpeg=parcelRequire("audnS"),i.bmp=i["image/bmp"]=i["image/bitmap"]=parcelRequire("dWI74"),i.tiff=i["image/tiff"]=parcelRequire("5IsOZ"),i.webp=i["image/webp"]=parcelRequire("fKIcC")}),parcelRequire.register("9UjRe",function(t,e){var r=parcelRequire("ettAe");let n=new Set(["jpg","png","gif","webp","flif","cr2","tif","bmp","jxr","psd","ico","bpg","jp2","jpm","jpx","heic","cur","dcm"]),i=t=>{let e=r(t);return n.has(e&&e.ext)?e:null};t.exports=i,t.exports.default=i,Object.defineProperty(i,"minimumBytes",{value:r.minimumBytes})}),parcelRequire.register("ettAe",function(module,exports){var $igx3v=parcelRequire("igx3v"),$a89ab8c911030fbd$require$Buffer=$igx3v.Buffer;let toBytes=t=>[...t].map(t=>t.charCodeAt(0)),xpiZipFilename=toBytes("META-INF/mozilla.rsa"),oxmlContentTypes=toBytes("[Content_Types].xml"),oxmlRels=toBytes("_rels/.rels");function readUInt64LE(t,e=0){let r=t[e],n=1,i=0;for(;++i<8;)n*=256,r+=t[e+i]*n;return r}let fileType=t=>{if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||$a89ab8c911030fbd$require$Buffer.isBuffer(t)))throw TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof t}\``);let e=t instanceof Uint8Array?t:new Uint8Array(t);if(!(e&&e.length>1))return null;let r=(t,r)=>{r=Object.assign({offset:0},r);for(let n=0;n<t.length;n++)// If a bitmask is set
if(r.mask)// If header doesn't equal `buf` with bits masked off
{if(t[n]!==(r.mask[n]&e[n+r.offset]))return!1}else if(t[n]!==e[n+r.offset])return!1;return!0},n=(t,e)=>r(toBytes(t),e);if(r([255,216,255]))return{ext:"jpg",mime:"image/jpeg"};if(r([137,80,78,71,13,10,26,10]))return{ext:"png",mime:"image/png"};if(r([71,73,70]))return{ext:"gif",mime:"image/gif"};if(r([87,69,66,80],{offset:8}))return{ext:"webp",mime:"image/webp"};if(r([70,76,73,70]))return{ext:"flif",mime:"image/flif"};// Needs to be before `tif` check
if((r([73,73,42,0])||r([77,77,0,42]))&&r([67,82],{offset:8}))return{ext:"cr2",mime:"image/x-canon-cr2"};if(r([73,73,42,0])||r([77,77,0,42]))return{ext:"tif",mime:"image/tiff"};if(r([66,77]))return{ext:"bmp",mime:"image/bmp"};if(r([73,73,188]))return{ext:"jxr",mime:"image/vnd.ms-photo"};if(r([56,66,80,83]))return{ext:"psd",mime:"image/vnd.adobe.photoshop"};// Zip-based file formats
// Need to be before the `zip` check
if(r([80,75,3,4])){if(r([109,105,109,101,116,121,112,101,97,112,112,108,105,99,97,116,105,111,110,47,101,112,117,98,43,122,105,112],{offset:30}))return{ext:"epub",mime:"application/epub+zip"};// Assumes signed `.xpi` from addons.mozilla.org
if(r(xpiZipFilename,{offset:30}))return{ext:"xpi",mime:"application/x-xpinstall"};if(n("mimetypeapplication/vnd.oasis.opendocument.text",{offset:30}))return{ext:"odt",mime:"application/vnd.oasis.opendocument.text"};if(n("mimetypeapplication/vnd.oasis.opendocument.spreadsheet",{offset:30}))return{ext:"ods",mime:"application/vnd.oasis.opendocument.spreadsheet"};if(n("mimetypeapplication/vnd.oasis.opendocument.presentation",{offset:30}))return{ext:"odp",mime:"application/vnd.oasis.opendocument.presentation"};// The docx, xlsx and pptx file types extend the Office Open XML file format:
// https://en.wikipedia.org/wiki/Office_Open_XML_file_formats
// We look for:
// - one entry named '[Content_Types].xml' or '_rels/.rels',
// - one entry indicating specific type of file.
// MS Office, OpenOffice and LibreOffice may put the parts in different order, so the check should not rely on it.
let t=(t,e=0)=>t.findIndex((t,r,n)=>r>=e&&80===n[r]&&75===n[r+1]&&3===n[r+2]&&4===n[r+3]),i=0,o=!1,a=null;do{let s=i+30;if(o||(o=r(oxmlContentTypes,{offset:s})||r(oxmlRels,{offset:s})),!a&&(n("word/",{offset:s})?a={ext:"docx",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}:n("ppt/",{offset:s})?a={ext:"pptx",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}:n("xl/",{offset:s})&&(a={ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),o&&a)return a;i=t(e,s)}while(i>=0)// No more zip parts available in the buffer, but maybe we are almost certain about the type?
if(a)return a}if(r([80,75])&&(3===e[2]||5===e[2]||7===e[2])&&(4===e[3]||6===e[3]||8===e[3]))return{ext:"zip",mime:"application/zip"};if(r([117,115,116,97,114],{offset:257}))return{ext:"tar",mime:"application/x-tar"};if(r([82,97,114,33,26,7])&&(0===e[6]||1===e[6]))return{ext:"rar",mime:"application/x-rar-compressed"};if(r([31,139,8]))return{ext:"gz",mime:"application/gzip"};if(r([66,90,104]))return{ext:"bz2",mime:"application/x-bzip2"};if(r([55,122,188,175,39,28]))return{ext:"7z",mime:"application/x-7z-compressed"};if(r([120,1]))return{ext:"dmg",mime:"application/x-apple-diskimage"};if(r([51,103,112,53])||// 3gp5
r([0,0,0])&&r([102,116,121,112],{offset:4})&&(r([109,112,52,49],{offset:8})||// MP41
r([109,112,52,50],{offset:8})||// MP42
r([105,115,111,109],{offset:8})||// ISOM
r([105,115,111,50],{offset:8})||// ISO2
r([109,109,112,52],{offset:8})||// MMP4
r([77,52,86],{offset:8})||// M4V
r([100,97,115,104],{offset:8})// DASH
))return{ext:"mp4",mime:"video/mp4"};if(r([77,84,104,100]))return{ext:"mid",mime:"audio/midi"};// https://github.com/threatstack/libmagic/blob/master/magic/Magdir/matroska
if(r([26,69,223,163])){let t=e.subarray(4,4100),r=t.findIndex((t,e,r)=>66===r[e]&&130===r[e+1]);if(-1!==r){let e=r+3,n=r=>[...r].every((r,n)=>t[e+n]===r.charCodeAt(0));if(n("matroska"))return{ext:"mkv",mime:"video/x-matroska"};if(n("webm"))return{ext:"webm",mime:"video/webm"}}}if(r([0,0,0,20,102,116,121,112,113,116,32,32])||r([102,114,101,101],{offset:4})||// Type: `free`
r([102,116,121,112,113,116,32,32],{offset:4})||r([109,100,97,116],{offset:4})||// MJPEG
r([109,111,111,118],{offset:4})||// Type: `moov`
r([119,105,100,101],{offset:4}))return{ext:"mov",mime:"video/quicktime"};// RIFF file format which might be AVI, WAV, QCP, etc
if(r([82,73,70,70])){if(r([65,86,73],{offset:8}))return{ext:"avi",mime:"video/vnd.avi"};if(r([87,65,86,69],{offset:8}))return{ext:"wav",mime:"audio/vnd.wave"};// QLCM, QCP file
if(r([81,76,67,77],{offset:8}))return{ext:"qcp",mime:"audio/qcelp"}}// ASF_Header_Object first 80 bytes
if(r([48,38,178,117,142,102,207,17,166,217])){// Search for header should be in first 1KB of file.
let t=30;do{let n=readUInt64LE(e,t+16);if(r([145,7,220,183,183,169,207,17,142,230,0,192,12,32,83,101],{offset:t})){// Sync on Stream-Properties-Object (B7DC0791-A9B7-11CF-8EE6-00C00C205365)
if(r([64,158,105,248,77,91,207,17,168,253,0,128,95,92,68,43],{offset:t+24}))return{ext:"wma",mime:"audio/x-ms-wma"};if(r([192,239,25,188,77,91,207,17,168,253,0,128,95,92,68,43],{offset:t+24}))return{ext:"wmv",mime:"video/x-ms-asf"};break}t+=n}while(t+24<=e.length)// Default to ASF generic extension
return{ext:"asf",mime:"application/vnd.ms-asf"}}if(r([0,0,1,186])||r([0,0,1,179]))return{ext:"mpg",mime:"video/mpeg"};if(r([102,116,121,112,51,103],{offset:4}))return{ext:"3gp",mime:"video/3gpp"};// Check for MPEG header at different starting offsets
for(let t=0;t<2&&t<e.length-16;t++){if(r([73,68,51],{offset:t})||// ID3 header
r([255,226],{offset:t,mask:[255,226]})// MPEG 1 or 2 Layer 3 header
)return{ext:"mp3",mime:"audio/mpeg"};if(r([255,228],{offset:t,mask:[255,228]})// MPEG 1 or 2 Layer 2 header
||r([255,248],{offset:t,mask:[255,252]})// MPEG 2 layer 0 using ADTS
)return{ext:"mp2",mime:"audio/mpeg"};if(r([255,240],{offset:t,mask:[255,252]})// MPEG 4 layer 0 using ADTS
)return{ext:"mp4",mime:"audio/mpeg"}}if(r([102,116,121,112,77,52,65],{offset:4}))return{ext:"m4a",mime:"audio/mp4"// RFC 4337
};// Needs to be before `ogg` check
if(r([79,112,117,115,72,101,97,100],{offset:28}))return{ext:"opus",mime:"audio/opus"};// If 'OggS' in first  bytes, then OGG container
if(r([79,103,103,83]))return(// This is a OGG container
// If ' theora' in header.
r([128,116,104,101,111,114,97],{offset:28})?{ext:"ogv",mime:"video/ogg"}:r([1,118,105,100,101,111,0],{offset:28})?{ext:"ogm",mime:"video/ogg"}:r([127,70,76,65,67],{offset:28})?{ext:"oga",mime:"audio/ogg"}:r([83,112,101,101,120,32,32],{offset:28})?{ext:"spx",mime:"audio/ogg"}:r([1,118,111,114,98,105,115],{offset:28})?{ext:"ogg",mime:"audio/ogg"}:{ext:"ogx",mime:"application/ogg"});if(r([102,76,97,67]))return{ext:"flac",mime:"audio/x-flac"};if(r([77,65,67,32]))return{ext:"ape",mime:"audio/ape"};if(r([119,118,112,107]))return{ext:"wv",mime:"audio/wavpack"};if(r([35,33,65,77,82,10]))return{ext:"amr",mime:"audio/amr"};if(r([37,80,68,70]))return{ext:"pdf",mime:"application/pdf"};if(r([77,90]))return{ext:"exe",mime:"application/x-msdownload"};if((67===e[0]||70===e[0])&&r([87,83],{offset:1}))return{ext:"swf",mime:"application/x-shockwave-flash"};if(r([123,92,114,116,102]))return{ext:"rtf",mime:"application/rtf"};if(r([0,97,115,109]))return{ext:"wasm",mime:"application/wasm"};if(r([119,79,70,70])&&(r([0,1,0,0],{offset:4})||r([79,84,84,79],{offset:4})))return{ext:"woff",mime:"font/woff"};if(r([119,79,70,50])&&(r([0,1,0,0],{offset:4})||r([79,84,84,79],{offset:4})))return{ext:"woff2",mime:"font/woff2"};if(r([76,80],{offset:34})&&(r([0,0,1],{offset:8})||r([1,0,2],{offset:8})||r([2,0,2],{offset:8})))return{ext:"eot",mime:"application/vnd.ms-fontobject"};if(r([0,1,0,0,0]))return{ext:"ttf",mime:"font/ttf"};if(r([79,84,84,79,0]))return{ext:"otf",mime:"font/otf"};if(r([0,0,1,0]))return{ext:"ico",mime:"image/x-icon"};if(r([0,0,2,0]))return{ext:"cur",mime:"image/x-icon"};if(r([70,76,86,1]))return{ext:"flv",mime:"video/x-flv"};if(r([37,33]))return{ext:"ps",mime:"application/postscript"};if(r([253,55,122,88,90,0]))return{ext:"xz",mime:"application/x-xz"};if(r([83,81,76,105]))return{ext:"sqlite",mime:"application/x-sqlite3"};if(r([78,69,83,26]))return{ext:"nes",mime:"application/x-nintendo-nes-rom"};if(r([67,114,50,52]))return{ext:"crx",mime:"application/x-google-chrome-extension"};if(r([77,83,67,70])||r([73,83,99,40]))return{ext:"cab",mime:"application/vnd.ms-cab-compressed"};// Needs to be before `ar` check
if(r([33,60,97,114,99,104,62,10,100,101,98,105,97,110,45,98,105,110,97,114,121]))return{ext:"deb",mime:"application/x-deb"};if(r([33,60,97,114,99,104,62]))return{ext:"ar",mime:"application/x-unix-archive"};if(r([237,171,238,219]))return{ext:"rpm",mime:"application/x-rpm"};if(r([31,160])||r([31,157]))return{ext:"Z",mime:"application/x-compress"};if(r([76,90,73,80]))return{ext:"lz",mime:"application/x-lzip"};if(r([208,207,17,224,161,177,26,225]))return{ext:"msi",mime:"application/x-msi"};if(r([6,14,43,52,2,5,1,1,13,1,2,1,1,2]))return{ext:"mxf",mime:"application/mxf"};if(r([71],{offset:4})&&(r([71],{offset:192})||r([71],{offset:196})))return{ext:"mts",mime:"video/mp2t"};if(r([66,76,69,78,68,69,82]))return{ext:"blend",mime:"application/x-blender"};if(r([66,80,71,251]))return{ext:"bpg",mime:"image/bpg"};if(r([0,0,0,12,106,80,32,32,13,10,135,10])){// JPEG-2000 family
if(r([106,112,50,32],{offset:20}))return{ext:"jp2",mime:"image/jp2"};if(r([106,112,120,32],{offset:20}))return{ext:"jpx",mime:"image/jpx"};if(r([106,112,109,32],{offset:20}))return{ext:"jpm",mime:"image/jpm"};if(r([109,106,112,50],{offset:20}))return{ext:"mj2",mime:"image/mj2"}}if(r([70,79,82,77]))return{ext:"aif",mime:"audio/aiff"};if(n("<?xml "))return{ext:"xml",mime:"application/xml"};if(r([66,79,79,75,77,79,66,73],{offset:60}))return{ext:"mobi",mime:"application/x-mobipocket-ebook"};// File Type Box (https://en.wikipedia.org/wiki/ISO_base_media_file_format)
if(r([102,116,121,112],{offset:4})){if(r([109,105,102,49],{offset:8}))return{ext:"heic",mime:"image/heif"};if(r([109,115,102,49],{offset:8}))return{ext:"heic",mime:"image/heif-sequence"};if(r([104,101,105,99],{offset:8})||r([104,101,105,120],{offset:8}))return{ext:"heic",mime:"image/heic"};if(r([104,101,118,99],{offset:8})||r([104,101,118,120],{offset:8}))return{ext:"heic",mime:"image/heic-sequence"}}return r([171,75,84,88,32,49,49,187,13,10,26,10])?{ext:"ktx",mime:"image/ktx"}:r([68,73,67,77],{offset:128})?{ext:"dcm",mime:"application/dicom"}:r([77,80,43])||r([77,80,67,75])?{ext:"mpc",mime:"audio/x-musepack"}:r([66,69,71,73,78,58])?{ext:"ics",mime:"text/calendar"}:r([103,108,84,70,2,0,0,0])?{ext:"glb",mime:"model/gltf-binary"}:r([212,195,178,161])||r([161,178,195,212])?{ext:"pcap",mime:"application/vnd.tcpdump.pcap"}:null};module.exports=fileType,// TODO: Remove this for the next major release
module.exports.default=fileType,Object.defineProperty(fileType,"minimumBytes",{value:4100}),module.exports.stream=readableStream=>new Promise((resolve,reject)=>{// Using `eval` to work around issues when bundling with Webpack
    let stream=eval("require")("stream");// eslint-disable-line no-eval
    readableStream.once("readable",()=>{let t=new stream.PassThrough,e=readableStream.read(module.exports.minimumBytes)||readableStream.read();try{t.fileType=fileType(e)}catch(t){reject(t)}readableStream.unshift(e),stream.pipeline?resolve(stream.pipeline(readableStream,t,()=>{})):resolve(readableStream.pipe(t))})})}),parcelRequire.register("5bHNC",function(t,e){var r=parcelRequire("f3biE"),n=parcelRequire("8T6kJ");// var isBlob = require('is-blob')
t.exports=function t(e){//zero-length or undefined-like
if(!e)return null;//array buffer
if(e instanceof ArrayBuffer)return e;//try to decode data-uri
if("string"==typeof e)return r(e);// File & Blob
// if (isBlob(src) || (src instanceof global.File)) {
// FIXME: we cannot use it here bc FileReader is async
// }
//array buffer view: TypedArray, DataView, Buffer etc
if(ArrayBuffer.isView(e))return(// if byteOffset is not 0, return sub-reference (slice is the only way)
e.byteOffset?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):e.buffer);//buffer/data nested: NDArray, ImageData etc.
//FIXME: NDArrays with custom data type may be invalid for this procedure
if(e.buffer||e.data||e._data){var i=t(e.buffer||e.data||e._data);return i}// detect if flat
if(Array.isArray(e)){for(var o=0;o<e.length;o++)if(null!=e[o].length){e=n(e);break}}//array-like or unknown
//consider Uint8Array knows how to treat the input
var i=new Uint8Array(e);return i.length?i.buffer:null}}),parcelRequire.register("f3biE",function(t,e){var r=parcelRequire("9VBWm"),n=parcelRequire("3Lwjj");function i(t){for(var e=new Uint8Array(t.length),r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e.buffer}function o(t){// split the URI up into the "metadata" and the "data" portions
var e=// strip newlines
(t=t.replace(/\r?\n/g,"")).indexOf(",");if(-1===e||e<=4)throw TypeError("malformed data-URI");for(var n=t.substring(5,e).split(";"),o=!1,a="US-ASCII",s=0;s<n.length;s++)"base64"==n[s]?o=!0:0==n[s].indexOf("charset=")&&(a=n[s].substring(8));// remove the "data:" scheme and parse the metadata
var f=unescape(t.substring(e+1));o&&(f=r(f));var h=i(f);return h.type=n[0]||"text/plain",h.charset=a,h}t.exports=function(t){if("string"!=typeof t)throw Error("Argument should be a string");return(//valid data uri
/^data\:/i.test(t)?o(t):(n(t)&&(t=r(t)),i(t)))}}),parcelRequire.register("9VBWm",function(t,e){t.exports=function(t){return atob(t)}}),parcelRequire.register("3Lwjj",function(t,e){!function(r){function n(t,e){if(t instanceof Boolean||"boolean"==typeof t||(e instanceof Object||(e={}),e.hasOwnProperty("allowBlank")&&!e.allowBlank&&""===t))return!1;var r="(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?";return e.mime&&(r="(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)?"+r),!1===e.paddingRequired&&(r="(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?"),RegExp("^"+r+"$","gi").test(t)}t.exports&&(e=t.exports=n),e.isBase64=n}(0)}),parcelRequire.register("8T6kJ",function(t,e){/*eslint new-cap:0*/var r=parcelRequire("fTiCY");function n(t,e,n){if(!t)throw TypeError("must specify data as first parameter");if(n=0|+(n||0),Array.isArray(t)&&t[0]&&"number"==typeof t[0][0]){var i,o,a,s,f=t[0].length,h=t.length*f;// no output specified, create a new typed array
e&&"string"!=typeof e||(e=new(r(e||"float32"))(h+n));var u=e.length-n;if(h!==u)throw Error("source length "+h+" ("+f+"x"+t.length+") does not match destination length "+u);for(i=0,a=n;i<t.length;i++)for(o=0;o<f;o++)e[a++]=null===t[i][o]?NaN:t[i][o]}else if(e&&"string"!=typeof e)e.set(t,n);else{// no output, create a new one
var c=r(e||"float32");// handle arrays separately due to possible nulls
if(Array.isArray(t)||"array"===e)for(i=0,e=new c(t.length+n),a=n,s=e.length;a<s;a++,i++)e[a]=null===t[i]?NaN:t[i];else 0===n?e=new c(t):(e=new c(t.length+n)).set(t,n)}return e}t.exports=n}),parcelRequire.register("fTiCY",function(t,e){t.exports=function(t){switch(t){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}}}),parcelRequire.register("jiTGB",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("gK32r").PNG,i=parcelRequire("5bHNC");t.exports=function(t,e){var o=n.sync.read(r.from(t));return{data:new Uint8Array(i(o.data)),width:0|o.width,height:0|o.height}}}),parcelRequire.register("gK32r",function(t,e){$parcel$export(t.exports,"PNG",function(){return r},function(t){return r=t});var r,n=parcelRequire("igx3v").Buffer,i=parcelRequire("4Dxou"),o=parcelRequire("jcBbL"),a=parcelRequire("bBGGK"),s=parcelRequire("houtW"),f=parcelRequire("4MrH6"),h=parcelRequire("6W96u"),u=r=function(t){a.call(this),t=t||{},// coerce pixel dimensions to integers (also coerces undefined -> 0):
this.width=0|t.width,this.height=0|t.height,this.data=this.width>0&&this.height>0?new n(4*this.width*this.height):null,t.fill&&this.data&&this.data.fill(0),this.gamma=0,this.readable=this.writable=!0,this._parser=new s(t),this._parser.on("error",this.emit.bind(this,"error")),this._parser.on("close",this._handleClose.bind(this)),this._parser.on("metadata",this._metadata.bind(this)),this._parser.on("gamma",this._gamma.bind(this)),this._parser.on("parsed",(function(t){this.data=t,this.emit("parsed",t)}).bind(this)),this._packer=new f(t),this._packer.on("data",this.emit.bind(this,"data")),this._packer.on("end",this.emit.bind(this,"end")),this._parser.on("close",this._handleClose.bind(this)),this._packer.on("error",this.emit.bind(this,"error"))};o.inherits(u,a),u.sync=h,u.prototype.pack=function(){return this.data&&this.data.length?i.nextTick((function(){this._packer.pack(this.data,this.width,this.height,this.gamma)}).bind(this)):this.emit("error","No data provided"),this},u.prototype.parse=function(t,e){if(e){var r,n;r=(function(t){this.removeListener("error",n),this.data=t,e(null,this)}).bind(this),n=(function(t){this.removeListener("parsed",r),e(t,null)}).bind(this),this.once("parsed",r),this.once("error",n)}return this.end(t),this},u.prototype.write=function(t){return this._parser.write(t),!0},u.prototype.end=function(t){this._parser.end(t)},u.prototype._metadata=function(t){this.width=t.width,this.height=t.height,this.emit("metadata",t)},u.prototype._gamma=function(t){this.gamma=t},u.prototype._handleClose=function(){this._parser.writable||this._packer.readable||this.emit("close")},u.bitblt=function(t,e,r,n,i,o,a,s){/* eslint-enable no-param-reassign */if(n|=0,i|=0,o|=0,a|=0,s|=0,// coerce pixel dimensions to integers (also coerces undefined -> 0):
/* eslint-disable no-param-reassign */(r|=0)>t.width||n>t.height||r+i>t.width||n+o>t.height)throw Error("bitblt reading outside image");if(a>e.width||s>e.height||a+i>e.width||s+o>e.height)throw Error("bitblt writing outside image");for(var f=0;f<o;f++)t.data.copy(e.data,(s+f)*e.width+a<<2,(n+f)*t.width+r<<2,(n+f)*t.width+r+i<<2)},u.prototype.bitblt=function(t,e,r,n,i,o,a){return u.bitblt(this,t,e,r,n,i,o,a),this},u.adjustGamma=function(t){if(t.gamma){for(var e=0;e<t.height;e++)for(var r=0;r<t.width;r++)for(var n=t.width*e+r<<2,i=0;i<3;i++){var o=t.data[n+i]/255;o=Math.pow(o,1/2.2/t.gamma),t.data[n+i]=Math.round(255*o)}t.gamma=0}},u.prototype.adjustGamma=function(){u.adjustGamma(this)}}),parcelRequire.register("jcBbL",function(t,e){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var r=parcelRequire("4Dxou"),n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},i=/%[sdj%]/g;t.exports.format=function(t){if(!x(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(s(arguments[r]));return e.join(" ")}for(var r=1,n=arguments,o=n.length,a=String(t).replace(i,function(t){if("%%"===t)return"%";if(r>=o)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}}),f=n[r];r<o;f=n[++r])v(f)||!I(f)?a+=" "+f:a+=" "+s(f);return a},// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
t.exports.deprecate=function(e,n){if(void 0!==r&&!0===r.noDeprecation)return e;// Allow for deprecating things in the process of starting up.
if(void 0===r)return function(){return t.exports.deprecate(e,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(r.throwDeprecation)throw Error(n);r.traceDeprecation?console.trace(n):console.error(n),i=!0}return e.apply(this,arguments)}};var o={},a=/^$/;/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 *//* legacy: obj, showHidden, depth, colors*/function s(e,r){// default options
var n={seen:[],stylize:h};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),b(r)?n.showHidden=r:r&&t.exports._extend(n,r),k(n.showHidden)&&(n.showHidden=!1),k(n.depth)&&(n.depth=2),k(n.colors)&&(n.colors=!1),k(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=f),c(n,e,n.depth)}function f(t,e){var r=s.styles[e];return r?"\x1b["+s.colors[r][0]+"m"+t+"\x1b["+s.colors[r][1]+"m":t}function h(t,e){return t}function u(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}function c(e,r,n){// Provide a hook for user-specified inspect functions.
// Check that value is an object with an inspect function on it
if(e.customInspect&&r&&T(r.inspect)&&// Filter out the util module, it's inspect function is special
r.inspect!==t.exports.inspect&&// Also filter out any prototype objects using the circular check.
!(r.constructor&&r.constructor.prototype===r)){var i,o=r.inspect(n,e);return x(o)||(o=c(e,o,n)),o}// Primitive types cannot have properties
var a=l(e,r);if(a)return a;// Look up the keys of the object.
var s=Object.keys(r),f=u(s);// IE doesn't make error fields non-enumerable
// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
if(e.showHidden&&(s=Object.getOwnPropertyNames(r)),S(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return p(r);// Some type of object without properties can be shortcutted.
if(0===s.length){if(T(r)){var h=r.name?": "+r.name:"";return e.stylize("[Function"+h+"]","special")}if(A(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(O(r))return e.stylize(Date.prototype.toString.call(r),"date");if(S(r))return p(r)}var b="",v=!1,y=["{","}"];return(m(r)&&(v=!0,y=["[","]"]),T(r)&&(b=" [Function"+(r.name?": "+r.name:"")+"]"),A(r)&&(b=" "+RegExp.prototype.toString.call(r)),O(r)&&(b=" "+Date.prototype.toUTCString.call(r)),S(r)&&(b=" "+p(r)),0!==s.length||v&&0!=r.length)?n<0?A(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),i=v?d(e,r,n,f,s):s.map(function(t){return g(e,r,n,f,t,v)}),e.seen.pop(),_(i,b,y)):y[0]+b+y[1]}function l(t,e){if(k(e))return t.stylize("undefined","undefined");if(x(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return w(e)?t.stylize(""+e,"number"):b(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}function p(t){return"["+Error.prototype.toString.call(t)+"]"}function d(t,e,r,n,i){for(var o=[],a=0,s=e.length;a<s;++a)B(e,String(a))?o.push(g(t,e,r,n,String(a),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(g(t,e,r,n,i,!0))}),o}function g(t,e,r,n,i,o){var a,s,f;if((f=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?s=f.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):f.set&&(s=t.stylize("[Setter]","special")),B(n,i)||(a="["+i+"]"),!s&&(0>t.seen.indexOf(f.value)?(s=v(r)?c(t,f.value,null):c(t,f.value,r-1)).indexOf("\n")>-1&&(s=o?s.split("\n").map(function(t){return"  "+t}).join("\n").slice(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n")):s=t.stylize("[Circular]","special")),k(a)){if(o&&i.match(/^\d+$/))return s;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.slice(1,-1),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function _(t,e,r){var n=0;return t.reduce(function(t,e){return n++,e.indexOf("\n")>=0&&n++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}function m(t){return Array.isArray(t)}function b(t){return"boolean"==typeof t}function v(t){return null===t}function y(t){return null==t}function w(t){return"number"==typeof t}function x(t){return"string"==typeof t}function E(t){return"symbol"==typeof t}function k(t){return void 0===t}function A(t){return I(t)&&"[object RegExp]"===P(t)}function I(t){return"object"==typeof t&&null!==t}function O(t){return I(t)&&"[object Date]"===P(t)}function S(t){return I(t)&&("[object Error]"===P(t)||t instanceof Error)}function T(t){return"function"==typeof t}function L(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||// ES6 symbol
void 0===t}function P(t){return Object.prototype.toString.call(t)}function j(t){return t<10?"0"+t.toString(10):t.toString(10)}t.exports.debuglog=function(e){if(!o[e=e.toUpperCase()]){if(a.test(e)){var n=r.pid;o[e]=function(){var r=t.exports.format.apply(t.exports,arguments);console.error("%s %d: %s",e,n,r)}}else o[e]=function(){}}return o[e]},t.exports.inspect=s,// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},// Don't use 'blue' not visible on cmd.exe
s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",// "name": intentionally not styling
regexp:"red"},// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
t.exports.types=parcelRequire("9VPyI"),t.exports.isArray=m,t.exports.isBoolean=b,t.exports.isNull=v,t.exports.isNullOrUndefined=y,t.exports.isNumber=w,t.exports.isString=x,t.exports.isSymbol=E,t.exports.isUndefined=k,t.exports.isRegExp=A,t.exports.types.isRegExp=A,t.exports.isObject=I,t.exports.isDate=O,t.exports.types.isDate=O,t.exports.isError=S,t.exports.types.isNativeError=S,t.exports.isFunction=T,t.exports.isPrimitive=L,t.exports.isBuffer=parcelRequire("cVJzD");var R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];// 26 Feb 16:19:34
function U(){var t=new Date,e=[j(t.getHours()),j(t.getMinutes()),j(t.getSeconds())].join(":");return[t.getDate(),R[t.getMonth()],e].join(" ")}function B(t,e){return Object.prototype.hasOwnProperty.call(t,e)}// log is just a thin wrapper to console.log that prepends a timestamp
t.exports.log=function(){console.log("%s - %s",U(),t.exports.format.apply(t.exports,arguments))},/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */t.exports.inherits=parcelRequire("2q8Xi"),t.exports._extend=function(t,e){// Don't do anything if add isn't an object
if(!e||!I(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t};var D="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function C(t,e){// `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
// Because `null` is a special error value in callbacks which means "no error
// occurred", we error-wrap so the callback consumer can distinguish between
// "the promise rejected with null" or "the promise fulfilled with undefined".
if(!t){var r=Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}function N(t){if("function"!=typeof t)throw TypeError('The "original" argument must be of type Function');// We DO NOT return the promise as it gives the user a false sense that
// the promise is actually somehow related to the callback's execution
// and that the callback throwing will reject the promise.
function e(){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n]);var i=e.pop();if("function"!=typeof i)throw TypeError("The last argument must be of type Function");var o=this,a=function(){return i.apply(o,arguments)};// In true node style we process the callback on `nextTick` with all the
// implications (stack, `uncaughtException`, `async_hooks`)
t.apply(this,e).then(function(t){r.nextTick(a.bind(null,null,t))},function(t){r.nextTick(C.bind(null,t,a))})}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),Object.defineProperties(e,n(t)),e}t.exports.promisify=function(t){if("function"!=typeof t)throw TypeError('The "original" argument must be of type Function');if(D&&t[D]){var e=t[D];if("function"!=typeof e)throw TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise(function(t,n){e=t,r=n}),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push(function(t,n){t?r(t):e(n)});try{t.apply(this,i)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),D&&Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},t.exports.promisify.custom=D,t.exports.callbackify=N}),parcelRequire.register("9VPyI",function(t,e){var r=parcelRequire("8QMNG"),n=parcelRequire("bpWsD"),i=parcelRequire("1glCv"),o=parcelRequire("fWXPE");function a(t){return t.call.bind(t)}var s="undefined"!=typeof BigInt,f="undefined"!=typeof Symbol,h=a(Object.prototype.toString),u=a(Number.prototype.valueOf),c=a(String.prototype.valueOf),l=a(Boolean.prototype.valueOf);if(s)var p=a(BigInt.prototype.valueOf);if(f)var d=a(Symbol.prototype.valueOf);function g(t,e){if("object"!=typeof t)return!1;try{return e(t),!0}catch(t){return!1}}// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function _(t){return"undefined"!=typeof Promise&&t instanceof Promise||null!==t&&"object"==typeof t&&"function"==typeof t.then&&"function"==typeof t.catch}function m(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):o(t)||z(t)}function b(t){return"Uint8Array"===i(t)}function v(t){return"Uint8ClampedArray"===i(t)}function y(t){return"Uint16Array"===i(t)}function w(t){return"Uint32Array"===i(t)}function x(t){return"Int8Array"===i(t)}function E(t){return"Int16Array"===i(t)}function k(t){return"Int32Array"===i(t)}function A(t){return"Float32Array"===i(t)}function I(t){return"Float64Array"===i(t)}function O(t){return"BigInt64Array"===i(t)}function S(t){return"BigUint64Array"===i(t)}function T(t){return"[object Map]"===h(t)}function L(t){return"undefined"!=typeof Map&&(T.working?T(t):t instanceof Map)}function P(t){return"[object Set]"===h(t)}function j(t){return"undefined"!=typeof Set&&(P.working?P(t):t instanceof Set)}function R(t){return"[object WeakMap]"===h(t)}function U(t){return"undefined"!=typeof WeakMap&&(R.working?R(t):t instanceof WeakMap)}function B(t){return"[object WeakSet]"===h(t)}function D(t){return B(t)}function C(t){return"[object ArrayBuffer]"===h(t)}function N(t){return"undefined"!=typeof ArrayBuffer&&(C.working?C(t):t instanceof ArrayBuffer)}function F(t){return"[object DataView]"===h(t)}function z(t){return"undefined"!=typeof DataView&&(F.working?F(t):t instanceof DataView)}t.exports.isArgumentsObject=r,t.exports.isGeneratorFunction=n,t.exports.isTypedArray=o,t.exports.isPromise=_,t.exports.isArrayBufferView=m,t.exports.isUint8Array=b,t.exports.isUint8ClampedArray=v,t.exports.isUint16Array=y,t.exports.isUint32Array=w,t.exports.isInt8Array=x,t.exports.isInt16Array=E,t.exports.isInt32Array=k,t.exports.isFloat32Array=A,t.exports.isFloat64Array=I,t.exports.isBigInt64Array=O,t.exports.isBigUint64Array=S,T.working="undefined"!=typeof Map&&T(new Map),t.exports.isMap=L,P.working="undefined"!=typeof Set&&P(new Set),t.exports.isSet=j,R.working="undefined"!=typeof WeakMap&&R(new WeakMap),t.exports.isWeakMap=U,B.working="undefined"!=typeof WeakSet&&B(new WeakSet),t.exports.isWeakSet=D,C.working="undefined"!=typeof ArrayBuffer&&C(new ArrayBuffer),t.exports.isArrayBuffer=N,F.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&F(new DataView(new ArrayBuffer(1),0,1)),t.exports.isDataView=z;// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var M="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function Z(t){return"[object SharedArrayBuffer]"===h(t)}function G(t){return void 0!==M&&(void 0===Z.working&&(Z.working=Z(new M)),Z.working?Z(t):t instanceof M)}function H(t){return"[object AsyncFunction]"===h(t)}function Y(t){return"[object Map Iterator]"===h(t)}function q(t){return"[object Set Iterator]"===h(t)}function W(t){return"[object Generator]"===h(t)}function V(t){return"[object WebAssembly.Module]"===h(t)}function X(t){return g(t,u)}function J(t){return g(t,c)}function K(t){return g(t,l)}function $(t){return s&&g(t,p)}function Q(t){return f&&g(t,d)}function tt(t){return X(t)||J(t)||K(t)||$(t)||Q(t)}function te(t){return"undefined"!=typeof Uint8Array&&(N(t)||G(t))}t.exports.isSharedArrayBuffer=G,t.exports.isAsyncFunction=H,t.exports.isMapIterator=Y,t.exports.isSetIterator=q,t.exports.isGeneratorObject=W,t.exports.isWebAssemblyCompiledModule=V,t.exports.isNumberObject=X,t.exports.isStringObject=J,t.exports.isBooleanObject=K,t.exports.isBigIntObject=$,t.exports.isSymbolObject=Q,t.exports.isBoxedPrimitive=tt,t.exports.isAnyArrayBuffer=te,["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(e){Object.defineProperty(t.exports,e,{enumerable:!1,value:function(){throw Error(e+" is not supported in userland")}})})}),parcelRequire.register("8QMNG",function(t,e){var r=parcelRequire("5hS9x")(),n=parcelRequire("hzzg1")("Object.prototype.toString"),i=function(t){return(!r||!t||"object"!=typeof t||!(Symbol.toStringTag in t))&&"[object Arguments]"===n(t)},o=function(t){return!!i(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==n(t)&&"[object Function]"===n(t.callee)},a=function(){return i(arguments)}();i.isLegacyArguments=o,t.exports=a?i:o}),parcelRequire.register("5hS9x",function(t,e){var r=parcelRequire("7DgHs");t.exports=function(){return r()&&!!Symbol.toStringTag}}),parcelRequire.register("bpWsD",function(t,e){var r,n=Object.prototype.toString,i=Function.prototype.toString,o=/^\s*(?:function)?\*/,a=parcelRequire("5hS9x")(),s=Object.getPrototypeOf,f=function(){if(!a)return!1;try{return Function("return function*() {}")()}catch(t){}};t.exports=function(t){if("function"!=typeof t)return!1;if(o.test(i.call(t)))return!0;if(!a)return"[object GeneratorFunction]"===n.call(t);if(!s)return!1;if(void 0===r){var e=f();r=!!e&&s(e)}return s(t)===r}}),parcelRequire.register("1glCv",function(t,e){var r=parcelRequire("7vMXn"),n=parcelRequire("80C59"),i=parcelRequire("a7rAf"),o=parcelRequire("hzzg1"),a=parcelRequire("2fUz1"),s=o("Object.prototype.toString"),f=parcelRequire("5hS9x")(),h="undefined"==typeof globalThis?$parcel$global:globalThis,u=n(),c=o("String.prototype.slice"),l=Object.getPrototypeOf,p=o("Array.prototype.indexOf",!0)||function(t,e){for(var r=0;r<t.length;r+=1)if(t[r]===e)return r;return -1},d={__proto__:null};f&&a&&l?r(u,function(t){var e=new h[t];if(Symbol.toStringTag in e){var r=l(e),n=a(r,Symbol.toStringTag);n||(n=a(l(r),Symbol.toStringTag)),d["$"+t]=i(n.get)}}):r(u,function(t){var e=new h[t];d["$"+t]=i(e.slice)});var g=function(t){var e=!1;return r(d,function(r,n){if(!e)try{"$"+r(t)===n&&(e=c(n,1))}catch(t){}}),e},_=function(t){var e=!1;return r(d,function(r,n){if(!e)try{r(t),e=c(n,1)}catch(t){}}),e};t.exports=function(t){if(!t||"object"!=typeof t)return!1;if(!f){var e=c(s(t),8,-1);return p(u,e)>-1?e:"Object"===e&&_(t)}return a?g(t):null}}),parcelRequire.register("7vMXn",function(t,e){var r=parcelRequire("58JNN"),n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,o=function(t,e,r){for(var n=0,o=t.length;n<o;n++)i.call(t,n)&&(null==r?e(t[n],n,t):e.call(r,t[n],n,t))},a=function(t,e,r){for(var n=0,i=t.length;n<i;n++)null==r?e(t.charAt(n),n,t):e.call(r,t.charAt(n),n,t)},s=function(t,e,r){for(var n in t)i.call(t,n)&&(null==r?e(t[n],n,t):e.call(r,t[n],n,t))},f=function(t,e,i){var f;if(!r(e))throw TypeError("iterator must be a function");arguments.length>=3&&(f=i),"[object Array]"===n.call(t)?o(t,e,f):"string"==typeof t?a(t,e,f):s(t,e,f)};t.exports=f}),parcelRequire.register("58JNN",function(t,e){var r,n,i=Function.prototype.toString,o="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof o&&"function"==typeof Object.defineProperty)try{r=Object.defineProperty({},"length",{get:function(){throw n}}),n={},// eslint-disable-next-line no-throw-literal
o(function(){throw 42},null,r)}catch(t){t!==n&&(o=null)}else o=null;var a=/^\s*class\b/,s=function(t){try{var e=i.call(t);return a.test(e)}catch(t){return!1;// not a function
}},f=function(t){try{if(s(t))return!1;return i.call(t),!0}catch(t){return!1}},h=Object.prototype.toString,u="[object Object]",c="[object Function]",l="[object GeneratorFunction]",p="[object HTMLAllCollection]",d="[object HTML document.all class]",g="[object HTMLCollection]",_="function"==typeof Symbol&&!!Symbol.toStringTag,m=!(0 in[,]),b=function(){return!1};if("object"==typeof document){// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
var v=document.all;h.call(v)===h.call(document.all)&&(b=function(t){/* globals document: false */// in IE 6-8, typeof document.all is "object" and it's truthy
if((m||!t)&&(void 0===t||"object"==typeof t))try{var e=h.call(t);return(e===p||e===d||e===g// opera 12.16
||e===u// IE 6-8
)&&null==t("");// eslint-disable-line eqeqeq
}catch(t){}return!1})}t.exports=o?function(t){if(b(t))return!0;if(!t||"function"!=typeof t&&"object"!=typeof t)return!1;try{o(t,null,r)}catch(t){if(t!==n)return!1}return!s(t)&&f(t)}:function(t){if(b(t))return!0;if(!t||"function"!=typeof t&&"object"!=typeof t)return!1;if(_)return f(t);if(s(t))return!1;var e=h.call(t);return!!(e===c||e===l||/^\[object HTML/.test(e))&&f(t)}}),parcelRequire.register("80C59",function(t,e){var r=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],n="undefined"==typeof globalThis?$parcel$global:globalThis;t.exports=function(){for(var t=[],e=0;e<r.length;e++)"function"==typeof n[r[e]]&&(t[t.length]=r[e]);return t}}),parcelRequire.register("2fUz1",function(t,e){var r=parcelRequire("1ZpYW")("%Object.getOwnPropertyDescriptor%",!0);if(r)try{r([],"length")}catch(t){// IE 8 has a broken gOPD
r=null}t.exports=r}),parcelRequire.register("fWXPE",function(t,e){var r=parcelRequire("1glCv");t.exports=function(t){return!!r(t)}}),parcelRequire.register("cVJzD",function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}}),parcelRequire.register("houtW",function(t,e){var r=parcelRequire("jcBbL"),n=parcelRequire("dWb30"),i=parcelRequire("eIMUU"),o=parcelRequire("gRfVr"),a=parcelRequire("98Iby"),s=parcelRequire("1TRUf"),f=parcelRequire("6FmiX"),h=t.exports=function(t){i.call(this),this._parser=new a(t,{read:this.read.bind(this),error:this._handleError.bind(this),metadata:this._handleMetaData.bind(this),gamma:this.emit.bind(this,"gamma"),palette:this._handlePalette.bind(this),transColor:this._handleTransColor.bind(this),finished:this._finished.bind(this),inflateData:this._inflateData.bind(this),simpleTransparency:this._simpleTransparency.bind(this),headersFinished:this._headersFinished.bind(this)}),this._options=t,this.writable=!0,this._parser.start()};r.inherits(h,i),h.prototype._handleError=function(t){this.emit("error",t),this.writable=!1,this.destroy(),this._inflate&&this._inflate.destroy&&this._inflate.destroy(),this._filter&&(this._filter.destroy(),// For backward compatibility with Node 7 and below.
// Suppress errors due to _inflate calling write() even after
// it's destroy()'ed.
this._filter.on("error",function(){})),this.errord=!0},h.prototype._inflateData=function(t){if(!this._inflate){if(this._bitmapInfo.interlace)this._inflate=n.createInflate(),this._inflate.on("error",this.emit.bind(this,"error")),this._filter.on("complete",this._complete.bind(this)),this._inflate.pipe(this._filter);else{var e=((this._bitmapInfo.width*this._bitmapInfo.bpp*this._bitmapInfo.depth+7>>3)+1)*this._bitmapInfo.height,r=Math.max(e,n.Z_MIN_CHUNK);this._inflate=n.createInflate({chunkSize:r});var i=e,o=this.emit.bind(this,"error");this._inflate.on("error",function(t){i&&o(t)}),this._filter.on("complete",this._complete.bind(this));var a=this._filter.write.bind(this._filter);this._inflate.on("data",function(t){i&&(t.length>i&&(t=t.slice(0,i)),i-=t.length,a(t))}),this._inflate.on("end",this._filter.end.bind(this._filter))}}this._inflate.write(t)},h.prototype._handleMetaData=function(t){this._metaData=t,this._bitmapInfo=Object.create(t),this._filter=new o(this._bitmapInfo)},h.prototype._handleTransColor=function(t){this._bitmapInfo.transColor=t},h.prototype._handlePalette=function(t){this._bitmapInfo.palette=t},h.prototype._simpleTransparency=function(){this._metaData.alpha=!0},h.prototype._headersFinished=function(){// Up until this point, we don't know if we have a tRNS chunk (alpha)
// so we can't emit metadata any earlier
this.emit("metadata",this._metaData)},h.prototype._finished=function(){this.errord||(this._inflate?this._inflate.end():this.emit("error","No Inflate block"),this.destroySoon())},h.prototype._complete=function(t){if(!this.errord){try{var e=s.dataToBitMap(t,this._bitmapInfo),r=f(e,this._bitmapInfo);e=null}catch(t){this._handleError(t);return}this.emit("parsed",r)}}}),parcelRequire.register("dWb30",function(t,e){var r=parcelRequire("4Dxou"),n=parcelRequire("igx3v"),i=n.Buffer,o=parcelRequire("bBGGK").Transform,a=parcelRequire("2oUe4"),s=parcelRequire("jcBbL"),f=parcelRequire("hEPF9").ok,n=parcelRequire("igx3v"),h=n.kMaxLength,u="Cannot create final Buffer. It would be larger than 0x"+h.toString(16)+" bytes";// zlib doesn't provide these, so kludge them in following the same
// const naming scheme zlib uses.
a.Z_MIN_WINDOWBITS=8,a.Z_MAX_WINDOWBITS=15,a.Z_DEFAULT_WINDOWBITS=15,// fewer than 64 bytes per chunk is stupid.
// technically it could work with as few as 8, but even 64 bytes
// is absurdly low.  Usually a MB or more is best.
a.Z_MIN_CHUNK=64,a.Z_MAX_CHUNK=1/0,a.Z_DEFAULT_CHUNK=16384,a.Z_MIN_MEMLEVEL=1,a.Z_MAX_MEMLEVEL=9,a.Z_DEFAULT_MEMLEVEL=8,a.Z_MIN_LEVEL=-1,a.Z_MAX_LEVEL=9,a.Z_DEFAULT_LEVEL=a.Z_DEFAULT_COMPRESSION;for(var c=Object.keys(a),l=0;l<c.length;l++){var p=c[l];p.match(/^Z/)&&Object.defineProperty(t.exports,p,{enumerable:!0,value:a[p],writable:!1})}for(var d={Z_OK:a.Z_OK,Z_STREAM_END:a.Z_STREAM_END,Z_NEED_DICT:a.Z_NEED_DICT,Z_ERRNO:a.Z_ERRNO,Z_STREAM_ERROR:a.Z_STREAM_ERROR,Z_DATA_ERROR:a.Z_DATA_ERROR,Z_MEM_ERROR:a.Z_MEM_ERROR,Z_BUF_ERROR:a.Z_BUF_ERROR,Z_VERSION_ERROR:a.Z_VERSION_ERROR},g=Object.keys(d),_=0;_<g.length;_++){var m=g[_];d[d[m]]=m}function b(t,e,r){var n=[],o=0;function a(){for(var e;null!==(e=t.read());)n.push(e),o+=e.length;t.once("readable",a)}function s(e){t.removeListener("end",f),t.removeListener("readable",a),r(e)}function f(){var e,a=null;o>=h?a=RangeError(u):e=i.concat(n,o),n=[],t.close(),r(a,e)}t.on("error",s),t.on("end",f),t.end(e),a()}function v(t,e){if("string"==typeof e&&(e=i.from(e)),!i.isBuffer(e))throw TypeError("Not a string or buffer");var r=t._finishFlushFlag;return t._processChunk(e,r)}// generic zlib
// minimal 2-byte header
function y(t){if(!(this instanceof y))return new y(t);S.call(this,t,a.DEFLATE)}function w(t){if(!(this instanceof w))return new w(t);S.call(this,t,a.INFLATE)}// gzip - bigger header, same deflate compression
function x(t){if(!(this instanceof x))return new x(t);S.call(this,t,a.GZIP)}function E(t){if(!(this instanceof E))return new E(t);S.call(this,t,a.GUNZIP)}// raw - no header
function k(t){if(!(this instanceof k))return new k(t);S.call(this,t,a.DEFLATERAW)}function A(t){if(!(this instanceof A))return new A(t);S.call(this,t,a.INFLATERAW)}// auto-detect header.
function I(t){if(!(this instanceof I))return new I(t);S.call(this,t,a.UNZIP)}function O(t){return t===a.Z_NO_FLUSH||t===a.Z_PARTIAL_FLUSH||t===a.Z_SYNC_FLUSH||t===a.Z_FULL_FLUSH||t===a.Z_FINISH||t===a.Z_BLOCK}// the Zlib class they all inherit from
// This thing manages the queue of requests, and returns
// true or false if there is anything in the queue when
// you call the .write() method.
function S(e,r){var n=this;if(this._opts=e=e||{},this._chunkSize=e.chunkSize||t.exports.Z_DEFAULT_CHUNK,o.call(this,e),e.flush&&!O(e.flush))throw Error("Invalid flush flag: "+e.flush);if(e.finishFlush&&!O(e.finishFlush))throw Error("Invalid flush flag: "+e.finishFlush);if(this._flushFlag=e.flush||a.Z_NO_FLUSH,this._finishFlushFlag=void 0!==e.finishFlush?e.finishFlush:a.Z_FINISH,e.chunkSize&&(e.chunkSize<t.exports.Z_MIN_CHUNK||e.chunkSize>t.exports.Z_MAX_CHUNK))throw Error("Invalid chunk size: "+e.chunkSize);if(e.windowBits&&(e.windowBits<t.exports.Z_MIN_WINDOWBITS||e.windowBits>t.exports.Z_MAX_WINDOWBITS))throw Error("Invalid windowBits: "+e.windowBits);if(e.level&&(e.level<t.exports.Z_MIN_LEVEL||e.level>t.exports.Z_MAX_LEVEL))throw Error("Invalid compression level: "+e.level);if(e.memLevel&&(e.memLevel<t.exports.Z_MIN_MEMLEVEL||e.memLevel>t.exports.Z_MAX_MEMLEVEL))throw Error("Invalid memLevel: "+e.memLevel);if(e.strategy&&e.strategy!=t.exports.Z_FILTERED&&e.strategy!=t.exports.Z_HUFFMAN_ONLY&&e.strategy!=t.exports.Z_RLE&&e.strategy!=t.exports.Z_FIXED&&e.strategy!=t.exports.Z_DEFAULT_STRATEGY)throw Error("Invalid strategy: "+e.strategy);if(e.dictionary&&!i.isBuffer(e.dictionary))throw Error("Invalid dictionary: it should be a Buffer instance");this._handle=new a.Zlib(r);var s=this;this._hadError=!1,this._handle.onerror=function(e,r){// there is no way to cleanly recover.
// continuing only obscures problems.
T(s),s._hadError=!0;var n=Error(e);n.errno=r,n.code=t.exports.codes[r],s.emit("error",n)};var f=t.exports.Z_DEFAULT_COMPRESSION;"number"==typeof e.level&&(f=e.level);var h=t.exports.Z_DEFAULT_STRATEGY;"number"==typeof e.strategy&&(h=e.strategy),this._handle.init(e.windowBits||t.exports.Z_DEFAULT_WINDOWBITS,f,e.memLevel||t.exports.Z_DEFAULT_MEMLEVEL,h,e.dictionary),this._buffer=i.allocUnsafe(this._chunkSize),this._offset=0,this._level=f,this._strategy=h,this.once("end",this.close),Object.defineProperty(this,"_closed",{get:function(){return!n._handle},configurable:!0,enumerable:!0})}function T(t,e){e&&r.nextTick(e),t._handle&&(t._handle.close(),t._handle=null)}function L(t){t.emit("close")}Object.defineProperty(t.exports,"codes",{enumerable:!0,value:Object.freeze(d),writable:!1}),t.exports.Deflate=y,t.exports.Inflate=w,t.exports.Gzip=x,t.exports.Gunzip=E,t.exports.DeflateRaw=k,t.exports.InflateRaw=A,t.exports.Unzip=I,t.exports.createDeflate=function(t){return new y(t)},t.exports.createInflate=function(t){return new w(t)},t.exports.createDeflateRaw=function(t){return new k(t)},t.exports.createInflateRaw=function(t){return new A(t)},t.exports.createGzip=function(t){return new x(t)},t.exports.createGunzip=function(t){return new E(t)},t.exports.createUnzip=function(t){return new I(t)},// Convenience methods.
// compress/decompress a string or buffer in one step.
t.exports.deflate=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new y(e),t,r)},t.exports.deflateSync=function(t,e){return v(new y(e),t)},t.exports.gzip=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new x(e),t,r)},t.exports.gzipSync=function(t,e){return v(new x(e),t)},t.exports.deflateRaw=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new k(e),t,r)},t.exports.deflateRawSync=function(t,e){return v(new k(e),t)},t.exports.unzip=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new I(e),t,r)},t.exports.unzipSync=function(t,e){return v(new I(e),t)},t.exports.inflate=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new w(e),t,r)},t.exports.inflateSync=function(t,e){return v(new w(e),t)},t.exports.gunzip=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new E(e),t,r)},t.exports.gunzipSync=function(t,e){return v(new E(e),t)},t.exports.inflateRaw=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new A(e),t,r)},t.exports.inflateRawSync=function(t,e){return v(new A(e),t)},s.inherits(S,o),S.prototype.params=function(e,n,i){if(e<t.exports.Z_MIN_LEVEL||e>t.exports.Z_MAX_LEVEL)throw RangeError("Invalid compression level: "+e);if(n!=t.exports.Z_FILTERED&&n!=t.exports.Z_HUFFMAN_ONLY&&n!=t.exports.Z_RLE&&n!=t.exports.Z_FIXED&&n!=t.exports.Z_DEFAULT_STRATEGY)throw TypeError("Invalid strategy: "+n);if(this._level!==e||this._strategy!==n){var o=this;this.flush(a.Z_SYNC_FLUSH,function(){f(o._handle,"zlib binding closed"),o._handle.params(e,n),!o._hadError&&(o._level=e,o._strategy=n,i&&i())})}else r.nextTick(i)},S.prototype.reset=function(){return f(this._handle,"zlib binding closed"),this._handle.reset()},// This is the _flush function called by the transform class,
// internally, when the last chunk has been written.
S.prototype._flush=function(t){this._transform(i.alloc(0),"",t)},S.prototype.flush=function(t,e){var n=this,o=this._writableState;"function"!=typeof t&&(void 0!==t||e)||(e=t,t=a.Z_FULL_FLUSH),o.ended?e&&r.nextTick(e):o.ending?e&&this.once("end",e):o.needDrain?e&&this.once("drain",function(){return n.flush(t,e)}):(this._flushFlag=t,this.write(i.alloc(0),"",e))},S.prototype.close=function(t){T(this,t),r.nextTick(L,this)},S.prototype._transform=function(t,e,r){var n,o=this._writableState,s=(o.ending||o.ended)&&(!t||o.length===t.length);return null===t||i.isBuffer(t)?this._handle?void(s?n=this._finishFlushFlag:(n=this._flushFlag,t.length>=o.length&&(this._flushFlag=this._opts.flush||a.Z_NO_FLUSH)),this._processChunk(t,n,r)):r(Error("zlib binding closed")):r(Error("invalid input"))},S.prototype._processChunk=function(t,e,r){var n=t&&t.length,o=this._chunkSize-this._offset,a=0,s=this,c="function"==typeof r;if(!c){var l,p=[],d=0;this.on("error",function(t){l=t}),f(this._handle,"zlib binding closed");do var g=this._handle.writeSync(e,t,a,n,this._buffer,this._offset,o);// out_len
while(!this._hadError&&b(g[0],g[1]))if(this._hadError)throw l;if(d>=h)throw T(this),RangeError(u);var _=i.concat(p,d);return T(this),_}f(this._handle,"zlib binding closed");var m=this._handle.write(e,t,a,n,this._buffer,this._offset,o);// out_len
function b(h,u){if(this&&(this.buffer=null,this.callback=null),!s._hadError){var l=o-u;if(f(l>=0,"have should not go down"),l>0){var g=s._buffer.slice(s._offset,s._offset+l);s._offset+=l,c?s.push(g):(p.push(g),d+=g.length)}if((0===u||s._offset>=s._chunkSize)&&(o=s._chunkSize,s._offset=0,s._buffer=i.allocUnsafe(s._chunkSize)),0===u){if(// Not actually done.  Need to reprocess.
// Also, update the availInBefore to the availInAfter value,
// so that if we have to hit it a third (fourth, etc.) time,
// it'll have the correct byte counts.
a+=n-h,n=h,!c)return!0;var _=s._handle.write(e,t,a,n,s._buffer,s._offset,s._chunkSize);return _.callback=b,void(_.buffer=t)}if(!c)return!1;// finished with the chunk.
r()}}m.buffer=t,m.callback=b},s.inherits(y,S),s.inherits(w,S),s.inherits(x,S),s.inherits(E,S),s.inherits(k,S),s.inherits(A,S),s.inherits(I,S)}),parcelRequire.register("2oUe4",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("4Dxou"),i=parcelRequire("hEPF9"),o=parcelRequire("djwfo"),a=parcelRequire("bM1Vf"),s=parcelRequire("2oyGs"),f=parcelRequire("5hjao");for(var h in f)t.exports[h]=f[h];// zlib modes
t.exports.NONE=0,t.exports.DEFLATE=1,t.exports.INFLATE=2,t.exports.GZIP=3,t.exports.GUNZIP=4,t.exports.DEFLATERAW=5,t.exports.INFLATERAW=6,t.exports.UNZIP=7;var u=31,c=139;/**
 * Emulate Node's zlib C++ layer for use by the JS layer in index.js
 */function l(e){if("number"!=typeof e||e<t.exports.DEFLATE||e>t.exports.UNZIP)throw TypeError("Bad argument");this.dictionary=null,this.err=0,this.flush=0,this.init_done=!1,this.level=0,this.memLevel=0,this.mode=e,this.strategy=0,this.windowBits=0,this.write_in_progress=!1,this.pending_close=!1,this.gzip_id_bytes_read=0}l.prototype.close=function(){if(this.write_in_progress){this.pending_close=!0;return}this.pending_close=!1,i(this.init_done,"close before init"),i(this.mode<=t.exports.UNZIP),this.mode===t.exports.DEFLATE||this.mode===t.exports.GZIP||this.mode===t.exports.DEFLATERAW?a.deflateEnd(this.strm):(this.mode===t.exports.INFLATE||this.mode===t.exports.GUNZIP||this.mode===t.exports.INFLATERAW||this.mode===t.exports.UNZIP)&&s.inflateEnd(this.strm),this.mode=t.exports.NONE,this.dictionary=null},l.prototype.write=function(t,e,r,n,i,o,a){return this._write(!0,t,e,r,n,i,o,a)},l.prototype.writeSync=function(t,e,r,n,i,o,a){return this._write(!1,t,e,r,n,i,o,a)},l.prototype._write=function(e,o,a,s,f,h,u,c){if(i.equal(arguments.length,8),i(this.init_done,"write before init"),i(this.mode!==t.exports.NONE,"already finalized"),i.equal(!1,this.write_in_progress,"write already in progress"),i.equal(!1,this.pending_close,"close is pending"),this.write_in_progress=!0,i.equal(!1,void 0===o,"must provide flush value"),this.write_in_progress=!0,o!==t.exports.Z_NO_FLUSH&&o!==t.exports.Z_PARTIAL_FLUSH&&o!==t.exports.Z_SYNC_FLUSH&&o!==t.exports.Z_FULL_FLUSH&&o!==t.exports.Z_FINISH&&o!==t.exports.Z_BLOCK)throw Error("Invalid flush value");if(null==a&&(a=r.alloc(0),f=0,s=0),this.strm.avail_in=f,this.strm.input=a,this.strm.next_in=s,this.strm.avail_out=c,this.strm.output=h,this.strm.next_out=u,this.flush=o,!e)return(// sync version
this._process(),this._checkError())?this._afterSync():void 0;// async version
var l=this;return n.nextTick(function(){l._process(),l._after()}),this},l.prototype._afterSync=function(){var t=this.strm.avail_out,e=this.strm.avail_in;return this.write_in_progress=!1,[e,t]},l.prototype._process=function(){var e=null;// If the avail_out is left at 0, then it means that it ran out
// of room.  If there was avail_out left over, then it means
// that all of the input was consumed.
switch(this.mode){case t.exports.DEFLATE:case t.exports.GZIP:case t.exports.DEFLATERAW:this.err=a.deflate(this.strm,this.flush);break;case t.exports.UNZIP:switch(this.strm.avail_in>0&&(e=this.strm.next_in),this.gzip_id_bytes_read){case 0:if(null===e)break;if(this.strm.input[e]===u){if(this.gzip_id_bytes_read=1,e++,1===this.strm.avail_in)break}else{this.mode=t.exports.INFLATE;break}// fallthrough
case 1:if(null===e)break;this.strm.input[e]===c?(this.gzip_id_bytes_read=2,this.mode=t.exports.GUNZIP):// (after initialization).
this.mode=t.exports.INFLATE;break;default:throw Error("invalid number of gzip magic number bytes read")}// fallthrough
case t.exports.INFLATE:case t.exports.GUNZIP:case t.exports.INFLATERAW:for(this.err=s.inflate(this.strm,this.flush),this.err===t.exports.Z_NEED_DICT&&this.dictionary&&(// Load it
this.err=s.inflateSetDictionary(this.strm,this.dictionary),this.err===t.exports.Z_OK?this.err=s.inflate(this.strm,this.flush):this.err===t.exports.Z_DATA_ERROR&&// Make it possible for After() to tell a bad dictionary from bad
// input.
(this.err=t.exports.Z_NEED_DICT));this.strm.avail_in>0&&this.mode===t.exports.GUNZIP&&this.err===t.exports.Z_STREAM_END&&0!==this.strm.next_in[0];)// Bytes remain in input buffer. Perhaps this is another compressed
// member in the same archive, or just trailing garbage.
// Trailing zero bytes are okay, though, since they are frequently
// used for padding.
this.reset(),this.err=s.inflate(this.strm,this.flush);break;default:throw Error("Unknown mode "+this.mode)}},l.prototype._checkError=function(){// Acceptable error states depend on the type of zlib stream.
switch(this.err){case t.exports.Z_OK:case t.exports.Z_BUF_ERROR:if(0!==this.strm.avail_out&&this.flush===t.exports.Z_FINISH)return this._error("unexpected end of file"),!1;break;case t.exports.Z_STREAM_END:break;case t.exports.Z_NEED_DICT:return null==this.dictionary?this._error("Missing dictionary"):this._error("Bad dictionary"),!1;default:return(// something else.
this._error("Zlib error"),!1)}return!0},l.prototype._after=function(){if(this._checkError()){var t=this.strm.avail_out,e=this.strm.avail_in;this.write_in_progress=!1,// call the write() cb
this.callback(e,t),this.pending_close&&this.close()}},l.prototype._error=function(t){this.strm.msg&&(t=this.strm.msg),this.onerror(t,this.err),this.write_in_progress=!1,this.pending_close&&this.close()},l.prototype.init=function(e,r,n,o,a){i(4==arguments.length||5==arguments.length,"init(windowBits, level, memLevel, strategy, [dictionary])"),i(e>=8&&e<=15,"invalid windowBits"),i(r>=-1&&r<=9,"invalid compression level"),i(n>=1&&n<=9,"invalid memlevel"),i(o===t.exports.Z_FILTERED||o===t.exports.Z_HUFFMAN_ONLY||o===t.exports.Z_RLE||o===t.exports.Z_FIXED||o===t.exports.Z_DEFAULT_STRATEGY,"invalid strategy"),this._init(r,e,n,o,a),this._setDictionary()},l.prototype.params=function(){throw Error("deflateParams Not supported")},l.prototype.reset=function(){this._reset(),this._setDictionary()},l.prototype._init=function(e,r,n,i,f){switch(this.level=e,this.windowBits=r,this.memLevel=n,this.strategy=i,this.flush=t.exports.Z_NO_FLUSH,this.err=t.exports.Z_OK,(this.mode===t.exports.GZIP||this.mode===t.exports.GUNZIP)&&(this.windowBits+=16),this.mode===t.exports.UNZIP&&(this.windowBits+=32),(this.mode===t.exports.DEFLATERAW||this.mode===t.exports.INFLATERAW)&&(this.windowBits=-1*this.windowBits),this.strm=new o,this.mode){case t.exports.DEFLATE:case t.exports.GZIP:case t.exports.DEFLATERAW:this.err=a.deflateInit2(this.strm,this.level,t.exports.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy);break;case t.exports.INFLATE:case t.exports.GUNZIP:case t.exports.INFLATERAW:case t.exports.UNZIP:this.err=s.inflateInit2(this.strm,this.windowBits);break;default:throw Error("Unknown mode "+this.mode)}this.err!==t.exports.Z_OK&&this._error("Init error"),this.dictionary=f,this.write_in_progress=!1,this.init_done=!0},l.prototype._setDictionary=function(){if(null!=this.dictionary){switch(this.err=t.exports.Z_OK,this.mode){case t.exports.DEFLATE:case t.exports.DEFLATERAW:this.err=a.deflateSetDictionary(this.strm,this.dictionary)}this.err!==t.exports.Z_OK&&this._error("Failed to set dictionary")}},l.prototype._reset=function(){switch(this.err=t.exports.Z_OK,this.mode){case t.exports.DEFLATE:case t.exports.DEFLATERAW:case t.exports.GZIP:this.err=a.deflateReset(this.strm);break;case t.exports.INFLATE:case t.exports.INFLATERAW:case t.exports.GUNZIP:this.err=s.inflateReset(this.strm)}this.err!==t.exports.Z_OK&&this._error("Failed to reset stream")},t.exports.Zlib=l}),parcelRequire.register("hEPF9",function(t,e){// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var r,n,i=parcelRequire("4Dxou");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function s(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(t){var e=h(t,"string");return"symbol"===o(e)?e:String(e)}function h(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function u(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}var c=parcelRequire("8bwm4").codes,l=c.ERR_AMBIGUOUS_ARGUMENT,p=c.ERR_INVALID_ARG_TYPE,d=c.ERR_INVALID_ARG_VALUE,g=c.ERR_INVALID_RETURN_VALUE,_=c.ERR_MISSING_ARGS,m=parcelRequire("9guY9"),b=parcelRequire("jcBbL"),v=b.inspect,b=parcelRequire("jcBbL"),y=b.types,w=y.isPromise,x=y.isRegExp,E=parcelRequire("kw0h7")(),k=parcelRequire("6Kgn4")(),A=parcelRequire("hzzg1")("RegExp.prototype.test");function I(){var t=parcelRequire("lpo00");r=t.isDeepEqual,n=t.isDeepStrictEqual}var O=!1,S=t.exports=R,T={};// All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function L(t){if(t.message instanceof Error)throw t.message;throw new m(t)}function P(t,e,r,n,o){var a,s=arguments.length;if(0===s?a="Failed":1===s?(r=t,t=void 0):(!1===O&&(O=!0,(i.emitWarning?i.emitWarning:console.warn.bind(console))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094")),2===s&&(n="!=")),r instanceof Error)throw r;var f={actual:t,expected:e,operator:void 0===n?"fail":n,stackStartFn:o||P};void 0!==r&&(f.message=r);var h=new m(f);throw a&&(h.message=a,h.generatedMessage=!0),h}function j(t,e,r,n){if(!r){var i=!1;if(0===e)i=!0,n="No value argument passed to `assert.ok()`";else if(n instanceof Error)throw n;var o=new m({actual:r,expected:!0,message:n,operator:"==",stackStartFn:t});throw o.generatedMessage=i,o}}// Pure assertion tests whether a value is truthy, as determined
// by !!value.
function R(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];j.apply(void 0,[R,e.length].concat(e))}function U(t,e,i){if(arguments.length<2)throw new _("actual","expected");void 0===r&&I(),n(t,e)&&L({actual:t,expected:e,message:i,operator:"notDeepStrictEqual",stackStartFn:U})}S.fail=P,// The AssertionError is defined in internal/error.
S.AssertionError=m,S.ok=R,// The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */S.equal=function t(e,r,n){if(arguments.length<2)throw new _("actual","expected");// eslint-disable-next-line eqeqeq
e!=r&&L({actual:e,expected:r,message:n,operator:"==",stackStartFn:t})},// The non-equality assertion tests for whether two objects are not
// equal with !=.
S.notEqual=function t(e,r,n){if(arguments.length<2)throw new _("actual","expected");// eslint-disable-next-line eqeqeq
e==r&&L({actual:e,expected:r,message:n,operator:"!=",stackStartFn:t})},// The equivalence assertion tests a deep equality relation.
S.deepEqual=function t(e,n,i){if(arguments.length<2)throw new _("actual","expected");void 0===r&&I(),r(e,n)||L({actual:e,expected:n,message:i,operator:"deepEqual",stackStartFn:t})},// The non-equivalence assertion tests for any deep inequality.
S.notDeepEqual=function t(e,n,i){if(arguments.length<2)throw new _("actual","expected");void 0===r&&I(),r(e,n)&&L({actual:e,expected:n,message:i,operator:"notDeepEqual",stackStartFn:t})},/* eslint-enable */S.deepStrictEqual=function t(e,i,o){if(arguments.length<2)throw new _("actual","expected");void 0===r&&I(),n(e,i)||L({actual:e,expected:i,message:o,operator:"deepStrictEqual",stackStartFn:t})},S.notDeepStrictEqual=U,S.strictEqual=function t(e,r,n){if(arguments.length<2)throw new _("actual","expected");k(e,r)||L({actual:e,expected:r,message:n,operator:"strictEqual",stackStartFn:t})},S.notStrictEqual=function t(e,r,n){if(arguments.length<2)throw new _("actual","expected");k(e,r)&&L({actual:e,expected:r,message:n,operator:"notStrictEqual",stackStartFn:t})};var B=/*#__PURE__*/s(function t(e,r,n){var i=this;u(this,t),r.forEach(function(t){t in e&&(void 0!==n&&"string"==typeof n[t]&&x(e[t])&&A(e[t],n[t])?i[t]=n[t]:i[t]=e[t])})});function D(t,e,r,i,o,a){if(!(r in t)||!n(t[r],e[r])){if(!i){// Create placeholder objects to create a nice output.
var s=new B(t,o),f=new B(e,o,t),h=new m({actual:s,expected:f,operator:"deepStrictEqual",stackStartFn:a});throw h.actual=t,h.expected=e,h.operator=a.name,h}L({actual:t,expected:e,message:i,operator:a.name,stackStartFn:a})}}function C(t,e,n,i){if("function"!=typeof e){if(x(e))return A(e,t);// assert.doesNotThrow does not accept objects.
if(2==arguments.length)throw new p("expected",["Function","RegExp"],e);// Handle primitives properly.
if("object"!==o(t)||null===t){var a=new m({actual:t,expected:e,message:n,operator:"deepStrictEqual",stackStartFn:i});throw a.operator=i.name,a}var s=Object.keys(e);// Special handle errors to make sure the name and the message are compared
// as well.
if(e instanceof Error)s.push("name","message");else if(0===s.length)throw new d("error",e,"may not be an empty object");return void 0===r&&I(),s.forEach(function(r){"string"==typeof t[r]&&x(e[r])&&A(e[r],t[r])||D(t,e,r,n,s,i)}),!0}return(// Guard instanceof against arrow functions as they don't have a prototype.
void 0!==e.prototype&&t instanceof e||!Error.isPrototypeOf(e)&&!0===e.call({},t))}function N(t){if("function"!=typeof t)throw new p("fn","Function",t);try{t()}catch(t){return t}return T}function F(t){// Accept native ES6 promises and promises that are implemented in a similar
// way. Do not accept thenables that use a function as `obj` and that have no
// `catch` handler.
// TODO: thenables are checked up until they have the correct methods,
// but according to documentation, the `then` method should receive
// the `fulfill` and `reject` arguments as well or it may be never resolved.
return w(t)||null!==t&&"object"===o(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function z(t){return Promise.resolve().then(function(){var e;if("function"==typeof t)// Fail in case no promise is returned.
{if(!F(// Return a rejected promise if `promiseFn` throws synchronously.
e=t()))throw new g("instance of Promise","promiseFn",e)}else if(F(t))e=t;else throw new p("promiseFn",["Function","Promise"],t);return Promise.resolve().then(function(){return e}).then(function(){return T}).catch(function(t){return t})})}function M(t,e,r,n){if("string"==typeof r){if(4==arguments.length)throw new p("error",["Object","Error","Function","RegExp"],r);if("object"===o(e)&&null!==e){if(e.message===r)throw new l("error/message",'The error message "'.concat(e.message,'" is identical to the message.'))}else if(e===r)throw new l("error/message",'The error "'.concat(e,'" is identical to the message.'));n=r,r=void 0}else if(null!=r&&"object"!==o(r)&&"function"!=typeof r)throw new p("error",["Object","Error","Function","RegExp"],r);if(e===T){var i="";r&&r.name&&(i+=" (".concat(r.name,")")),i+=n?": ".concat(n):".";var a="rejects"===t.name?"rejection":"exception";L({actual:void 0,expected:r,operator:t.name,message:"Missing expected ".concat(a).concat(i),stackStartFn:t})}if(r&&!C(e,r,n,t))throw e}function Z(t,e,r,n){if(e!==T){if("string"==typeof r&&(n=r,r=void 0),!r||C(e,r)){var i=n?": ".concat(n):".",o="doesNotReject"===t.name?"rejection":"exception";L({actual:e,expected:r,operator:t.name,message:"Got unwanted ".concat(o).concat(i,"\n")+'Actual message: "'.concat(e&&e.message,'"'),stackStartFn:t})}throw e}}// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a871df3dfb8ea663ef5e1f8f62701ec51384ecb
function G(t,e,r,n,i){if(!x(e))throw new p("regexp","RegExp",e);var a="match"===i;if("string"!=typeof t||A(e,t)!==a){if(r instanceof Error)throw r;var s=!r;// 'The input was expected to not match the regular expression ' +
r=r||("string"!=typeof t?'The "string" argument must be of type string. Received type '+"".concat(o(t)," (").concat(v(t),")"):(a?"The input did not match the regular expression ":"The input was expected to not match the regular expression ")+"".concat(v(e),". Input:\n\n").concat(v(t),"\n"));var f=new m({actual:t,expected:e,message:r,operator:i,stackStartFn:n});throw f.generatedMessage=s,f}}// Expose a strict only variant of assert
function H(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];j.apply(void 0,[H,e.length].concat(e))}S.throws=function t(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];M.apply(void 0,[t,N(e)].concat(n))},S.rejects=function t(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return z(e).then(function(e){return M.apply(void 0,[t,e].concat(n))})},S.doesNotThrow=function t(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];Z.apply(void 0,[t,N(e)].concat(n))},S.doesNotReject=function t(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return z(e).then(function(e){return Z.apply(void 0,[t,e].concat(n))})},S.ifError=function t(e){if(null!=e){var r="ifError got unwanted exception: ";"object"===o(e)&&"string"==typeof e.message?0===e.message.length&&e.constructor?r+=e.constructor.name:r+=e.message:r+=v(e);var n=new m({actual:e,expected:null,operator:"ifError",message:r,stackStartFn:t}),i=e.stack;if("string"==typeof i){// This will remove any duplicated frames from the error frames taken
// from within `ifError` and add the original error frames to the newly
// created ones.
var a=i.split("\n");a.shift();for(var s=n.stack.split("\n"),f=0;f<a.length;f++){// Find the first occurrence of the frame.
var h=s.indexOf(a[f]);if(-1!==h){// Only keep new frames.
s=s.slice(0,h);break}}n.stack="".concat(s.join("\n"),"\n").concat(a.join("\n"))}throw n}},S.match=function t(e,r,n){G(e,r,n,t,"match")},S.doesNotMatch=function t(e,r,n){G(e,r,n,t,"doesNotMatch")},S.strict=E(H,S,{equal:S.strictEqual,deepEqual:S.deepStrictEqual,notEqual:S.notStrictEqual,notDeepEqual:S.notDeepStrictEqual}),S.strict.strict=S.strict}),parcelRequire.register("8bwm4",function(t,e){// The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function i(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t){var e=a(t,"string");return"symbol"===r(e)?e:String(e)}function a(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function f(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}function h(t,e){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=p();return function(){var r,n=d(t);if(e){var i=d(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return c(this,r)}}function c(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}$parcel$export(t.exports,"codes",function(){return g},function(t){return g=t});var g,_,m,b={};function v(t,e,r){function n(t,r,n){return"string"==typeof e?e:e(t,r,n)}r||(r=Error);var o=/*#__PURE__*/function(e){f(o,e);var r=u(o);function o(e,i,a){var f;return s(this,o),(f=r.call(this,n(e,i,a))).code=t,f}return i(o)}(r);b[t]=o}// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function y(t,e){if(!Array.isArray(t))return"of ".concat(e," ").concat(String(t));var r=t.length;return(t=t.map(function(t){return String(t)}),r>2)?"one of ".concat(e," ").concat(t.slice(0,r-1).join(", "),", or ")+t[r-1]:2===r?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function w(t,e,r){return t.substr(!r||r<0?0:+r,e.length)===e}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function x(t,e,r){return(void 0===r||r>t.length)&&(r=t.length),t.substring(r-e.length,r)===e}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function E(t,e,r){return"number"!=typeof r&&(r=0),!(r+e.length>t.length)&&-1!==t.indexOf(e,r)}v("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),v("ERR_INVALID_ARG_TYPE",function(t,e,n){if(void 0===_&&(_=parcelRequire("hEPF9")),_("string"==typeof t,"'name' must be a string"),"string"==typeof e&&w(e,"not ")?(i="must not be",e=e.replace(/^not /,"")):i="must be",x(t," argument"))o="The ".concat(t," ").concat(i," ").concat(y(e,"type"));else{var i,o,a=E(t,".")?"property":"argument";o='The "'.concat(t,'" ').concat(a," ").concat(i," ").concat(y(e,"type"))}return(// TODO(BridgeAR): Improve the output by showing `null` and similar.
o+". Received type ".concat(r(n)))},TypeError),v("ERR_INVALID_ARG_VALUE",function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is invalid";void 0===m&&(m=parcelRequire("jcBbL"));var n=m.inspect(e);return n.length>128&&(n="".concat(n.slice(0,128),"...")),"The argument '".concat(t,"' ").concat(r,". Received ").concat(n)},TypeError,RangeError),v("ERR_INVALID_RETURN_VALUE",function(t,e,n){var i;return i=n&&n.constructor&&n.constructor.name?"instance of ".concat(n.constructor.name):"type ".concat(r(n)),"Expected ".concat(t,' to be returned from the "').concat(e,'"')+" function but got ".concat(i,".")},TypeError),v("ERR_MISSING_ARGS",function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];void 0===_&&(_=parcelRequire("hEPF9")),_(e.length>0,"At least one arg needs to be specified");var n="The ",i=e.length;switch(e=e.map(function(t){return'"'.concat(t,'"')}),i){case 1:n+="".concat(e[0]," argument");break;case 2:n+="".concat(e[0]," and ").concat(e[1]," arguments");break;default:n+=e.slice(0,i-1).join(", ")+", and ".concat(e[i-1]," arguments")}return"".concat(n," must be specified")},TypeError),g=b}),parcelRequire.register("9guY9",function(t,e){// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
var r=parcelRequire("4Dxou");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach(function(e){o(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function o(t,e,r){return(e=h(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function f(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t){var e=u(t,"string");return"symbol"===w(e)?e:String(e)}function u(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==w(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}function l(t){var e=m();return function(){var r,n=y(t);if(e){var i=y(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return p(this,r)}}function p(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return d(t)}function d(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){var e="function"==typeof Map?new Map:void 0;return(g=function(t){if(null===t||!b(t))return t;if("function"!=typeof t)throw TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return _(t,arguments,y(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),v(r,t)})(t)}function _(t,e,r){return(_=m()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&v(i,r.prototype),i}).apply(null,arguments)}function m(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function b(t){return -1!==Function.toString.call(t).indexOf("[native code]")}function v(t,e){return(v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var x=parcelRequire("jcBbL").inspect,E=parcelRequire("8bwm4").codes.ERR_INVALID_ARG_TYPE;// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function k(t,e,r){return(void 0===r||r>t.length)&&(r=t.length),t.substring(r-e.length,r)===e}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function A(t,e){if(e=Math.floor(e),0==t.length||0==e)return"";var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+t.substring(0,r-t.length)}var I="",O="",S="",T="",L={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"},P=10;function j(t){var e=Object.keys(t),r=Object.create(Object.getPrototypeOf(t));return e.forEach(function(e){r[e]=t[e]}),Object.defineProperty(r,"message",{value:t.message}),r}function R(t){// The util.inspect default values could be changed. This makes sure the
// error messages contain the necessary information nevertheless.
return x(t,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,// Assert compares only enumerable properties (with a few exceptions).
showHidden:!1,// Having a long line as error is better than wrapping the line for
// comparison for now.
// TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
// have meta information about the inspected properties (i.e., know where
// in what line the property starts and ends).
breakLength:1/0,// Assert does not detect proxies currently.
showProxy:!1,sorted:!0,// Inspect getters as we also check them when comparing entries.
getters:!0})}function U(t,e,n){var i="",o="",a=0,s="",f=!1,h=R(t),u=h.split("\n"),c=R(e).split("\n"),l=0,p="";// If "actual" and "expected" fit on a single line and they are not strictly
// equal, check further special handling.
if("strictEqual"===n&&"object"===w(t)&&"object"===w(e)&&null!==t&&null!==e&&(n="strictEqualObject"),1===u.length&&1===c.length&&u[0]!==c[0]){var d=u[0].length+c[0].length;// If the character length of "actual" and "expected" together is less than
// kMaxShortLength and if neither is an object and at least one of them is
// not `zero`, use the strict equal comparison to visualize the output.
if(d<=P){if(("object"!==w(t)||null===t)&&("object"!==w(e)||null===e)&&(0!==t||0!==e))return"".concat(L[n],"\n\n")+"".concat(u[0]," !== ").concat(c[0],"\n")}else if("strictEqualObject"!==n&&d<(r.stderr&&r.stderr.isTTY?r.stderr.columns:80)){for(;u[0][l]===c[0][l];)l++;// Ignore the first characters.
l>2&&(// Add position indicator for the first mismatch in case it is a
// single line and the input length is less than the column length.
p="\n  ".concat(A(" ",l),"^"),l=0)}}for(// Remove all ending lines that match (this optimizes the output for
// readability by reducing the number of total changed lines).
var g=u[u.length-1],_=c[c.length-1];g===_&&(l++<2?s="\n  ".concat(g).concat(s):i=g,u.pop(),c.pop(),0!==u.length&&0!==c.length);)g=u[u.length-1],_=c[c.length-1];var m=Math.max(u.length,c.length);// Strict equal with identical objects that are not identical by reference.
// E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
if(0===m){// We have to get the result again. The lines were all removed before.
var b=h.split("\n");// Only remove lines in case it makes sense to collapse those.
// TODO: Accept env to always show the full error.
if(b.length>30)for(b[26]="".concat(I,"...").concat(T);b.length>27;)b.pop();return"".concat(L.notIdentical,"\n\n").concat(b.join("\n"),"\n")}l>3&&(s="\n".concat(I,"...").concat(T).concat(s),f=!0),""!==i&&(s="\n  ".concat(i).concat(s),i="");var v=0,y=L[n]+"\n".concat(O,"+ actual").concat(T," ").concat(S,"- expected").concat(T),x=" ".concat(I,"...").concat(T," Lines skipped");for(l=0;l<m;l++){// Only extra expected lines exist
var E=l-a;if(u.length<l+1)E>1&&l>2&&(E>4?(o+="\n".concat(I,"...").concat(T),f=!0):E>3&&(o+="\n  ".concat(c[l-2]),v++),o+="\n  ".concat(c[l-1]),v++),// Mark the current line as the last diverging one.
a=l,// Add the expected line to the cache.
i+="\n".concat(S,"-").concat(T," ").concat(c[l]),v++;else if(c.length<l+1)E>1&&l>2&&(E>4?(o+="\n".concat(I,"...").concat(T),f=!0):E>3&&(o+="\n  ".concat(u[l-2]),v++),o+="\n  ".concat(u[l-1]),v++),// Mark the current line as the last diverging one.
a=l,// Add the actual line to the result.
o+="\n".concat(O,"+").concat(T," ").concat(u[l]),v++;else{var j=c[l],U=u[l],B=U!==j&&(!k(U,",")||U.slice(0,-1)!==j);B&&k(j,",")&&j.slice(0,-1)===U&&(B=!1,U+=","),B?(E>1&&l>2&&(E>4?(o+="\n".concat(I,"...").concat(T),f=!0):E>3&&(o+="\n  ".concat(u[l-2]),v++),o+="\n  ".concat(u[l-1]),v++),// Mark the current line as the last diverging one.
a=l,// Add the actual line to the result and cache the expected diverging
// line so consecutive diverging lines show up as +++--- and not +-+-+-.
o+="\n".concat(O,"+").concat(T," ").concat(U),i+="\n".concat(S,"-").concat(T," ").concat(j),v+=2):(// Add all cached information to the result before adding other things
// and reset the cache.
o+=i,i="",(1===E||0===l)&&(o+="\n  ".concat(U),v++))}// Inspected object to big (Show ~20 rows max)
if(v>20&&l<m-2)return"".concat(y).concat(x,"\n").concat(o,"\n").concat(I,"...").concat(T).concat(i,"\n")+"".concat(I,"...").concat(T)}return"".concat(y).concat(f?x:"","\n").concat(o).concat(i).concat(s).concat(p)}var B=/*#__PURE__*/function(t,e){c(o,t);var n=l(o);function o(t){if(a(this,o),"object"!==w(t)||null===t)throw new E("options","Object",t);var e,i=t.message,s=t.operator,f=t.stackStartFn,h=t.actual,u=t.expected,c=Error.stackTraceLimit;if(Error.stackTraceLimit=0,null!=i)e=n.call(this,String(i));else if(r.stderr&&r.stderr.isTTY&&(r.stderr&&r.stderr.getColorDepth&&1!==r.stderr.getColorDepth()?(I="\x1b[34m",O="\x1b[32m",T="\x1b[39m",S="\x1b[31m"):(I="",O="",T="",S="")),"object"===w(h)&&null!==h&&"object"===w(u)&&null!==u&&"stack"in h&&h instanceof Error&&"stack"in u&&u instanceof Error&&(h=j(h),u=j(u)),"deepStrictEqual"===s||"strictEqual"===s)e=n.call(this,U(h,u,s));else if("notDeepStrictEqual"===s||"notStrictEqual"===s){// In case the objects are equal but the operator requires unequal, show
// the first object and say A equals B
var l=L[s],g=R(h).split("\n");// Only remove lines in case it makes sense to collapse those.
// TODO: Accept env to always show the full error.
if("notStrictEqual"===s&&"object"===w(h)&&null!==h&&(l=L.notStrictEqualObject),g.length>30)for(g[26]="".concat(I,"...").concat(T);g.length>27;)g.pop();e=1===g.length?n.call(this,"".concat(l," ").concat(g[0])):n.call(this,"".concat(l,"\n\n").concat(g.join("\n"),"\n"))}else{var _=R(h),m="",b=L[s];"notDeepEqual"===s||"notEqual"===s?(_="".concat(L[s],"\n\n").concat(_)).length>1024&&(_="".concat(_.slice(0,1021),"...")):(m="".concat(R(u)),_.length>512&&(_="".concat(_.slice(0,509),"...")),m.length>512&&(m="".concat(m.slice(0,509),"...")),"deepEqual"===s||"equal"===s?_="".concat(b,"\n\n").concat(_,"\n\nshould equal\n\n"):m=" ".concat(s," ").concat(m)),e=n.call(this,"".concat(_).concat(m))}return Error.stackTraceLimit=c,e.generatedMessage=!i,Object.defineProperty(d(e),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),e.code="ERR_ASSERTION",e.actual=h,e.expected=u,e.operator=s,Error.captureStackTrace&&Error.captureStackTrace(d(e),f),// Create error message including the error code in the name.
e.stack,// Reset the name.
e.name="AssertionError",p(e)}return f(o,[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:e,value:function(t,e){// This limits the `actual` and `expected` property default inspection to
// the minimum depth. Otherwise those values would be too verbose compared
// to the actual error message which contains a combined view of these two
// input values.
return x(this,i(i({},e),{},{customInspect:!1,depth:0}))}}]),o}(/*#__PURE__*/g(Error),x.custom);t.exports=B}),parcelRequire.register("kw0h7",function(t,e){var r=parcelRequire("kDkYg"),n=function(){if(!Object.assign)return!1;for(var t="abcdefghijklmnopqrst",e=t.split(""),r={},n=0;n<e.length;++n)r[e[n]]=e[n];/*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */var i=Object.assign({},r),o="";for(var a in i)o+=a;return t!==o},i=function(){if(!Object.assign||!Object.preventExtensions)return!1;/*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}return!1};t.exports=function(){return!Object.assign||n()||i()?r:Object.assign}}),parcelRequire.register("kDkYg",function(t,e){var r=parcelRequire("g2a4e"),n=parcelRequire("7DgHs")(),i=parcelRequire("hzzg1"),o=Object,a=i("Array.prototype.push"),s=i("Object.prototype.propertyIsEnumerable"),f=n?Object.getOwnPropertySymbols:null;// eslint-disable-next-line no-unused-vars
t.exports=function(t,e){if(null==t)throw TypeError("target must be an object");var i=o(t);// step 1
if(1==arguments.length)return i;// step 2
for(var h=1;h<arguments.length;++h){var u=o(arguments[h]),c=r(u),l=n&&(Object.getOwnPropertySymbols||f);// step 3.a.i
if(l)for(var p=l(u),d=0;d<p.length;++d){var g=p[d];s(u,g)&&a(c,g)}// step 3.a.iii:
for(var _=0;_<c.length;++_){var m=c[_];if(s(u,m)){var b=u[m];// step 3.a.iii.2.a
i[m]=b;// step 3.a.iii.2.b
}}}return i;// step 4
}}),parcelRequire.register("g2a4e",function(t,e){var r=Array.prototype.slice,n=parcelRequire("4BIWj"),i=Object.keys,o=i?function(t){return i(t)}:parcelRequire("8NbUQ"),a=Object.keys;o.shim=function(){return Object.keys?!function(){// Safari 5.0 bug
var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)&&(Object.keys=function(t){return n(t)?a(r.call(t)):a(t)}):Object.keys=o,Object.keys||o},t.exports=o}),parcelRequire.register("4BIWj",function(t,e){var r=Object.prototype.toString;t.exports=function(t){var e=r.call(t),n="[object Arguments]"===e;return n||(n="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===r.call(t.callee)),n}}),parcelRequire.register("8NbUQ",function(t,e){var r;if(!Object.keys){// modified from https://github.com/es-shims/es5-shim
var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,o=parcelRequire("4BIWj"),a=Object.prototype.propertyIsEnumerable,s=!a.call({toString:null},"toString"),f=a.call(function(){},"prototype"),h=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(t){var e=t.constructor;return e&&e.prototype===t},c={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},l=function(){/* global window */if("undefined"==typeof window)return!1;for(var t in window)try{if(!c["$"+t]&&n.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{u(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),p=function(t){/* global window */if("undefined"==typeof window||!l)return u(t);try{return u(t)}catch(t){return!1}};r=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===i.call(t),a=o(t),u=e&&"[object String]"===i.call(t),c=[];if(!e&&!r&&!a)throw TypeError("Object.keys called on a non-object");var l=f&&r;if(u&&t.length>0&&!n.call(t,0))for(var d=0;d<t.length;++d)c.push(String(d));if(a&&t.length>0)for(var g=0;g<t.length;++g)c.push(String(g));else for(var _ in t)!(l&&"prototype"===_)&&n.call(t,_)&&c.push(String(_));if(s)for(var m=p(t),b=0;b<h.length;++b)!(m&&"constructor"===h[b])&&n.call(t,h[b])&&c.push(h[b]);return c}}t.exports=r}),parcelRequire.register("6Kgn4",function(t,e){var r=parcelRequire("hhDyh");t.exports=function(){return"function"==typeof Object.is?Object.is:r}}),parcelRequire.register("hhDyh",function(t,e){var r=function(t){return t!=t};t.exports=function(t,e){return 0===t&&0===e?1/t==1/e:!!(t===e||r(t)&&r(e))}}),parcelRequire.register("lpo00",function(t,e){function r(t,e){return s(t)||a(t,e)||i(t,e)||n()}function n(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,s=[],f=!0,h=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=o.call(r)).done)&&(s.push(n.value),s.length!==e);f=!0);}catch(t){h=!0,i=t}finally{try{if(!f&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(h)throw i}}return s}}function s(t){if(Array.isArray(t))return t}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h=void 0!==/a/g.flags,u=function(t){var e=[];return t.forEach(function(t){return e.push(t)}),e},c=function(t){var e=[];return t.forEach(function(t,r){return e.push([r,t])}),e},l=Object.is?Object.is:parcelRequire("bFkgn"),p=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},d=Number.isNaN?Number.isNaN:parcelRequire("36nLt");function g(t){return t.call.bind(t)}var _=g(Object.prototype.hasOwnProperty),m=g(Object.prototype.propertyIsEnumerable),b=g(Object.prototype.toString),v=parcelRequire("jcBbL").types,y=v.isAnyArrayBuffer,w=v.isArrayBufferView,x=v.isDate,E=v.isMap,k=v.isRegExp,A=v.isSet,I=v.isNativeError,O=v.isBoxedPrimitive,S=v.isNumberObject,T=v.isStringObject,L=v.isBooleanObject,P=v.isBigIntObject,j=v.isSymbolObject,R=v.isFloat32Array,U=v.isFloat64Array;function B(t){if(0===t.length||t.length>10)return!0;for(var e=0;e<t.length;e++){var r=t.charCodeAt(e);if(r<48||r>57)return!0}// The maximum size for an array is 2 ** 32 -1.
return 10===t.length&&t>=4294967296}function D(t){return Object.keys(t).filter(B).concat(p(t).filter(Object.prototype.propertyIsEnumerable.bind(t)))}// Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function C(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0}var N=void 0,F=!0,z=!1,M=0,Z=1,G=2,H=3;// Check if they have the same source and flags
function Y(t,e){return h?t.source===e.source&&t.flags===e.flags:RegExp.prototype.toString.call(t)===RegExp.prototype.toString.call(e)}function q(t,e){if(t.byteLength!==e.byteLength)return!1;for(var r=0;r<t.byteLength;r++)if(t[r]!==e[r])return!1;return!0}function W(t,e){return t.byteLength===e.byteLength&&0===C(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}function V(t,e){return t.byteLength===e.byteLength&&0===C(new Uint8Array(t),new Uint8Array(e))}function X(t,e){return S(t)?S(e)&&l(Number.prototype.valueOf.call(t),Number.prototype.valueOf.call(e)):T(t)?T(e)&&String.prototype.valueOf.call(t)===String.prototype.valueOf.call(e):L(t)?L(e)&&Boolean.prototype.valueOf.call(t)===Boolean.prototype.valueOf.call(e):P(t)?P(e)&&BigInt.prototype.valueOf.call(t)===BigInt.prototype.valueOf.call(e):j(e)&&Symbol.prototype.valueOf.call(t)===Symbol.prototype.valueOf.call(e)}// Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function J(t,e,r,n){// All identical values are equivalent, as determined by ===.
if(t===e)return 0!==t||!r||l(t,e);// Check more closely if val1 and val2 are equal.
if(r){if("object"!==f(t))return"number"==typeof t&&d(t)&&d(e);if("object"!==f(e)||null===t||null===e||Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1}else{if(null===t||"object"!==f(t))return(null===e||"object"!==f(e))&&t==e;if(null===e||"object"!==f(e))return!1}var i=b(t);if(i!==b(e))return!1;if(Array.isArray(t)){// Check for sparse arrays and general fast path
if(t.length!==e.length)return!1;var o=D(t,N),a=D(e,N);return o.length===a.length&&$(t,e,r,n,Z,o)}// [browserify] This triggers on certain types in IE (Map/Set) so we don't
// wan't to early return out of the rest of the checks. However we can check
// if the second value is one of these values and the first isn't.
if("[object Object]"===i&&(!E(t)&&E(e)||!A(t)&&A(e)))return!1;if(x(t)){if(!x(e)||Date.prototype.getTime.call(t)!==Date.prototype.getTime.call(e))return!1}else if(k(t)){if(!k(e)||!Y(t,e))return!1}else if(I(t)||t instanceof Error)// Do not compare the stack as it might differ even though the error itself
// is otherwise identical.
{if(t.message!==e.message||t.name!==e.name)return!1}else if(w(t)){if(!r&&(R(t)||U(t))){if(!q(t,e))return!1}else if(!W(t,e))return!1;// Buffer.compare returns true, so val1.length === val2.length. If they both
// only contain numeric keys, we don't need to exam further than checking
// the symbols.
var s=D(t,N),h=D(e,N);return s.length===h.length&&$(t,e,r,n,M,s)}else if(A(t))return!!A(e)&&t.size===e.size&&$(t,e,r,n,G);else if(E(t))return!!E(e)&&t.size===e.size&&$(t,e,r,n,H);else if(y(t)){if(!V(t,e))return!1}else if(O(t)&&!X(t,e))return!1;return $(t,e,r,n,M)}function K(t,e){return e.filter(function(e){return m(t,e)})}function $(t,e,r,n,i,o){// For all remaining Object pairs, including Array, objects and Maps,
// equivalence is determined by having:
// a) The same number of owned enumerable properties
// b) The same set of keys/indexes (although not necessarily the same order)
// c) Equivalent values for every corresponding key/index
// d) For Sets and Maps, equal contents
// Note: this accounts for both named and indexed properties on Arrays.
if(5==arguments.length){o=Object.keys(t);var a=Object.keys(e);// The pair must have the same number of owned properties.
if(o.length!==a.length)return!1}for(// Cheap key test
var s=0;s<o.length;s++)if(!_(e,o[s]))return!1;if(r&&5==arguments.length){var f=p(t);if(0!==f.length){var h=0;for(s=0;s<f.length;s++){var u=f[s];if(m(t,u)){if(!m(e,u))return!1;o.push(u),h++}else if(m(e,u))return!1}var c=p(e);if(f.length!==c.length&&K(e,c).length!==h)return!1}else{var l=p(e);if(0!==l.length&&0!==K(e,l).length)return!1}}if(0===o.length&&(i===M||i===Z&&0===t.length||0===t.size))return!0;// Use memos to handle cycles.
if(void 0===n)n={val1:new Map,val2:new Map,position:0};else{// We prevent up to two map.has(x) calls by directly retrieving the value
// and checking for undefined. The map can only contain numbers, so it is
// safe to check for undefined only.
var d=n.val1.get(t);if(void 0!==d){var g=n.val2.get(e);if(void 0!==g)return d===g}n.position++}n.val1.set(t,n.position),n.val2.set(e,n.position);var b=ta(t,e,r,o,n,i);return n.val1.delete(t),n.val2.delete(e),b}function Q(t,e,r,n){for(var i=u(t),o=0;o<i.length;o++){var a=i[o];if(J(e,a,r,n))return(// Remove the matching element to make sure we do not check that again.
t.delete(a),!0)}return!1}// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function tt(t){switch(f(t)){case"undefined":return null;case"object":// Only pass in null as object!
return;case"symbol":return!1;case"string":t=+t;// Loose equal entries exist only if the string is possible to convert to
// a regular number and not NaN.
// Fall through
case"number":if(d(t))return!1}return!0}function te(t,e,r){var n=tt(r);return null!=n?n:e.has(n)&&!t.has(n)}function tr(t,e,r,n,i){var o=tt(r);if(null!=o)return o;var a=e.get(o);return!!((void 0!==a||e.has(o))&&J(n,a,!1,i))&&!t.has(o)&&J(n,a,!1,i)}function tn(t,e,r,n){for(var i=null,o=u(t),a=0;a<o.length;a++){var s=o[a];// Note: Checking for the objects first improves the performance for object
// heavy sets but it is a minor slow down for primitives. As they are fast
// to check this improves the worst case scenario instead.
if("object"===f(s)&&null!==s)null===i&&(i=new Set),// If the specified value doesn't exist in the second set its an not null
// object (or non strict only: a not matching primitive) we'll need to go
// hunting for something thats deep-(strict-)equal to it. To make this
// O(n log n) complexity we have to copy these values in a new set first.
i.add(s);else if(!e.has(s)){if(r||!te(t,e,s))return!1;null===i&&(i=new Set),i.add(s)}}if(null!==i){for(var h=u(e),c=0;c<h.length;c++){var l=h[c];// We have to check if a primitive value is already
// matching and only if it's not, go hunting for it.
if("object"===f(l)&&null!==l){if(!Q(i,l,r,n))return!1}else if(!r&&!t.has(l)&&!Q(i,l,r,n))return!1}return 0===i.size}return!0}function ti(t,e,r,n,i,o){for(var a=u(t),s=0;s<a.length;s++){var f=a[s];if(J(r,f,i,o)&&J(n,e.get(f),i,o))return t.delete(f),!0}return!1}function to(t,e,n,i){for(var o=null,a=c(t),s=0;s<a.length;s++){var h=r(a[s],2),u=h[0],l=h[1];if("object"===f(u)&&null!==u)null===o&&(o=new Set),o.add(u);else{// By directly retrieving the value we prevent another b.has(key) check in
// almost all possible cases.
var p=e.get(u);if(void 0===p&&!e.has(u)||!J(l,p,n,i)){if(n||!tr(t,e,u,l,i))return!1;null===o&&(o=new Set),o.add(u)}}}if(null!==o){for(var d=c(e),g=0;g<d.length;g++){var _=r(d[g],2),m=_[0],b=_[1];if("object"===f(m)&&null!==m){if(!ti(o,t,m,b,n,i))return!1}else if(!n&&(!t.has(m)||!J(t.get(m),b,!1,i))&&!ti(o,t,m,b,!1,i))return!1}return 0===o.size}return!0}function ta(t,e,r,n,i,o){// Sets and maps don't have their entries accessible via normal object
// properties.
var a=0;if(o===G){if(!tn(t,e,r,i))return!1}else if(o===H){if(!to(t,e,r,i))return!1}else if(o===Z)for(;a<t.length;a++)if(_(t,a)){if(!_(e,a)||!J(t[a],e[a],r,i))return!1}else{if(_(e,a))return!1;for(// Array is sparse.
var s=Object.keys(t);a<s.length;a++){var f=s[a];if(!_(e,f)||!J(t[f],e[f],r,i))return!1}if(s.length!==Object.keys(e).length)return!1;return!0}// The pair must have equivalent values for every corresponding key.
// Possibly expensive deep test:
for(a=0;a<n.length;a++){var h=n[a];if(!J(t[h],e[h],r,i))return!1}return!0}function ts(t,e){return J(t,e,z)}function tf(t,e){return J(t,e,F)}t.exports={isDeepEqual:ts,isDeepStrictEqual:tf}}),parcelRequire.register("bFkgn",function(t,e){var r=parcelRequire("llbrD"),n=parcelRequire("a7rAf"),i=parcelRequire("hhDyh"),o=parcelRequire("6Kgn4"),a=parcelRequire("2llVI"),s=n(o(),Object);r(s,{getPolyfill:o,implementation:i,shim:a}),t.exports=s}),parcelRequire.register("llbrD",function(t,e){var r=parcelRequire("g2a4e"),n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,o=Array.prototype.concat,a=parcelRequire("dAcal"),s=function(t){return"function"==typeof t&&"[object Function]"===i.call(t)},f=parcelRequire("e8CHI")(),h=function(t,e,r,n){if(e in t){if(!0===n){if(t[e]===r)return}else if(!s(n)||!n())return}f?a(t,e,r,!0):a(t,e,r)},u=function(t,e){var i=arguments.length>2?arguments[2]:{},a=r(e);n&&(a=o.call(a,Object.getOwnPropertySymbols(e)));for(var s=0;s<a.length;s+=1)h(t,a[s],e[a[s]],i[a[s]])};u.supportsDescriptors=!!f,t.exports=u}),parcelRequire.register("dAcal",function(t,e){var r=parcelRequire("e8CHI")(),n=parcelRequire("1ZpYW"),i=r&&n("%Object.defineProperty%",!0),o=n("%SyntaxError%"),a=n("%TypeError%"),s=parcelRequire("2fUz1");/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */t.exports=function(t,e,r){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new a("`obj` must be an object or a function`");if("string"!=typeof e&&"symbol"!=typeof e)throw new a("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new a("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new a("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new a("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new a("`loose`, if provided, must be a boolean");var n=arguments.length>3?arguments[3]:null,f=arguments.length>4?arguments[4]:null,h=arguments.length>5?arguments[5]:null,u=arguments.length>6&&arguments[6],c=!!s&&s(t,e);if(i)i(t,e,{configurable:null===h&&c?c.configurable:!h,enumerable:null===n&&c?c.enumerable:!n,value:r,writable:null===f&&c?c.writable:!f});else if(!u&&(n||f||h))throw new o("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");else t[e]=r;// eslint-disable-line no-param-reassign
}}),parcelRequire.register("e8CHI",function(t,e){var r=parcelRequire("1ZpYW")("%Object.defineProperty%",!0),n=function(){if(r)try{return r({},"a",{value:1}),!0}catch(t){}return!1};n.hasArrayLengthDefineBug=function(){// node v0.6 has a bug where array lengths can be Set but not Defined
if(!n())return null;try{return 1!==r([],"length",{value:1}).length}catch(t){// In Firefox 4-22, defining length on an array throws an exception.
return!0}},t.exports=n}),parcelRequire.register("2llVI",function(t,e){var r=parcelRequire("6Kgn4"),n=parcelRequire("llbrD");t.exports=function(){var t=r();return n(Object,{is:t},{is:function(){return Object.is!==t}}),t}}),parcelRequire.register("36nLt",function(t,e){var r=parcelRequire("a7rAf"),n=parcelRequire("llbrD"),i=parcelRequire("duiOV"),o=parcelRequire("eMgCM"),a=parcelRequire("k9ww0"),s=r(o(),Number);/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */n(s,{getPolyfill:o,implementation:i,shim:a}),t.exports=s}),parcelRequire.register("duiOV",function(t,e){/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */t.exports=function(t){return t!=t}}),parcelRequire.register("eMgCM",function(t,e){var r=parcelRequire("duiOV");t.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:r}}),parcelRequire.register("k9ww0",function(t,e){var r=parcelRequire("llbrD"),n=parcelRequire("eMgCM");/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */t.exports=function(){var t=n();return r(Number,{isNaN:t},{isNaN:function(){return Number.isNaN!==t}}),t}}),parcelRequire.register("djwfo",function(t,e){// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function r(){/* next input byte */this.input=null,this.next_in=0,/* number of bytes available at input */this.avail_in=0,/* total number of input bytes read so far */this.total_in=0,/* next output byte should be put there */this.output=null,this.next_out=0,/* remaining free space at output */this.avail_out=0,/* total number of bytes output so far */this.total_out=0,/* last error message, NULL if no error */this.msg=""/*Z_NULL*/,/* not visible by applications */this.state=null,/* best guess about the data type: binary or text */this.data_type=2/*Z_UNKNOWN*/,/* adler32 value of the uncompressed data */this.adler=0}t.exports=r}),parcelRequire.register("bM1Vf",function(t,e){$parcel$export(t.exports,"deflateInit2",function(){return r},function(t){return r=t}),$parcel$export(t.exports,"deflateReset",function(){return n},function(t){return n=t}),$parcel$export(t.exports,"deflateSetHeader",function(){return i},function(t){return i=t}),$parcel$export(t.exports,"deflate",function(){return o},function(t){return o=t}),$parcel$export(t.exports,"deflateEnd",function(){return a},function(t){return a=t}),$parcel$export(t.exports,"deflateSetDictionary",function(){return s},function(t){return s=t});var r,n,i,o,a,s,f,h=parcelRequire("j5hbz"),u=parcelRequire("aaFFs"),c=parcelRequire("b9saU"),l=parcelRequire("6D1Jv"),p=parcelRequire("6HEnc"),d=0,g=1,_=3,m=4,b=5,v=0,y=1,w=-2,x=-3,E=-5,k=-1,A=1,I=2,O=3,S=4,T=2,L=8,P=9,j=286,R=30,U=19,B=573,D=15,C=3,N=258,F=262,z=32,M=42,Z=69,G=73,H=91,Y=103,q=113,W=666,V=1,X=2,J=3,K=4,$=3;function Q(t,e){return t.msg=p[e],e}function tt(t){return(t<<1)-(t>4?9:0)}function te(t){for(var e=t.length;--e>=0;)t[e]=0}/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */function tr(t){var e=t.state,r=e.pending;r>t.avail_out&&(r=t.avail_out),0!==r&&(h.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function tn(t,e){u._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,tr(t.strm)}function ti(t,e){t.pending_buf[t.pending++]=e}/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */function to(t,e){//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */function ta(t,e,r,n){var i=t.avail_in;return(i>n&&(i=n),0===i)?0:(t.avail_in-=i,// zmemcpy(buf, strm->next_in, len);
h.arraySet(e,t.input,t.next_in,i,r),1===t.state.wrap?t.adler=c(t.adler,e,i,r):2===t.state.wrap&&(t.adler=l(t.adler,e,i,r)),t.next_in+=i,t.total_in+=i,i)}/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */function ts(t,e){var r,n,i=t.max_chain_length,o=t.strstart,a=t.prev_length,s=t.nice_match,f=t.strstart>t.w_size-F?t.strstart-(t.w_size-F):0/*NIL*/,h=t.window,u=t.w_mask,c=t.prev,l=t.strstart+N,p=h[o+a-1],d=h[o+a];/* max hash chain length */t.prev_length>=t.good_match&&(i>>=2),s>t.lookahead&&(s=t.lookahead);// Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
do{/* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */if(h[// Assert(cur_match < s->strstart, "no future");
(r=e)+a]!==d||h[r+a-1]!==p||h[r]!==h[o]||h[++r]!==h[o+1])continue;/* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */o+=2,r++;// Assert(*scan == *match, "match[2]?");
/* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */do;while(h[++o]===h[++r]&&h[++o]===h[++r]&&h[++o]===h[++r]&&h[++o]===h[++r]&&h[++o]===h[++r]&&h[++o]===h[++r]&&h[++o]===h[++r]&&h[++o]===h[++r]&&o<l)if(// Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
n=N-(l-o),o=l-N,n>a){if(t.match_start=e,a=n,n>=s)break;p=h[o+a-1],d=h[o+a]}}while((e=c[e&u])>f&&0!=--i)return a<=t.lookahead?a:t.lookahead}/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */function tf(t){var e,r,n,i,o,a=t.w_size;//Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
do{// JS ints have 32 bit, block below not needed
/* Deal with !@#$% 64K limit: *///if (sizeof(int) <= 2) {
//    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
//        more = wsize;
//
//  } else if (more == (unsigned)(-1)) {
//        /* Very unlikely, but possible on 16 bit machine if
//         * strstart == 0 && lookahead == 1 (input done a byte at time)
//         */
//        more--;
//    }
//}
/* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=a+(a-F)){h.arraySet(t.window,t.window,a,a,0),t.match_start-=a,t.strstart-=a,/* we now have strstart >= MAX_DIST */t.block_start-=a,e=/* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */r=t.hash_size;do n=t.head[--e],t.head[e]=n>=a?n-a:0;while(--r)e=r=a;do n=t.prev[--e],t.prev[e]=n>=a?n-a:0;while(--r)i+=a}if(0===t.strm.avail_in)break;/* Initialize the hash value now that we have some input: */if(/* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     *///Assert(more >= 2, "more < 2");
r=ta(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=r,t.lookahead+t.insert>=C)//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
for(o=t.strstart-t.insert,t.ins_h=t.window[o],/* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;t.insert&&(/* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+C-1])&t.hash_mask,t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,!(t.lookahead+t.insert<C)););/* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */}while(t.lookahead<F&&0!==t.strm.avail_in)/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   *///  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */function th(t,e){/* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */var r=65535;/* Copy as much as possible from input to output: */for(65535>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){/* Fill the window as much as possible: */if(t.lookahead<=1){if(//Assert(s->strstart < s->w_size+MAX_DIST(s) ||
//  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }
tf(t),0===t.lookahead&&e===d)return V;if(0===t.lookahead)break;/* flush the current block */}//Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");
t.strstart+=t.lookahead,t.lookahead=0;/* Emit a stored block if pending_buf will be full: */var n=t.block_start+r;if((0===t.strstart||t.strstart>=n)&&(/* strstart == 0 is possible when wraparound on 16-bit machine */t.lookahead=t.strstart-n,t.strstart=n,/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out)||t.strstart-t.block_start>=t.w_size-F&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out))return V}return(t.insert=0,e===m)?(/*** FLUSH_BLOCK(s, 1); ***/tn(t,!0),0===t.strm.avail_out)?J:K:(t.strstart>t.block_start&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),t.strm.avail_out),V)}/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */function tu(t,e){for(var r,n;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */if(t.lookahead<F){if(tf(t),t.lookahead<F&&e===d)return V;if(0===t.lookahead)break;/* flush the current block */}if(/* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */r=0/*NIL*/,t.lookahead>=C&&(/*** INSERT_STRING(s, s.strstart, hash_head); ***/t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+C-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0/*NIL*/!==r&&t.strstart-r<=t.w_size-F&&/* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */(t.match_length=ts(t,r)),t.match_length>=C){/* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */if(// check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
/*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/n=u._tr_tally(t,t.strstart-t.match_start,t.match_length-C),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match/*max_insert_length*/&&t.lookahead>=C){t.match_length--;/* string at strstart already in table */do t.strstart++,/*** INSERT_STRING(s, s.strstart, hash_head); ***/t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+C-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!=--t.match_length)t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],/* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask}else /* No match, output a literal byte *///Tracevv((stderr,"%c", s.window[s.strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/n=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out))return V}return(t.insert=t.strstart<C-1?t.strstart:C-1,e===m)?(/*** FLUSH_BLOCK(s, 1); ***/tn(t,!0),0===t.strm.avail_out)?J:K:t.last_lit&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out)?V:X}/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */function tc(t,e){/* Process the input block. */for(var r,n,i;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */if(t.lookahead<F){if(tf(t),t.lookahead<F&&e===d)return V;if(0===t.lookahead)break;/* flush the current block */}/* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */if(/* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */r=0/*NIL*/,t.lookahead>=C&&(/*** INSERT_STRING(s, s.strstart, hash_head); ***/t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+C-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),/* Find the longest match, discarding those <= prev_length.
     */t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=C-1,0/*NIL*/!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-F&&(/* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */t.match_length=ts(t,r),t.match_length<=5&&(t.strategy===A||t.match_length===C&&t.strstart-t.match_start>4096/*TOO_FAR*/)&&/* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */(t.match_length=C-1)),t.prev_length>=C&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-C,/* Do not insert strings in hash table beyond this. *///check_match(s, s.strstart-1, s.prev_match, s.prev_length);
/***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/n=u._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-C),/* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=i&&(/*** INSERT_STRING(s, s.strstart, hash_head); ***/t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+C-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!=--t.prev_length)if(t.match_available=0,t.match_length=C-1,t.strstart++,n&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out))return V}else if(t.match_available){if(/* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       *///Tracevv((stderr,"%c", s->window[s->strstart-1]));
/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/(n=u._tr_tally(t,0,t.window[t.strstart-1]))&&/*** FLUSH_BLOCK_ONLY(s, 0) ***/tn(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return V}else /* There is no previous match to compare with, wait for
       * the next step to decide.
       */t.match_available=1,t.strstart++,t.lookahead--}return(t.match_available&&(//Tracevv((stderr,"%c", s->window[s->strstart-1]));
/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/n=u._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<C-1?t.strstart:C-1,e===m)?(/*** FLUSH_BLOCK(s, 1); ***/tn(t,!0),0===t.strm.avail_out)?J:K:t.last_lit&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out)?V:X}/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */function tl(t,e){for(var r,n,i,o,a=t.window;;){/* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */if(t.lookahead<=N){if(tf(t),t.lookahead<=N&&e===d)return V;if(0===t.lookahead)break;/* flush the current block */}if(/* See how many times the previous byte repeats */t.match_length=0,t.lookahead>=C&&t.strstart>0&&(n=a[i=t.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){o=t.strstart+N;do;while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<o)t.match_length=N-(o-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=C?(//check_match(s, s.strstart, s.strstart - 1, s.match_length);
/*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/r=u._tr_tally(t,1,t.match_length-C),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(/* No match, output a literal byte *///Tracevv((stderr,"%c", s->window[s->strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out))return V}return(t.insert=0,e===m)?(/*** FLUSH_BLOCK(s, 1); ***/tn(t,!0),0===t.strm.avail_out)?J:K:t.last_lit&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out)?V:X}/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */function tp(t,e){for(var r;;){/* Make sure that we have a literal to write. */if(0===t.lookahead&&(tf(t),0===t.lookahead)){if(e===d)return V;break;/* flush the current block */}if(/* Output a literal byte */t.match_length=0,//Tracevv((stderr,"%c", s->window[s->strstart]));
/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/r=u._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out))return V}return(t.insert=0,e===m)?(/*** FLUSH_BLOCK(s, 1); ***/tn(t,!0),0===t.strm.avail_out)?J:K:t.last_lit&&(/*** FLUSH_BLOCK(s, 0); ***/tn(t,!1),0===t.strm.avail_out)?V:X}/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */function td(t,e,r,n,i){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=n,this.func=i}/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */function tg(t){t.window_size=2*t.w_size,/*** CLEAR_HASH(s); ***/te(t.head),/* Set the default configuration parameters:
   */t.max_lazy_match=f[t.level].max_lazy,t.good_match=f[t.level].good_length,t.nice_match=f[t.level].nice_length,t.max_chain_length=f[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=C-1,t.match_available=0,t.ins_h=0}function t_(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=L,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,/* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */this.window_size=0,/* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */this.prev=null,/* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,/* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */this.block_start=0,/* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,/* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */this.max_chain_length=0,/* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */this.max_lazy_match=0,/* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */// That's alias to max_lazy_match, don't use directly
//this.max_insert_length = 0;
/* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */this.level=0,this.strategy=0,this.good_match=0,/* Use a faster search when the previous match is longer than this */this.nice_match=0,/* used by trees.c: *//* Didn't use ct_data typedef below to suppress compiler warning */// struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
// struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
// struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
// Use flat array of DOUBLE size, with interleaved fata,
// because JS does not support effective
this.dyn_ltree=new h.Buf16(2*B),this.dyn_dtree=new h.Buf16((2*R+1)*2),this.bl_tree=new h.Buf16((2*U+1)*2),te(this.dyn_ltree),te(this.dyn_dtree),te(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,//ush bl_count[MAX_BITS+1];
this.bl_count=new h.Buf16(D+1),/* number of codes at each bit length for an optimal tree *///int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
this.heap=new h.Buf16(2*j+1),te(this.heap),this.heap_len=0,this.heap_max=0,/* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */this.depth=new h.Buf16(2*j+1),te(this.depth),/* Depth of each subtree used as tie breaker for trees of equal frequency
   */this.l_buf=0,this.lit_bufsize=0,/* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */this.last_lit=0,this.d_buf=0,/* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,/* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */this.bi_valid=0;/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */// Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */}function tm(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=T,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?M:q,t.adler=2===e.wrap?0// crc32(0, Z_NULL, 0)
:1,e.last_flush=d,u._tr_init(e),v):Q(t,w)}function tb(t){var e=tm(t);return e===v&&tg(t.state),e}function tv(t,e){return t&&t.state&&2===t.state.wrap?(t.state.gzhead=e,v):w}function ty(t,e,r,n,i,o){if(!t)return w;var a=1;if(e===k&&(e=6),n<0?(a=0,n=-n):n>15&&(a=2,n-=16),i<1||i>P||r!==L||n<8||n>15||e<0||e>9||o<0||o>S)return Q(t,w);8===n&&(n=9);/* until 256-byte window bug fixed */var s=new t_;return t.state=s,s.strm=t,s.wrap=a,s.gzhead=null,s.w_bits=n,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=i+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+C-1)/C),s.window=new h.Buf8(2*s.w_size),s.head=new h.Buf16(s.hash_size),s.prev=new h.Buf16(s.w_size),// Don't need mem init magic for JS.
//s.high_water = 0;  /* nothing written to s->window yet */
s.lit_bufsize=1<<i+6,s.pending_buf_size=4*s.lit_bufsize,//overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
//s->pending_buf = (uchf *) overlay;
s.pending_buf=new h.Buf8(s.pending_buf_size),// It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
//s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
s.d_buf=1*s.lit_bufsize,//s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
s.l_buf=3*s.lit_bufsize,s.level=e,s.strategy=o,s.method=r,tb(t)}function tw(t,e){if(!t||!t.state||e>b||e<0)return t?Q(t,w):w;if(n=t.state,!t.output||!t.input&&0!==t.avail_in||n.status===W&&e!==m)return Q(t,0===t.avail_out?E:w);/* Write the header */if(n.strm=t,r=n.last_flush,n.last_flush=e,n.status===M){if(2===n.wrap)t.adler=0,ti(n,31),ti(n,139),ti(n,8),n.gzhead?(ti(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),ti(n,255&n.gzhead.time),ti(n,n.gzhead.time>>8&255),ti(n,n.gzhead.time>>16&255),ti(n,n.gzhead.time>>24&255),ti(n,9===n.level?2:n.strategy>=I||n.level<2?4:0),ti(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(ti(n,255&n.gzhead.extra.length),ti(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=l(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=Z):(ti(n,0),ti(n,0),ti(n,0),ti(n,0),ti(n,0),ti(n,9===n.level?2:n.strategy>=I||n.level<2?4:0),ti(n,$),n.status=q);else{var r,n,i,o,a=L+(n.w_bits-8<<4)<<8,s=-1;a|=(s=n.strategy>=I||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=z),a+=31-a%31,n.status=q,to(n,a),0!==n.strstart&&(to(n,t.adler>>>16),to(n,65535&t.adler)),t.adler=1}}//#ifdef GZIP
if(n.status===Z){if(n.gzhead.extra/* != Z_NULL*/){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(t.adler=l(t.adler,n.pending_buf,n.pending-i,i)),tr(t),i=n.pending,n.pending!==n.pending_buf_size));)ti(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(t.adler=l(t.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=G)}else n.status=G}if(n.status===G){if(n.gzhead.name/* != Z_NULL*/){i=n.pending;//int val;
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(t.adler=l(t.adler,n.pending_buf,n.pending-i,i)),tr(t),i=n.pending,n.pending===n.pending_buf_size)){o=1;break}o=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,ti(n,o)}while(0!==o)n.gzhead.hcrc&&n.pending>i&&(t.adler=l(t.adler,n.pending_buf,n.pending-i,i)),0===o&&(n.gzindex=0,n.status=H)}else n.status=H}if(n.status===H){if(n.gzhead.comment/* != Z_NULL*/){i=n.pending;//int val;
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(t.adler=l(t.adler,n.pending_buf,n.pending-i,i)),tr(t),i=n.pending,n.pending===n.pending_buf_size)){o=1;break}o=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,ti(n,o)}while(0!==o)n.gzhead.hcrc&&n.pending>i&&(t.adler=l(t.adler,n.pending_buf,n.pending-i,i)),0===o&&(n.status=Y)}else n.status=Y}//#endif
/* Flush as much pending output as possible */if(n.status===Y&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&tr(t),n.pending+2<=n.pending_buf_size&&(ti(n,255&t.adler),ti(n,t.adler>>8&255),t.adler=0,n.status=q)):n.status=q),0!==n.pending){if(tr(t),0===t.avail_out)return(/* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */n.last_flush=-1,v)}else if(0===t.avail_in&&tt(e)<=tt(r)&&e!==m)return Q(t,E);/* User must not provide more input after the first FINISH: */if(n.status===W&&0!==t.avail_in)return Q(t,E);/* Start a new block or continue the current one.
   */if(0!==t.avail_in||0!==n.lookahead||e!==d&&n.status!==W){var h=n.strategy===I?tp(n,e):n.strategy===O?tl(n,e):f[n.level].func(n,e);if((h===J||h===K)&&(n.status=W),h===V||h===J)return 0===t.avail_out&&(n.last_flush=-1),v;if(h===X&&(e===g?u._tr_align(n):e!==b&&(u._tr_stored_block(n,0,0,!1),e===_&&(/*** CLEAR_HASH(s); ***//* forget history */te(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),tr(t),0===t.avail_out))return n.last_flush=-1,v}return(//Assert(strm->avail_out > 0, "bug2");
//if (strm.avail_out <= 0) { throw new Error("bug2");}
e!==m?v:n.wrap<=0?y:(2===n.wrap?(ti(n,255&t.adler),ti(n,t.adler>>8&255),ti(n,t.adler>>16&255),ti(n,t.adler>>24&255),ti(n,255&t.total_in),ti(n,t.total_in>>8&255),ti(n,t.total_in>>16&255),ti(n,t.total_in>>24&255)):(to(n,t.adler>>>16),to(n,65535&t.adler)),tr(t),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?v:y))}function tx(t){var e;return t/*== Z_NULL*/&&t.state/*== Z_NULL*/?(e=t.state.status)!==M&&e!==Z&&e!==G&&e!==H&&e!==Y&&e!==q&&e!==W?Q(t,w):(t.state=null,e===q?Q(t,x):v):w}/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */function tE(t,e){var r,n,i,o,a,s,f,u,l=e.length;if(!t/*== Z_NULL*/||!t.state/*== Z_NULL*/||2===(o=(r=t.state).wrap)||1===o&&r.status!==M||r.lookahead)return w;for(1===o&&/* adler32(strm->adler, dictionary, dictLength); */(t.adler=c(t.adler,e,l,0)),r.wrap=0,l>=r.w_size&&(0===o&&(/*** CLEAR_HASH(s); ***/te(r.head),r.strstart=0,r.block_start=0,r.insert=0),/* use the tail */// dictionary = dictionary.slice(dictLength - s.w_size);
u=new h.Buf8(r.w_size),h.arraySet(u,e,l-r.w_size,r.w_size,0),e=u,l=r.w_size),/* insert dictionary into window and hash */a=t.avail_in,s=t.next_in,f=t.input,t.avail_in=l,t.next_in=0,t.input=e,tf(r);r.lookahead>=C;){n=r.strstart,i=r.lookahead-(C-1);do /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+C-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++;while(--i)r.strstart=n,r.lookahead=C-1,tf(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=C-1,r.match_available=0,t.next_in=s,t.input=f,t.avail_in=a,r.wrap=o,v}f=[/*      good lazy nice chain */new td(0,0,0,0,th),/* 0 store only */new td(4,4,8,4,tu),/* 1 max speed, no lazy matches */new td(4,5,16,8,tu),/* 2 */new td(4,6,32,32,tu),/* 3 */new td(4,4,16,16,tc),/* 4 lazy matches */new td(8,16,32,32,tc),/* 5 */new td(8,16,128,128,tc),/* 6 */new td(8,32,128,256,tc),/* 7 */new td(32,128,258,1024,tc),/* 8 */new td(32,258,258,4096,tc)],r=ty,n=tb,i=tv,o=tw,a=tx,s=tE}),parcelRequire.register("j5hbz",function(t,e){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports.assign=function(t/*from1, from2, from3, ...*/){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift();if(r){if("object"!=typeof r)throw TypeError(r+"must be non-object");for(var i in r)n(r,i)&&(t[i]=r[i])}}return t},// reduce buffer size, avoiding mem copy
t.exports.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var i={arraySet:function(t,e,r,n,i){if(e.subarray&&t.subarray){t.set(e.subarray(r,r+n),i);return}// Fallback to ordinary array
for(var o=0;o<n;o++)t[i+o]=e[r+o]},// Join array of chunks to single array.
flattenChunks:function(t){var e,r,n,i,o,a;for(e=0,// calculate data length
n=0,r=t.length;e<r;e++)n+=t[e].length;for(e=0,// join chunks
a=new Uint8Array(n),i=0,r=t.length;e<r;e++)o=t[e],a.set(o,i),i+=o.length;return a}},o={arraySet:function(t,e,r,n,i){for(var o=0;o<n;o++)t[i+o]=e[r+o]},// Join array of chunks to single array.
flattenChunks:function(t){return[].concat.apply([],t)}};// Enable/Disable typed arrays use, for testing
//
t.exports.setTyped=function(e){e?(t.exports.Buf8=Uint8Array,t.exports.Buf16=Uint16Array,t.exports.Buf32=Int32Array,t.exports.assign(t.exports,i)):(t.exports.Buf8=Array,t.exports.Buf16=Array,t.exports.Buf32=Array,t.exports.assign(t.exports,o))},t.exports.setTyped(r)}),parcelRequire.register("aaFFs",function(t,e){$parcel$export(t.exports,"_tr_init",function(){return r},function(t){return r=t}),$parcel$export(t.exports,"_tr_stored_block",function(){return n},function(t){return n=t}),$parcel$export(t.exports,"_tr_flush_block",function(){return i},function(t){return i=t}),$parcel$export(t.exports,"_tr_tally",function(){return o},function(t){return o=t}),$parcel$export(t.exports,"_tr_align",function(){return a},function(t){return a=t});var r,n,i,o,a,s,f,h,u=parcelRequire("j5hbz"),c=4,l=0,p=1,d=2;/*============================================================================*/function g(t){for(var e=t.length;--e>=0;)t[e]=0}// From zutil.h
var _=0,m=1,b=2,v=3,y=258,w=29,x=256,E=286,k=30,A=19,I=573,O=15,S=16,T=7,L=256,P=16,j=17,R=18,U=/* extra bits for each length code */[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],B=/* extra bits for each distance code */[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],D=/* extra bits for each bit length code */[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],C=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],N=512,F=Array(576);g(F);/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */var z=Array(2*k);g(z);/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */var M=Array(N);g(M);/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */var Z=Array(y-v+1);g(Z);/* length code for each normalized match length (0 == MIN_MATCH) */var G=Array(w);g(G);/* First normalized length for each code (0 = MIN_MATCH) */var H=Array(k);/* First normalized distance for each code (0 = distance of 1) */function Y(t,e,r,n,i){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=n,this.max_length=i,// show if `static_tree` has data or dummy - needed for monomorphic objects
this.has_stree=t&&t.length}function q(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function W(t){return t<256?M[t]:M[256+(t>>>7)]}/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */function V(t,e){//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */function X(t,e,r){t.bi_valid>S-r?(t.bi_buf|=e<<t.bi_valid&65535,V(t,t.bi_buf),t.bi_buf=e>>S-t.bi_valid,t.bi_valid+=r-S):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function J(t,e,r){X(t,r[2*e],r[2*e+1])}/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */function K(t,e){var r=0;do r|=1&t,t>>>=1,r<<=1;while(--e>0)return r>>>1}/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */function $(t){16===t.bi_valid?(V(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */function Q(t,e)//    tree_desc *desc;    /* the tree descriptor */
{var r,n,i,o,a,s,f=e.dyn_tree,h=e.max_code,u=e.stat_desc.static_tree,c=e.stat_desc.has_stree,l=e.stat_desc.extra_bits,p=e.stat_desc.extra_base,d=e.stat_desc.max_length,g=0;for(o=0;o<=O;o++)t.bl_count[o]=0;for(/* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */f[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<I;r++)(o=f[2*f[2*(n=t.heap[r])+1]+1]+1)>d&&(o=d,g++),f[2*n+1]=o,!(n>h)&&(/* not a leaf node */t.bl_count[o]++,a=0,n>=p&&(a=l[n-p]),s=f[2*n]/*.Freq*/,t.opt_len+=s*(o+a),c&&(t.static_len+=s*(u[2*n+1]+a)));if(0!==g){// Trace((stderr,"\nbit length overflow\n"));
/* This happens for example on obj2 and pic of the Calgary corpus *//* Find the first bit length which could increase: */do{for(o=d-1;0===t.bl_count[o];)o--;t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[d]--,/* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */g-=2}while(g>0)/* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */for(o=d;0!==o;o--)for(n=t.bl_count[o];0!==n;)!((i=t.heap[--r])>h)&&(f[2*i+1]!==o&&(// Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
t.opt_len+=(o-f[2*i+1])*f[2*i]/*.Freq*/,f[2*i+1]=o),n--)}}/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */function tt(t,e,r)//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{var n,i,o=Array(O+1),a=0;/* next code value for each bit length *//* The distribution counts are first used to generate the code values
   * without bit reversal.
   */for(n=1;n<=O;n++)o[n]=a=a+r[n-1]<<1;/* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   *///Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
//        "inconsistent bit counts");
//Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
for(i=0;i<=e;i++){var s=t[2*i+1]/*.Len*/;0!==s&&/* Now reverse the bits */(t[2*i]=K(o[s]++,s));//Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
//     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
}}/* ===========================================================================
 * Initialize the various 'constant' tables.
 */function te(){var t,e,r,n,i,o=Array(O+1);for(n=0,/* number of codes at each bit length for an optimal tree */// do check in _tr_init()
//if (static_init_done) return;
/* For some embedded targets, global variables are not initialized: *//*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*//* Initialize the mapping length (0..255) -> length code (0..28) */r=0;n<w-1;n++)for(t=0,G[n]=r;t<1<<U[n];t++)Z[r++]=n;for(//Assert (length == 256, "tr_static_init: length != 256");
/* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */Z[r-1]=n,/* Initialize the mapping dist (0..32K) -> dist code (0..29) */i=0,n=0;n<16;n++)for(t=0,H[n]=i;t<1<<B[n];t++)M[i++]=n;for(//Assert (dist == 256, "tr_static_init: dist != 256");
i>>=7;n<k;n++)for(t=0,H[n]=i<<7;t<1<<B[n]-7;t++)M[256+i++]=n;//Assert (dist == 256, "tr_static_init: 256+dist != 512");
/* Construct the codes of the static literal tree */for(e=0;e<=O;e++)o[e]=0;for(t=0;t<=143;)F[2*t+1]=8,t++,o[8]++;for(;t<=255;)F[2*t+1]=9,t++,o[9]++;for(;t<=279;)F[2*t+1]=7,t++,o[7]++;for(;t<=287;)F[2*t+1]=8,t++,o[8]++;/* The static distance tree is trivial: */for(/* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */tt(F,E+1,o),t=0;t<k;t++)z[2*t+1]=5,z[2*t]=K(t,5);// Now data ready and we can init static trees
s=new Y(F,U,x+1,E,O),f=new Y(z,B,0,k,O),h=new Y([],D,0,A,T);//static_init_done = true;
}/* ===========================================================================
 * Initialize a new block.
 */function tr(t){var e;/* iterates over tree elements *//* Initialize the trees. */for(e=0;e<E;e++)t.dyn_ltree[2*e]=0;for(e=0;e<k;e++)t.dyn_dtree[2*e]=0;for(e=0;e<A;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*L]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */function tn(t){t.bi_valid>8?V(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */function ti(t,e,r,n)//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{tn(t),n&&(V(t,r),V(t,~r)),//  while (len--) {
//    put_byte(s, *buf++);
//  }
u.arraySet(t.pending_buf,t.window,e,r,t.pending),t.pending+=r}/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */function to(t,e,r,n){var i=2*e,o=2*r;return t[i]<t[o]||t[i]===t[o]&&n[e]<=n[r]}/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */function ta(t,e,r)//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{for(var n=t.heap[r],i=r<<1;/* Exit if v is smaller than both sons */i<=t.heap_len&&(i<t.heap_len&&to(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!to(e,n,t.heap[i],t.depth));)/* Exchange v with the smallest son */t.heap[r]=t.heap[i],r=i,/* And continue down the tree, setting j to the left son of k */i<<=1;t.heap[r]=n}// inlined manually
// var SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */function ts(t,e,r)//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{var n,i,o,a,s=0;/* running index in l_buf */if(0!==t.last_lit)do n=t.pending_buf[t.d_buf+2*s]<<8|t.pending_buf[t.d_buf+2*s+1],i=t.pending_buf[t.l_buf+s],s++,0===n?J(t,i,e):(J(t,/* Here, lc is the match length - MIN_MATCH */(o=Z[i])+x+1,e),0!==(a=U[o])&&X(t,i-=G[o],a),//Assert (code < D_CODES, "bad d_code");
J(t,o=W(--n),r),0!==(a=B[o])&&X(t,n-=H[o],a));while(s<t.last_lit)J(t,L,e)}/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */function tf(t,e)//    tree_desc *desc; /* the tree descriptor */
{var r,n,i,o=e.dyn_tree,a=e.stat_desc.static_tree,s=e.stat_desc.has_stree,f=e.stat_desc.elems,h=-1;for(r=0,/* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */t.heap_len=0,t.heap_max=I;r<f;r++)0!==o[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):o[2*r+1]=0;/* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */for(;t.heap_len<2;)o[2*(i=t.heap[++t.heap_len]=h<2?++h:0)]=1,t.depth[i]=0,t.opt_len--,s&&(t.static_len-=a[2*i+1]/*.Len*/);/* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */for(e.max_code=h,r=t.heap_len>>1/*int /2*/;r>=1;r--)ta(t,o,r);/* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */i=f;do //pqremove(s, tree, n);  /* n = node of least frequency */
/*** pqremove ***/r=t.heap[1/*SMALLEST*/],t.heap[1/*SMALLEST*/]=t.heap[t.heap_len--],ta(t,o,1/*SMALLEST*/),/***/n=t.heap[1/*SMALLEST*/],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=n,/* Create a new node father of n and m */o[2*i]=o[2*r]+o[2*n]/*.Freq*/,t.depth[i]=(t.depth[r]>=t.depth[n]?t.depth[r]:t.depth[n])+1,o[2*r+1]=o[2*n+1]=i,/* and insert the new node in the heap */t.heap[1/*SMALLEST*/]=i++,ta(t,o,1/*SMALLEST*/);while(t.heap_len>=2)t.heap[--t.heap_max]=t.heap[1/*SMALLEST*/],/* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */Q(t,e),/* The field len is now set, we can generate the bit codes */tt(o,h,t.bl_count)}/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */function th(t,e,r)//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{var n,i,o=-1,a=e[1]/*.Len*/,s=0,f=7,h=4;/* last emitted length */for(0===a&&(f=138,h=3),e[(r+1)*2+1]=65535,n=0;n<=r;n++)i=a,a=e[(n+1)*2+1]/*.Len*/,++s<f&&i===a||(s<h?t.bl_tree[2*i]+=s:0!==i?(i!==o&&t.bl_tree[2*i]++,t.bl_tree[2*P]++):s<=10?t.bl_tree[2*j]++:t.bl_tree[2*R]++,s=0,o=i,0===a?(f=138,h=3):i===a?(f=6,h=3):(f=7,h=4))}/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */function tu(t,e,r)//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{var n,i,o=-1,a=e[1]/*.Len*/,s=0,f=7,h=4;/* last emitted length */for(0===a&&(f=138,h=3),n=0;n<=r;n++)if(i=a,a=e[(n+1)*2+1]/*.Len*/,!(++s<f)||i!==a){if(s<h)do J(t,i,t.bl_tree);while(0!=--s)else 0!==i?(i!==o&&(J(t,i,t.bl_tree),s--),//Assert(count >= 3 && count <= 6, " 3_6?");
J(t,P,t.bl_tree),X(t,s-3,2)):s<=10?(J(t,j,t.bl_tree),X(t,s-3,3)):(J(t,R,t.bl_tree),X(t,s-11,7));s=0,o=i,0===a?(f=138,h=3):i===a?(f=6,h=3):(f=7,h=4)}}/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */function tc(t){var e;/* index of last bit length code of non zero freq *//* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   *//* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */for(/* Determine the bit length frequencies for literal and distance trees */th(t,t.dyn_ltree,t.l_desc.max_code),th(t,t.dyn_dtree,t.d_desc.max_code),/* Build the bit length tree: */tf(t,t.bl_desc),e=A-1;e>=3&&0===t.bl_tree[2*C[e]+1];e--);//Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
//        s->opt_len, s->static_len));
return(/* Update opt_len to include the bit length tree and counts */t.opt_len+=3*(e+1)+5+5+4,e)}/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */function tl(t,e,r,n)//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{var i;/* index in bl_order */for(//Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
//Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
//        "too many codes");
//Tracev((stderr, "\nbl counts: "));
X(t,e-257,5),X(t,r-1,5),X(t,n-4,4),i=0;i<n;i++)X(t,t.bl_tree[2*C[i]+1],3);//Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
tu(t,t.dyn_ltree,e-1),//Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
tu(t,t.dyn_dtree,r-1);//Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */function tp(t){/* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */var e,r=4093624447;/* Check for non-textual ("black-listed") bytes. */for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return l;/* Check for textual ("white-listed") bytes. */if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return p;for(e=32;e<x;e++)if(0!==t.dyn_ltree[2*e])return p;/* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */return l}g(H);var td=!1;/* ===========================================================================
 * Send a stored block
 */function tg(t,e,r,n)//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{X(t,(_<<1)+(n?1:0),3),ti(t,e,r,!0)}/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */function t_(t){X(t,m<<1,3),J(t,L,F),$(t)}/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */function tm(t,e,r,n)//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{var i,o,a=0;/* index of last bit length code of non zero freq */t.level>0?(t.strm.data_type===d&&(t.strm.data_type=tp(t)),/* Construct the literal and distance trees */tf(t,t.l_desc),// Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
//        s->static_len));
tf(t,t.d_desc),// Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
//        s->static_len));
/* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     *//* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */a=tc(t),/* Determine the best encoding. Compute the block lengths in bytes. */i=t.opt_len+3+7>>>3,(o=t.static_len+3+7>>>3)<=i&&(i=o)):i=o=r+5,r+4<=i&&-1!==e?/* 4: two words for the lengths *//* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */tg(t,e,r,n):t.strategy===c||o===i?(X(t,(m<<1)+(n?1:0),3),ts(t,F,z)):(X(t,(b<<1)+(n?1:0),3),tl(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),ts(t,t.dyn_ltree,t.dyn_dtree)),// Assert (s->compressed_len == s->bits_sent, "bad compressed size");
/* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */tr(t),n&&tn(t);// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
}/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */function tb(t,e,r)//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif
return(//var out_length, in_length, dcode;
t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?/* lc is the unmatched char */t.dyn_ltree[2*r]++:(t.matches++,/* Here, lc is the match length - MIN_MATCH */e--,//Assert((ush)dist < (ush)MAX_DIST(s) &&
//       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
//       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
t.dyn_ltree[(Z[r]+x+1)*2]++,t.dyn_dtree[2*W(e)]++),t.last_lit===t.lit_bufsize-1);/* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */}r=/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */function(t){td||(te(),td=!0),t.l_desc=new q(t.dyn_ltree,s),t.d_desc=new q(t.dyn_dtree,f),t.bl_desc=new q(t.bl_tree,h),t.bi_buf=0,t.bi_valid=0,/* Initialize the first block of the first file: */tr(t)},n=tg,i=tm,o=tb,a=t_}),parcelRequire.register("b9saU",function(t,e){// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function r(t,e,r,n){for(var i=65535&t|0,o=t>>>16&65535|0,a=0;0!==r;){// Set limit ~ twice less than 5552, to keep
// s2 in 31-bits, because we force signed ints.
// in other case %= will fail.
a=r>2e3?2e3:r,r-=a;do o=o+(i=i+e[n++]|0)|0;while(--a)i%=65521,o%=65521}return i|o<<16|0}t.exports=r}),parcelRequire.register("6D1Jv",function(t,e){// Create table on load. Just 255 signed longs. Not a problem.
var r=// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here
function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();function n(t,e,n,i){var o=r,a=i+n;t^=-1;for(var s=i;s<a;s++)t=t>>>8^o[(t^e[s])&255];return -1^t;// >>> 0;
}t.exports=n}),parcelRequire.register("6HEnc",function(t,e){// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
t.exports={2:"need dictionary",/* Z_NEED_DICT       2  */1:"stream end",/* Z_STREAM_END      1  */0:"",/* Z_OK              0  */"-1":"file error",/* Z_ERRNO         (-1) */"-2":"stream error",/* Z_STREAM_ERROR  (-2) */"-3":"data error",/* Z_DATA_ERROR    (-3) */"-4":"insufficient memory",/* Z_MEM_ERROR     (-4) */"-5":"buffer error",/* Z_BUF_ERROR     (-5) */"-6":"incompatible version"/* Z_VERSION_ERROR (-6) */}}),parcelRequire.register("2oyGs",function(t,e){$parcel$export(t.exports,"inflateReset",function(){return r},function(t){return r=t}),$parcel$export(t.exports,"inflateInit2",function(){return n},function(t){return n=t}),$parcel$export(t.exports,"inflate",function(){return i},function(t){return i=t}),$parcel$export(t.exports,"inflateEnd",function(){return o},function(t){return o=t}),$parcel$export(t.exports,"inflateGetHeader",function(){return a},function(t){return a=t}),$parcel$export(t.exports,"inflateSetDictionary",function(){return s},function(t){return s=t});var r,n,i,o,a,s,f,h,u=parcelRequire("j5hbz"),c=parcelRequire("b9saU"),l=parcelRequire("6D1Jv"),p=parcelRequire("3MPga"),d=parcelRequire("jAOhf"),g=0,_=1,m=2,b=4,v=5,y=6,w=0,x=1,E=2,k=-2,A=-3,I=-4,O=-5,S=8,T=1,L=2,P=3,j=4,R=5,U=6,B=7,D=8,C=9,N=10,F=11,z=12,M=13,Z=14,G=15,H=16,Y=17,q=18,W=19,V=20,X=21,J=22,K=23,$=24,Q=25,tt=26,te=27,tr=28,tn=29,ti=30,to=31,ta=852,ts=592;function tf(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function th(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,// TODO: may be {}
this.head=null,/* sliding window */this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,/* bit accumulator */this.hold=0,this.bits=0,/* for string and stored block copying */this.length=0,this.offset=0,/* for table and code decoding */this.extra=0,/* fixed and dynamic code tables */this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,/* dynamic table building */this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),/*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  *///this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function tu(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=T,e.last=0,e.havedict=0,e.dmax=32768,e.head=null/*Z_NULL*/,e.hold=0,e.bits=0,//state.lencode = state.distcode = state.next = state.codes;
e.lencode=e.lendyn=new u.Buf32(ta),e.distcode=e.distdyn=new u.Buf32(ts),e.sane=1,e.back=-1,w):k}function tc(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,tu(t)):k}function tl(t,e){var r,n;return /* get the state */t&&t.state?(n=t.state,e<0?(r=0,e=-e):(r=(e>>4)+1,e<48&&(e&=15)),e&&(e<8||e>15))?k:(null!==n.window&&n.wbits!==e&&(n.window=null),/* update state and reset the rest of it */n.wrap=r,n.wbits=e,tc(t)):k}function tp(t,e){var r,n;return t?(//strm.msg = Z_NULL;                 /* in case we return an error */
n=new th,//if (state === Z_NULL) return Z_MEM_ERROR;
//Tracev((stderr, "inflate: allocated\n"));
t.state=n,n.window=null/*Z_NULL*/,(r=tl(t,e))!==w&&(t.state=null/*Z_NULL*/),r):k}/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */var td=!0;function tg(t){/* build fixed huffman tables if first call (may not be thread safe) */if(td){var e;for(f=new u.Buf32(512),h=new u.Buf32(32),/* literal/length table */e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(d(_,t.lens,0,288,f,0,t.work,{bits:9}),/* distance table */e=0;e<32;)t.lens[e++]=5;d(m,t.lens,0,32,h,0,t.work,{bits:5}),/* do this just once */td=!1}t.lencode=f,t.lenbits=9,t.distcode=h,t.distbits=5}/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */function t_(t,e,r,n){var i,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new u.Buf8(o.wsize)),n>=o.wsize?(u.arraySet(o.window,e,r-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((i=o.wsize-o.wnext)>n&&(i=n),//zmemcpy(state->window + state->wnext, end - copy, dist);
u.arraySet(o.window,e,r-n,i,o.wnext),(n-=i)?(//zmemcpy(state->window, end - copy, copy);
u.arraySet(o.window,e,r-n,n,0),o.wnext=n,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0}function tm(t,e){var r,n,i,o,a,s,f,h,ta,ts,th,tu,tc,tl,tp,td,tm,tb,tv,ty,tw,tx,tE,tk,tA=0,tI=new u.Buf8(4),tO=/* permutation of code lengths */[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];/* current decoding table entry */if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return k;(r=t.state).mode===z&&(r.mode=M),/* skip check *///--- LOAD() ---
a=t.next_out,i=t.output,f=t.avail_out,o=t.next_in,n=t.input,s=t.avail_in,h=r.hold,ta=r.bits,//---
ts=s,th=f,tx=w;t:for(;;)switch(r.mode){case T:if(0===r.wrap){r.mode=M;break}//=== NEEDBITS(16);
for(;ta<16;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
if(2&r.wrap&&35615===h){r.check=0/*crc32(0L, Z_NULL, 0)*/,//=== CRC2(state.check, hold);
tI[0]=255&h,tI[1]=h>>>8&255,r.check=l(r.check,tI,2,0),//===//
//=== INITBITS();
h=0,ta=0,//===//
r.mode=L;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||/* check if zlib header allowed */(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",r.mode=ti;break}if((15&h)!==S){t.msg="unknown compression method",r.mode=ti;break}if(//--- DROPBITS(4) ---//
h>>>=4,ta-=4,//---//
tw=(15&h)+8,0===r.wbits)r.wbits=tw;else if(tw>r.wbits){t.msg="invalid window size",r.mode=ti;break}r.dmax=1<<tw,//Tracev((stderr, "inflate:   zlib header ok\n"));
t.adler=r.check=1/*adler32(0L, Z_NULL, 0)*/,r.mode=512&h?N:z,//=== INITBITS();
h=0,ta=0;break;case L://=== NEEDBITS(16); */
for(;ta<16;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}if(//===//
r.flags=h,(255&r.flags)!==S){t.msg="unknown compression method",r.mode=ti;break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=ti;break}r.head&&(r.head.text=h>>8&1),512&r.flags&&(//=== CRC2(state.check, hold);
tI[0]=255&h,tI[1]=h>>>8&255,r.check=l(r.check,tI,2,0)),//=== INITBITS();
h=0,ta=0,//===//
r.mode=P;/* falls through */case P://=== NEEDBITS(32); */
for(;ta<32;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}r.head&&(r.head.time=h),512&r.flags&&(//=== CRC4(state.check, hold)
tI[0]=255&h,tI[1]=h>>>8&255,tI[2]=h>>>16&255,tI[3]=h>>>24&255,r.check=l(r.check,tI,4,0)),//=== INITBITS();
h=0,ta=0,//===//
r.mode=j;/* falls through */case j://=== NEEDBITS(16); */
for(;ta<16;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}r.head&&(r.head.xflags=255&h,r.head.os=h>>8),512&r.flags&&(//=== CRC2(state.check, hold);
tI[0]=255&h,tI[1]=h>>>8&255,r.check=l(r.check,tI,2,0)),//=== INITBITS();
h=0,ta=0,//===//
r.mode=R;/* falls through */case R:if(1024&r.flags){//=== NEEDBITS(16); */
for(;ta<16;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
r.length=h,r.head&&(r.head.extra_len=h),512&r.flags&&(//=== CRC2(state.check, hold);
tI[0]=255&h,tI[1]=h>>>8&255,r.check=l(r.check,tI,2,0)),//=== INITBITS();
h=0,ta=0;//===//
}else r.head&&(r.head.extra=null/*Z_NULL*/);r.mode=U;/* falls through */case U:if(1024&r.flags&&((tu=r.length)>s&&(tu=s),tu&&(r.head&&(tw=r.head.extra_len-r.length,r.head.extra||(r.head.extra=Array(r.head.extra_len)),u.arraySet(r.head.extra,n,o,// - no need for additional size check
tu,/*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/tw)),512&r.flags&&(r.check=l(r.check,n,tu,o)),s-=tu,o+=tu,r.length-=tu),r.length))break t;r.length=0,r.mode=B;/* falls through */case B:if(2048&r.flags){if(0===s)break t;tu=0;do // TODO: 2 or 1 bytes?
tw=n[o+tu++],r.head&&tw&&r.length<65536/*state.head.name_max*/&&(r.head.name+=String.fromCharCode(tw));while(tw&&tu<s)if(512&r.flags&&(r.check=l(r.check,n,tu,o)),s-=tu,o+=tu,tw)break t}else r.head&&(r.head.name=null);r.length=0,r.mode=D;/* falls through */case D:if(4096&r.flags){if(0===s)break t;tu=0;do tw=n[o+tu++],r.head&&tw&&r.length<65536/*state.head.comm_max*/&&(r.head.comment+=String.fromCharCode(tw));while(tw&&tu<s)if(512&r.flags&&(r.check=l(r.check,n,tu,o)),s-=tu,o+=tu,tw)break t}else r.head&&(r.head.comment=null);r.mode=C;/* falls through */case C:if(512&r.flags){//=== NEEDBITS(16); */
for(;ta<16;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
if(h!==(65535&r.check)){t.msg="header crc mismatch",r.mode=ti;break}//=== INITBITS();
h=0,ta=0;//===//
}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=z;break;case N://=== NEEDBITS(32); */
for(;ta<32;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
t.adler=r.check=tf(h),//=== INITBITS();
h=0,ta=0,//===//
r.mode=F;/* falls through */case F:if(0===r.havedict)//---
return(//--- RESTORE() ---
t.next_out=a,t.avail_out=f,t.next_in=o,t.avail_in=s,r.hold=h,r.bits=ta,E);t.adler=r.check=1/*adler32(0L, Z_NULL, 0)*/,r.mode=z;/* falls through */case z:if(e===v||e===y)break t;/* falls through */case M:if(r.last){//--- BYTEBITS() ---//
h>>>=7&ta,ta-=7&ta,//---//
r.mode=te;break}//=== NEEDBITS(3); */
for(;ta<3;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//---//
switch(//===//
r.last=1/*BITS(1)*/&h,ta-=1,3&//--- DROPBITS(1) ---//
(h>>>=1)){case 0:/* stored block *///Tracev((stderr, "inflate:     stored block%s\n",
//        state.last ? " (last)" : ""));
r.mode=Z;break;case 1:if(/* fixed block */tg(r),//Tracev((stderr, "inflate:     fixed codes block%s\n",
//        state.last ? " (last)" : ""));
r.mode=V,e===y){//--- DROPBITS(2) ---//
h>>>=2,ta-=2;break t}break;case 2:/* dynamic block *///Tracev((stderr, "inflate:     dynamic codes block%s\n",
//        state.last ? " (last)" : ""));
r.mode=Y;break;case 3:t.msg="invalid block type",r.mode=ti}//--- DROPBITS(2) ---//
h>>>=2,ta-=2;break;case Z://---//
//=== NEEDBITS(32); */
for(//--- BYTEBITS() ---// /* go to byte boundary */
h>>>=7&ta,ta-=7&ta;ta<32;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",r.mode=ti;break}if(r.length=65535&h,//Tracev((stderr, "inflate:       stored length %u\n",
//        state.length));
//=== INITBITS();
h=0,ta=0,//===//
r.mode=G,e===y)break t;/* falls through */case G:r.mode=H;/* falls through */case H:if(tu=r.length){if(tu>s&&(tu=s),tu>f&&(tu=f),0===tu)break t;//--- zmemcpy(put, next, copy); ---
u.arraySet(i,n,o,tu,a),//---//
s-=tu,o+=tu,f-=tu,a+=tu,r.length-=tu;break}//Tracev((stderr, "inflate:       stored end\n"));
r.mode=z;break;case Y://=== NEEDBITS(14); */
for(;ta<14;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//---//
//#ifndef PKZIP_BUG_WORKAROUND
if(//===//
r.nlen=(31&h)+257,//--- DROPBITS(5) ---//
h>>>=5,ta-=5,//---//
r.ndist=(31&h)+1,//--- DROPBITS(5) ---//
h>>>=5,ta-=5,//---//
r.ncode=(15&h)+4,//--- DROPBITS(4) ---//
h>>>=4,ta-=4,r.nlen>286||r.ndist>30){t.msg="too many length or distance symbols",r.mode=ti;break}//#endif
//Tracev((stderr, "inflate:       table sizes ok\n"));
r.have=0,r.mode=q;/* falls through */case q:for(;r.have<r.ncode;){//=== NEEDBITS(3);
for(;ta<3;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
r.lens[tO[r.have++]]=7&h,//--- DROPBITS(3) ---//
h>>>=3,ta-=3;//---//
}for(;r.have<19;)r.lens[tO[r.have++]]=0;if(// We have separate tables & no pointers. 2 commented lines below not needed.
//state.next = state.codes;
//state.lencode = state.next;
// Switch to use dynamic table
r.lencode=r.lendyn,r.lenbits=7,tE={bits:r.lenbits},tx=d(g,r.lens,0,19,r.lencode,0,r.work,tE),r.lenbits=tE.bits,tx){t.msg="invalid code lengths set",r.mode=ti;break}//Tracev((stderr, "inflate:       code lengths ok\n"));
r.have=0,r.mode=W;/* falls through */case W:for(;r.have<r.nlen+r.ndist;){for(;tp=(tA=r.lencode[h&(1<<r.lenbits)-1])>>>24,td=tA>>>16&255,tm=65535&tA,!(tp<=ta);){//--- PULLBYTE() ---//
if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8;//---//
}if(tm<16)//--- DROPBITS(here.bits) ---//
h>>>=tp,ta-=tp,//---//
r.lens[r.have++]=tm;else{if(16===tm){for(//=== NEEDBITS(here.bits + 2);
tk=tp+2;ta<tk;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//---//
if(//===//
//--- DROPBITS(here.bits) ---//
h>>>=tp,ta-=tp,0===r.have){t.msg="invalid bit length repeat",r.mode=ti;break}tw=r.lens[r.have-1],tu=3+(3&h),//--- DROPBITS(2) ---//
h>>>=2,ta-=2;//---//
}else if(17===tm){for(//=== NEEDBITS(here.bits + 3);
tk=tp+3;ta<tk;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
//--- DROPBITS(here.bits) ---//
h>>>=tp,ta-=tp,//---//
tw=0,tu=3+(7&h),//--- DROPBITS(3) ---//
h>>>=3,ta-=3;//---//
}else{for(//=== NEEDBITS(here.bits + 7);
tk=tp+7;ta<tk;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
//--- DROPBITS(here.bits) ---//
h>>>=tp,ta-=tp,//---//
tw=0,tu=11+(127&h),//--- DROPBITS(7) ---//
h>>>=7,ta-=7;//---//
}if(r.have+tu>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=ti;break}for(;tu--;)r.lens[r.have++]=tw}}/* handle error breaks in while */if(r.mode===ti)break;/* check for end-of-block code (better have one) */if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=ti;break}// state.lencode = state.next;
if(/* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */r.lenbits=9,tE={bits:r.lenbits},tx=d(_,r.lens,0,r.nlen,r.lencode,0,r.work,tE),// We have separate tables & no pointers. 2 commented lines below not needed.
// state.next_index = opts.table_index;
r.lenbits=tE.bits,tx){t.msg="invalid literal/lengths set",r.mode=ti;break}// state.distcode = state.next;
if(r.distbits=6,//state.distcode.copy(state.codes);
// Switch to use dynamic table
r.distcode=r.distdyn,tE={bits:r.distbits},tx=d(m,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,tE),// We have separate tables & no pointers. 2 commented lines below not needed.
// state.next_index = opts.table_index;
r.distbits=tE.bits,tx){t.msg="invalid distances set",r.mode=ti;break}if(//Tracev((stderr, 'inflate:       codes ok\n'));
r.mode=V,e===y)break t;/* falls through */case V:r.mode=X;/* falls through */case X:if(s>=6&&f>=258){//--- RESTORE() ---
t.next_out=a,t.avail_out=f,t.next_in=o,t.avail_in=s,r.hold=h,r.bits=ta,//---
p(t,th),//--- LOAD() ---
a=t.next_out,i=t.output,f=t.avail_out,o=t.next_in,n=t.input,s=t.avail_in,h=r.hold,ta=r.bits,r.mode===z&&(r.back=-1);break}for(r.back=0;tp=(tA=r.lencode[h&(1<<r.lenbits)-1])>>>24,td=tA>>>16&255,tm=65535&tA,!(tp<=ta);){//--- PULLBYTE() ---//
if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8;//---//
}if(td&&(240&td)==0){for(tb=tp,tv=td,ty=tm;tp=(tA=r.lencode[ty+((h&(1<<tb+tv)-1)>>tb)])>>>24,td=tA>>>16&255,tm=65535&tA,!(tb+tp<=ta);){//--- PULLBYTE() ---//
if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8;//---//
}//--- DROPBITS(last.bits) ---//
h>>>=tb,ta-=tb,//---//
r.back+=tb}if(//--- DROPBITS(here.bits) ---//
h>>>=tp,ta-=tp,//---//
r.back+=tp,r.length=tm,0===td){//Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
//        "inflate:         literal '%c'\n" :
//        "inflate:         literal 0x%02x\n", here.val));
r.mode=tt;break}if(32&td){//Tracevv((stderr, "inflate:         end of block\n"));
r.back=-1,r.mode=z;break}if(64&td){t.msg="invalid literal/length code",r.mode=ti;break}r.extra=15&td,r.mode=J;/* falls through */case J:if(r.extra){for(//=== NEEDBITS(state.extra);
tk=r.extra;ta<tk;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
r.length+=h&(1<<r.extra)-1/*BITS(state.extra)*/,//--- DROPBITS(state.extra) ---//
h>>>=r.extra,ta-=r.extra,//---//
r.back+=r.extra}//Tracevv((stderr, "inflate:         length %u\n", state.length));
r.was=r.length,r.mode=K;/* falls through */case K:for(;tp=(tA=r.distcode[h&(1<<r.distbits)-1])>>>24,td=tA>>>16&255,tm=65535&tA,!(tp<=ta);){//--- PULLBYTE() ---//
if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8;//---//
}if((240&td)==0){for(tb=tp,tv=td,ty=tm;tp=(tA=r.distcode[ty+((h&(1<<tb+tv)-1)>>tb)])>>>24,td=tA>>>16&255,tm=65535&tA,!(tb+tp<=ta);){//--- PULLBYTE() ---//
if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8;//---//
}//--- DROPBITS(last.bits) ---//
h>>>=tb,ta-=tb,//---//
r.back+=tb}if(//--- DROPBITS(here.bits) ---//
h>>>=tp,ta-=tp,//---//
r.back+=tp,64&td){t.msg="invalid distance code",r.mode=ti;break}r.offset=tm,r.extra=15&td,r.mode=$;/* falls through */case $:if(r.extra){for(//=== NEEDBITS(state.extra);
tk=r.extra;ta<tk;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
r.offset+=h&(1<<r.extra)-1/*BITS(state.extra)*/,//--- DROPBITS(state.extra) ---//
h>>>=r.extra,ta-=r.extra,//---//
r.back+=r.extra}//#ifdef INFLATE_STRICT
if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=ti;break}//#endif
//Tracevv((stderr, "inflate:         distance %u\n", state.offset));
r.mode=Q;/* falls through */case Q:if(0===f)break t;if(tu=th-f,r.offset>tu){if((tu=r.offset-tu)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=ti;break}tu>r.wnext?(tu-=r.wnext,tc=r.wsize-tu):tc=r.wnext-tu,tu>r.length&&(tu=r.length),tl=r.window}else tl=i,tc=a-r.offset,tu=r.length;tu>f&&(tu=f),f-=tu,r.length-=tu;do i[a++]=tl[tc++];while(--tu)0===r.length&&(r.mode=X);break;case tt:if(0===f)break t;i[a++]=r.length,f--,r.mode=X;break;case te:if(r.wrap){//=== NEEDBITS(32);
for(;ta<32;){if(0===s)break t;s--,// Use '|' instead of '+' to make sure that result is signed
h|=n[o++]<<ta,ta+=8}// NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
if(//===//
th-=f,t.total_out+=th,r.total+=th,th&&(t.adler=r.check=/*UPDATE(state.check, put - _out, _out);*/r.flags?l(r.check,i,th,a-th):c(r.check,i,th,a-th)),th=f,(r.flags?h:tf(h))!==r.check){t.msg="incorrect data check",r.mode=ti;break}//=== INITBITS();
h=0,ta=0;//===//
//Tracev((stderr, "inflate:   check matches trailer\n"));
}r.mode=tr;/* falls through */case tr:if(r.wrap&&r.flags){//=== NEEDBITS(32);
for(;ta<32;){if(0===s)break t;s--,h+=n[o++]<<ta,ta+=8}//===//
if(h!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=ti;break}//=== INITBITS();
h=0,ta=0;//===//
//Tracev((stderr, "inflate:   length matches trailer\n"));
}r.mode=tn;/* falls through */case tn:tx=x;break t;case ti:tx=A;break t;case to:return I;default:return k}return(//---
(// inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
/*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   *///--- RESTORE() ---
t.next_out=a,t.avail_out=f,t.next_in=o,t.avail_in=s,r.hold=h,r.bits=ta,(r.wsize||th!==t.avail_out&&r.mode<ti&&(r.mode<te||e!==b))&&t_(t,t.output,t.next_out,th-t.avail_out))?(r.mode=to,I):(ts-=t.avail_in,th-=t.avail_out,t.total_in+=ts,t.total_out+=th,r.total+=th,r.wrap&&th&&(t.adler=r.check=/*UPDATE(state.check, strm.next_out - _out, _out);*/r.flags?l(r.check,i,th,t.next_out-th):c(r.check,i,th,t.next_out-th)),t.data_type=r.bits+(r.last?64:0)+(r.mode===z?128:0)+(r.mode===V||r.mode===G?256:0),(0===ts&&0===th||e===b)&&tx===w&&(tx=O),tx))}function tb(t){if(!t||!t.state/*|| strm->zfree == (free_func)0*/)return k;var e=t.state;return e.window&&(e.window=null),t.state=null,w}function tv(t,e){var r;return /* check state */t&&t.state&&(2&(r=t.state).wrap)!=0?(/* save header structure */r.head=e,e.done=!1,w):k}function ty(t,e){var r,n,i=e.length;return /* check state */t/* == Z_NULL */&&t.state/* == Z_NULL */&&(0===(r=t.state).wrap||r.mode===F)?r.mode===F&&/* dictid = adler32(dictid, dictionary, dictLength); */(n=c(n=1,e,i,0))!==r.check?A:t_(t,e,i,i)?(r.mode=to,I):(r.havedict=1,w):k}r=tc,n=tp,i=tm,o=tb,a=tv,s=ty}),parcelRequire.register("3MPga",function(t,e){// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// See state defs from inflate.js
var r=30,n=12;/* got a data error -- remain here until reset *//*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */t.exports=function(t,e){var i,o,a,s,f,h,u,c,l,p,d,g,_,m,b,v,y,w,x,E,k,A,I,O,S;/* copy state to local variables */i=t.state,//here = state.here;
o=t.next_in,O=t.input,a=o+(t.avail_in-5),s=t.next_out,S=t.output,f=s-(e-t.avail_out),h=s+(t.avail_out-257),//#ifdef INFLATE_STRICT
u=i.dmax,//#endif
c=i.wsize,l=i.whave,p=i.wnext,d=i.window,g=i.hold,_=i.bits,m=i.lencode,b=i.distcode,v=(1<<i.lenbits)-1,y=(1<<i.distbits)-1;/* decode literals and length/distances until end-of-block or not enough
     input data or output space */e:do for(_<15&&(g+=O[o++]<<_,_+=8,g+=O[o++]<<_,_+=8),w=m[g&v];;){if(g>>>=x=w>>>24/*here.bits*/,_-=x,0==(x=w>>>16&255/*here.op*/))//        "inflate:         literal '%c'\n" :
//        "inflate:         literal 0x%02x\n", here.val));
S[s++]=65535/*here.val*/&w;else if(16&x)for(E=65535/*here.val*/&w,(x&=15)&&(_<x&&(g+=O[o++]<<_,_+=8),E+=g&(1<<x)-1,g>>>=x,_-=x),_<15&&(g+=O[o++]<<_,_+=8,g+=O[o++]<<_,_+=8),w=b[g&y];;){if(g>>>=x=w>>>24/*here.bits*/,_-=x,16&(x=w>>>16&255/*here.op*/)){//#ifdef INFLATE_STRICT
if(k=65535/*here.val*/&w,_<(x&=15)&&(g+=O[o++]<<_,(_+=8)<x&&(g+=O[o++]<<_,_+=8)),(k+=g&(1<<x)-1)>u){t.msg="invalid distance too far back",i.mode=r;break e}if(//#endif
g>>>=x,_-=x,k>//Tracevv((stderr, "inflate:         distance %u\n", dist));
(x=s-f)){if((x=k-x)>l&&i.sane){t.msg="invalid distance too far back",i.mode=r;break e}if(A=0,I=d,0===p){if(A+=c-x,x<E){E-=x;do S[s++]=d[A++];while(--x)A=s-k,I=S}}else if(p<x){if(A+=c+p-x,(x-=p)<E){E-=x;do S[s++]=d[A++];while(--x)if(A=0,p<E){E-=x=p;do S[s++]=d[A++];while(--x)A=s-k,I=S}}}else if(A+=p-x,x<E){E-=x;do S[s++]=d[A++];while(--x)A=s-k,I=S}for(;E>2;)S[s++]=I[A++],S[s++]=I[A++],S[s++]=I[A++],E-=3;E&&(S[s++]=I[A++],E>1&&(S[s++]=I[A++]))}else{A=s-k;/* copy direct from output */do S[s++]=S[A++],S[s++]=S[A++],S[s++]=S[A++],E-=3;while(E>2)E&&(S[s++]=S[A++],E>1&&(S[s++]=S[A++]))}}else if((64&x)==0){w=b[(65535&w)+(g&(1<<x)-1)];continue}else{t.msg="invalid distance code",i.mode=r;break e}break;// need to emulate goto via "continue"
}else if((64&x)==0){w=m[(65535&w)+(g&(1<<x)-1)];continue}else if(32&x){//Tracevv((stderr, "inflate:         end of block\n"));
i.mode=n;break e}else{t.msg="invalid literal/length code",i.mode=r;break e}break;// need to emulate goto via "continue"
}while(o<a&&s<h)o-=/* return unused bytes (on entry, bits < 8, so in won't go too far back) */E=_>>3,_-=E<<3,g&=(1<<_)-1,/* update state and return */t.next_in=o,t.next_out=s,t.avail_in=o<a?5+(a-o):5-(o-a),t.avail_out=s<h?257+(h-s):257-(s-h),i.hold=g,i.bits=_}}),parcelRequire.register("jAOhf",function(t,e){var r=parcelRequire("j5hbz"),n=15,i=852,o=592,a=0,s=1,f=2,h=[/* Length codes 257..285 base */3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[/* Length codes 257..285 extra */16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[/* Distance codes 0..29 base */1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[/* Distance codes 0..29 extra */16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(t,e,p,d,g,_,m,b){var v,y,w,x,E,k,A,I,O,S=b.bits,T=0,L=0,P=0,j=0,R=0,U=0,B=0,D=0,C=0,N=0,F=null,z=0,M=new r.Buf16(n+1),Z=new r.Buf16(n+1),G=null,H=0;/*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   *//* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */for(T=0;T<=n;T++)M[T]=0;for(L=0;L<d;L++)M[e[p+L]]++;for(/* bound code lengths, force root to be within code lengths */R=S,j=n;j>=1&&0===M[j];j--);if(R>j&&(R=j),0===j)return(//table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
//table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
//table.val[opts.table_index++] = 0;   //here.val = (var short)0;
g[_++]=20971520,//table.op[opts.table_index] = 64;
//table.bits[opts.table_index] = 1;
//table.val[opts.table_index++] = 0;
g[_++]=20971520,b.bits=1,0);/* no symbols, but wait for decoding to report error */for(P=1;P<j&&0===M[P];P++);for(R<P&&(R=P),/* check for an over-subscribed or incomplete set of lengths */D=1,T=1;T<=n;T++)if(D<<=1,(D-=M[T])<0)return -1;if(D>0&&(t===a||1!==j))return -1;/* incomplete set */for(T=1,/* generate offsets into symbol table for each length for sorting */Z[1]=0;T<n;T++)Z[T+1]=Z[T]+M[T];/* sort symbols by length, by symbol order within each length */for(L=0;L<d;L++)0!==e[p+L]&&(m[Z[e[p+L]]++]=L);/* check available table space */if(t===a?(F=G=m,k=19):t===s?(F=h,z-=257,G=u,H-=257,k=256):(F=c,G=l,k=-1),/* initialize opts for loop */N=0,L=0,T=P,E=_,U=R,B=0,w=-1,x=(C=1<<R)-1,t===s&&C>i||t===f&&C>o)return 1;/* process all codes and make table entries */for(;;){/* create table entry */A=T-B,m[L]<k?(I=0,O=m[L]):m[L]>k?(I=G[H+m[L]],O=F[z+m[L]]):(I=96,O=0),/* replicate for those indices with low len bits equal to huff */v=1<<T-B,P=y=1<<U;do g[E+(N>>B)+(y-=v)]=A<<24|I<<16|O|0;while(0!==y)for(/* backwards increment the len-bit code huff */v=1<<T-1;N&v;)v>>=1;if(0!==v?(N&=v-1,N+=v):N=0,/* go to next symbol, update count, len */L++,0==--M[T]){if(T===j)break;T=e[p+m[L]]}/* create new sub-table if needed */if(T>R&&(N&x)!==w){for(0===B&&(B=R),/* increment past last table */E+=P,D=1<</* determine length of next table */(U=T-B);U+B<j&&!((D-=M[U+B])<=0);)U++,D<<=1;if(/* check for enough space */C+=1<<U,t===s&&C>i||t===f&&C>o)return 1;/*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/g[/* point entry in root table to sub-table */w=N&x]=R<<24|U<<16|E-_|0}}return 0!==N&&//table.bits[next + huff] = len - drop;
//table.val[next + huff] = 0;
(g[E+N]=T-B<<24|4194304),/* set return parameters *///opts.table_index += used;
b.bits=R,0}}),parcelRequire.register("5hjao",function(t,e){// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
t.exports={/* Allowed flush values; see deflate() and inflate() below for details */Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,/* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,//Z_MEM_ERROR:     -4,
Z_BUF_ERROR:-5,//Z_VERSION_ERROR: -6,
/* compression levels */Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,/* Possible values of the data_type field (though see inflate()) */Z_BINARY:0,Z_TEXT:1,//Z_ASCII:                1, // = Z_TEXT (deprecated)
Z_UNKNOWN:2,/* The deflate compression method */Z_DEFLATED:8}}),parcelRequire.register("eIMUU",function(t,e){var r=parcelRequire("4Dxou"),n=parcelRequire("igx3v").Buffer,i=parcelRequire("jcBbL"),o=parcelRequire("bBGGK"),a=t.exports=function(){o.call(this),this._buffers=[],this._buffered=0,this._reads=[],this._paused=!1,this._encoding="utf8",this.writable=!0};i.inherits(a,o),a.prototype.read=function(t,e){this._reads.push({length:Math.abs(t),allowLess:t<0,func:e}),r.nextTick((function(){this._process(),this._paused&&this._reads.length>0&&(this._paused=!1,this.emit("drain"))}).bind(this))},a.prototype.write=function(t,e){var r;return this.writable?(r=n.isBuffer(t)?t:new n(t,e||this._encoding),this._buffers.push(r),this._buffered+=r.length,this._process(),this._reads&&0===this._reads.length&&(this._paused=!0),this.writable&&!this._paused):(this.emit("error",Error("Stream not writable")),!1)},a.prototype.end=function(t,e){t&&this.write(t,e),this.writable=!1,this._buffers&&(0===this._buffers.length?this._end():(this._buffers.push(null),this._process()))},a.prototype.destroySoon=a.prototype.end,a.prototype._end=function(){this._reads.length>0&&this.emit("error",Error("Unexpected end of input")),this.destroy()},a.prototype.destroy=function(){this._buffers&&(this.writable=!1,this._reads=null,this._buffers=null,this.emit("close"))},a.prototype._processReadAllowingLess=function(t){// ok there is any data so that we can satisfy this request
this._reads.shift();// == read
// first we need to peek into first buffer
var e=this._buffers[0];// ok there is more data than we need
e.length>t.length?(this._buffered-=t.length,this._buffers[0]=e.slice(t.length),t.func.call(this,e.slice(0,t.length))):(// ok this is less than maximum length so use it all
this._buffered-=e.length,this._buffers.shift(),t.func.call(this,e))},a.prototype._processRead=function(t){this._reads.shift();// create buffer for all data
for(var e=0,r=0,i=new n(t.length);e<t.length;){var o=this._buffers[r++],a=Math.min(o.length,t.length-e);o.copy(i,e,0,a),e+=a,a!==o.length&&(this._buffers[--r]=o.slice(a))}r>0&&this._buffers.splice(0,r),this._buffered-=t.length,t.func.call(this,i)},a.prototype._process=function(){try{// as long as there is any data and read requests
for(;this._buffered>0&&this._reads&&this._reads.length>0;){var t=this._reads[0];// read any data (but no more than length)
if(t.allowLess)this._processReadAllowingLess(t);else if(this._buffered>=t.length)this._processRead(t);else break}this._buffers&&!this.writable&&this._end()}catch(t){this.emit("error",t)}}}),parcelRequire.register("gRfVr",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("jcBbL"),i=parcelRequire("eIMUU"),o=parcelRequire("c268a"),a=t.exports=function(t){i.call(this);var e=[],n=this;this._filter=new o(t,{read:this.read.bind(this),write:function(t){e.push(t)},complete:function(){n.emit("complete",r.concat(e))}}),this._filter.start()};n.inherits(a,i)}),parcelRequire.register("c268a",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("7ojhP"),i=parcelRequire("Jxf9q");function o(t,e,r){var n=t*e;return 8!==r&&(n=Math.ceil(n/(8/r))),n}var a=t.exports=function(t,e){var r=t.width,i=t.height,a=t.interlace,s=t.bpp,f=t.depth;if(this.read=e.read,this.write=e.write,this.complete=e.complete,this._imageIndex=0,this._images=[],a)for(var h=n.getImagePasses(r,i),u=0;u<h.length;u++)this._images.push({byteWidth:o(h[u].width,s,f),height:h[u].height,lineIndex:0});else this._images.push({byteWidth:o(r,s,f),height:i,lineIndex:0});8===f?this._xComparison=s:16===f?this._xComparison=2*s:this._xComparison=1};a.prototype.start=function(){this.read(this._images[this._imageIndex].byteWidth+1,this._reverseFilterLine.bind(this))},a.prototype._unFilterType1=function(t,e,r){for(var n=this._xComparison,i=n-1,o=0;o<r;o++){var a=t[1+o],s=o>i?e[o-n]:0;e[o]=a+s}},a.prototype._unFilterType2=function(t,e,r){for(var n=this._lastLine,i=0;i<r;i++){var o=t[1+i],a=n?n[i]:0;e[i]=o+a}},a.prototype._unFilterType3=function(t,e,r){for(var n=this._xComparison,i=n-1,o=this._lastLine,a=0;a<r;a++){var s=t[1+a],f=o?o[a]:0,h=Math.floor(((a>i?e[a-n]:0)+f)/2);e[a]=s+h}},a.prototype._unFilterType4=function(t,e,r){for(var n=this._xComparison,o=n-1,a=this._lastLine,s=0;s<r;s++){var f=t[1+s],h=a?a[s]:0,u=i(s>o?e[s-n]:0,h,s>o&&a?a[s-n]:0);e[s]=f+u}},a.prototype._reverseFilterLine=function(t){var e,n=t[0],i=this._images[this._imageIndex],o=i.byteWidth;if(0===n)e=t.slice(1,o+1);else switch(e=new r(o),n){case 1:this._unFilterType1(t,e,o);break;case 2:this._unFilterType2(t,e,o);break;case 3:this._unFilterType3(t,e,o);break;case 4:this._unFilterType4(t,e,o);break;default:throw Error("Unrecognised filter type - "+n)}this.write(e),i.lineIndex++,i.lineIndex>=i.height?(this._lastLine=null,this._imageIndex++,i=this._images[this._imageIndex]):this._lastLine=e,i?this.read(i.byteWidth+1,this._reverseFilterLine.bind(this)):(this._lastLine=null,this.complete())}}),parcelRequire.register("7ojhP",function(t,e){$parcel$export(t.exports,"getImagePasses",function(){return r},function(t){return r=t}),$parcel$export(t.exports,"getInterlaceIterator",function(){return n},function(t){return n=t});// Adam 7
//   0 1 2 3 4 5 6 7
// 0 x 6 4 6 x 6 4 6
// 1 7 7 7 7 7 7 7 7
// 2 5 6 5 6 5 6 5 6
// 3 7 7 7 7 7 7 7 7
// 4 3 6 4 6 3 6 4 6
// 5 7 7 7 7 7 7 7 7
// 6 5 6 5 6 5 6 5 6
// 7 7 7 7 7 7 7 7 7
var r,n,i=[{x:[0],y:[0]},{x:[4],y:[0]},{x:[0,4],y:[4]},{x:[2,6],y:[0,4]},{x:[0,2,4,6],y:[2,6]},{x:[1,3,5,7],y:[0,2,4,6]},{x:[0,1,2,3,4,5,6,7],y:[1,3,5,7]}];r=function(t,e){for(var r=[],n=t%8,o=e%8,a=(t-n)/8,s=(e-o)/8,f=0;f<i.length;f++){for(var h=i[f],u=a*h.x.length,c=s*h.y.length,l=0;l<h.x.length&&h.x[l]<n;l++)u++;for(l=0;l<h.y.length&&h.y[l]<o;l++)c++;u>0&&c>0&&r.push({width:u,height:c,index:f})}return r},n=function(t){return function(e,r,n){var o=e%i[n].x.length,a=(e-o)/i[n].x.length*8+i[n].x[o],s=r%i[n].y.length;return 4*a+((r-s)/i[n].y.length*8+i[n].y[s])*t*4}}}),parcelRequire.register("Jxf9q",function(t,e){t.exports=function(t,e,r){var n=t+e-r,i=Math.abs(n-t),o=Math.abs(n-e),a=Math.abs(n-r);return i<=o&&i<=a?t:o<=a?e:r}}),parcelRequire.register("98Iby",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("5kdHX"),i=parcelRequire("kz6Jg"),o=t.exports=function(t,e){this._options=t,t.checkCRC=!1!==t.checkCRC,this._hasIHDR=!1,this._hasIEND=!1,this._emittedHeadersFinished=!1,// input flags/metadata
this._palette=[],this._colorType=0,this._chunks={},this._chunks[n.TYPE_IHDR]=this._handleIHDR.bind(this),this._chunks[n.TYPE_IEND]=this._handleIEND.bind(this),this._chunks[n.TYPE_IDAT]=this._handleIDAT.bind(this),this._chunks[n.TYPE_PLTE]=this._handlePLTE.bind(this),this._chunks[n.TYPE_tRNS]=this._handleTRNS.bind(this),this._chunks[n.TYPE_gAMA]=this._handleGAMA.bind(this),this.read=e.read,this.error=e.error,this.metadata=e.metadata,this.gamma=e.gamma,this.transColor=e.transColor,this.palette=e.palette,this.parsed=e.parsed,this.inflateData=e.inflateData,this.finished=e.finished,this.simpleTransparency=e.simpleTransparency,this.headersFinished=e.headersFinished||function(){}};o.prototype.start=function(){this.read(n.PNG_SIGNATURE.length,this._parseSignature.bind(this))},o.prototype._parseSignature=function(t){for(var e=n.PNG_SIGNATURE,r=0;r<e.length;r++)if(t[r]!==e[r]){this.error(Error("Invalid file signature"));return}this.read(8,this._parseChunkBegin.bind(this))},o.prototype._parseChunkBegin=function(t){for(var e=t.readUInt32BE(0),o=t.readUInt32BE(4),a="",s=4;s<8;s++)a+=String.fromCharCode(t[s]);// chunk content length
var f=!!(32&t[4]);//    priv = Boolean(data[5] & 0x20), // or public
//    safeToCopy = Boolean(data[7] & 0x20); // or unsafe
if(!this._hasIHDR&&o!==n.TYPE_IHDR){this.error(Error("Expected IHDR on beggining"));return}if(this._crc=new i,this._crc.write(new r(a)),this._chunks[o])return this._chunks[o](e);if(!f){this.error(Error("Unsupported critical chunk type "+a));return}this.read(e+4,this._skipChunk.bind(this))},o.prototype._skipChunk=function(){this.read(8,this._parseChunkBegin.bind(this))},o.prototype._handleChunkEnd=function(){this.read(4,this._parseChunkEnd.bind(this))},o.prototype._parseChunkEnd=function(t){var e=t.readInt32BE(0),r=this._crc.crc32();// check CRC
if(this._options.checkCRC&&r!==e){this.error(Error("Crc error - "+e+" - "+r));return}this._hasIEND||this.read(8,this._parseChunkBegin.bind(this))},o.prototype._handleIHDR=function(t){this.read(t,this._parseIHDR.bind(this))},o.prototype._parseIHDR=function(t){this._crc.write(t);var e=t.readUInt32BE(0),r=t.readUInt32BE(4),i=t[8],o=t[9],a=t[10],s=t[11],f=t[12];// console.log('    width', width, 'height', height,
//     'depth', depth, 'colorType', colorType,
//     'compr', compr, 'filter', filter, 'interlace', interlace
// );
if(8!==i&&4!==i&&2!==i&&1!==i&&16!==i){this.error(Error("Unsupported bit depth "+i));return}if(!(o in n.COLORTYPE_TO_BPP_MAP)){this.error(Error("Unsupported color type"));return}if(0!==a){this.error(Error("Unsupported compression method"));return}if(0!==s){this.error(Error("Unsupported filter method"));return}if(0!==f&&1!==f){this.error(Error("Unsupported interlace method"));return}this._colorType=o;var h=n.COLORTYPE_TO_BPP_MAP[this._colorType];this._hasIHDR=!0,this.metadata({width:e,height:r,depth:i,interlace:!!f,palette:!!(o&n.COLORTYPE_PALETTE),color:!!(o&n.COLORTYPE_COLOR),alpha:!!(o&n.COLORTYPE_ALPHA),bpp:h,colorType:o}),this._handleChunkEnd()},o.prototype._handlePLTE=function(t){this.read(t,this._parsePLTE.bind(this))},o.prototype._parsePLTE=function(t){this._crc.write(t);// console.log('Palette:', entries);
for(var e=Math.floor(t.length/3),r=0;r<e;r++)this._palette.push([t[3*r],t[3*r+1],t[3*r+2],255]);this.palette(this._palette),this._handleChunkEnd()},o.prototype._handleTRNS=function(t){this.simpleTransparency(),this.read(t,this._parseTRNS.bind(this))},o.prototype._parseTRNS=function(t){// palette
if(this._crc.write(t),this._colorType===n.COLORTYPE_PALETTE_COLOR){if(0===this._palette.length){this.error(Error("Transparency chunk must be after palette"));return}if(t.length>this._palette.length){this.error(Error("More transparent colors than palette size"));return}for(var e=0;e<t.length;e++)this._palette[e][3]=t[e];this.palette(this._palette)}this._colorType===n.COLORTYPE_GRAYSCALE&&this.transColor([t.readUInt16BE(0)]),this._colorType===n.COLORTYPE_COLOR&&this.transColor([t.readUInt16BE(0),t.readUInt16BE(2),t.readUInt16BE(4)]),this._handleChunkEnd()},o.prototype._handleGAMA=function(t){this.read(t,this._parseGAMA.bind(this))},o.prototype._parseGAMA=function(t){this._crc.write(t),this.gamma(t.readUInt32BE(0)/n.GAMMA_DIVISION),this._handleChunkEnd()},o.prototype._handleIDAT=function(t){this._emittedHeadersFinished||(this._emittedHeadersFinished=!0,this.headersFinished()),this.read(-t,this._parseIDAT.bind(this,t))},o.prototype._parseIDAT=function(t,e){if(this._crc.write(e),this._colorType===n.COLORTYPE_PALETTE_COLOR&&0===this._palette.length)throw Error("Expected palette not found");this.inflateData(e);var r=t-e.length;r>0?this._handleIDAT(r):this._handleChunkEnd()},o.prototype._handleIEND=function(t){this.read(t,this._parseIEND.bind(this))},o.prototype._parseIEND=function(t){this._crc.write(t),this._hasIEND=!0,this._handleChunkEnd(),this.finished&&this.finished()}}),parcelRequire.register("5kdHX",function(t,e){t.exports={PNG_SIGNATURE:[137,80,78,71,13,10,26,10],TYPE_IHDR:1229472850,TYPE_IEND:1229278788,TYPE_IDAT:1229209940,TYPE_PLTE:1347179589,TYPE_tRNS:1951551059,TYPE_gAMA:1732332865,// color-type bits
COLORTYPE_GRAYSCALE:0,COLORTYPE_PALETTE:1,COLORTYPE_COLOR:2,COLORTYPE_ALPHA:4,// color-type combinations
COLORTYPE_PALETTE_COLOR:3,COLORTYPE_COLOR_ALPHA:6,COLORTYPE_TO_BPP_MAP:{0:1,2:3,3:1,4:2,6:4},GAMMA_DIVISION:1e5}}),parcelRequire.register("kz6Jg",function(t,e){var r=[];!function(){for(var t=0;t<256;t++){for(var e=t,n=0;n<8;n++)1&e?e=3988292384^e>>>1:e>>>=1;r[t]=e}}();var n=t.exports=function(){this._crc=-1};n.prototype.write=function(t){for(var e=0;e<t.length;e++)this._crc=r[(this._crc^t[e])&255]^this._crc>>>8;return!0},n.prototype.crc32=function(){return -1^this._crc},n.crc32=function(t){for(var e=-1,n=0;n<t.length;n++)e=r[(e^t[n])&255]^e>>>8;return -1^e}}),parcelRequire.register("1TRUf",function(t,e){$parcel$export(t.exports,"dataToBitMap",function(){return r},function(t){return r=t});var r,n=parcelRequire("igx3v").Buffer,i=parcelRequire("7ojhP"),o=[// 0 - dummy entry
function(){},// 1 - L
// 0: 0, 1: 0, 2: 0, 3: 0xff
function(t,e,r,n){if(n===e.length)throw Error("Ran out of data");var i=e[n];t[r]=i,t[r+1]=i,t[r+2]=i,t[r+3]=255},// 2 - LA
// 0: 0, 1: 0, 2: 0, 3: 1
function(t,e,r,n){if(n+1>=e.length)throw Error("Ran out of data");var i=e[n];t[r]=i,t[r+1]=i,t[r+2]=i,t[r+3]=e[n+1]},// 3 - RGB
// 0: 0, 1: 1, 2: 2, 3: 0xff
function(t,e,r,n){if(n+2>=e.length)throw Error("Ran out of data");t[r]=e[n],t[r+1]=e[n+1],t[r+2]=e[n+2],t[r+3]=255},// 4 - RGBA
// 0: 0, 1: 1, 2: 2, 3: 3
function(t,e,r,n){if(n+3>=e.length)throw Error("Ran out of data");t[r]=e[n],t[r+1]=e[n+1],t[r+2]=e[n+2],t[r+3]=e[n+3]}],a=[// 0 - dummy entry
function(){},// 1 - L
// 0: 0, 1: 0, 2: 0, 3: 0xff
function(t,e,r,n){var i=e[0];t[r]=i,t[r+1]=i,t[r+2]=i,t[r+3]=n},// 2 - LA
// 0: 0, 1: 0, 2: 0, 3: 1
function(t,e,r){var n=e[0];t[r]=n,t[r+1]=n,t[r+2]=n,t[r+3]=e[1]},// 3 - RGB
// 0: 0, 1: 1, 2: 2, 3: 0xff
function(t,e,r,n){t[r]=e[0],t[r+1]=e[1],t[r+2]=e[2],t[r+3]=n},// 4 - RGBA
// 0: 0, 1: 1, 2: 2, 3: 3
function(t,e,r){t[r]=e[0],t[r+1]=e[1],t[r+2]=e[2],t[r+3]=e[3]}];function s(t,e){var r=[],n=0;function i(){if(n===t.length)throw Error("Ran out of data");var i,o,a,s,f,h,u,c,l=t[n];switch(n++,e){default:throw Error("unrecognised depth");case 16:u=t[n],n++,r.push((l<<8)+u);break;case 4:u=15&l,c=l>>4,r.push(c,u);break;case 2:f=3&l,h=l>>2&3,u=l>>4&3,c=l>>6&3,r.push(c,u,h,f);break;case 1:i=1&l,o=l>>1&1,a=l>>2&1,s=l>>3&1,f=l>>4&1,h=l>>5&1,u=l>>6&1,c=l>>7&1,r.push(c,u,h,f,s,a,o,i)}}return{get:function(t){for(;r.length<t;)i();var e=r.slice(0,t);return r=r.slice(t),e},resetAfterLine:function(){r.length=0},end:function(){if(n!==t.length)throw Error("extra data found")}}}function f(t,e,r,n,i,a){for(var s=t.width,f=t.height,h=t.index,u=0;u<f;u++)for(var c=0;c<s;c++){var l=r(c,u,h);o[n](e,i,l,a),a+=n}return a}function h(t,e,r,n,i,o){for(var s=t.width,f=t.height,h=t.index,u=0;u<f;u++){for(var c=0;c<s;c++){var l=i.get(n),p=r(c,u,h);a[n](e,l,p,o)}i.resetAfterLine()}}r=function(t,e){var r,o,a,u=e.width,c=e.height,l=e.depth,p=e.bpp,d=e.interlace;if(8!==l)var g=s(t,l);r=l<=8?new n(u*c*4):new Uint16Array(u*c*4);var _=Math.pow(2,l)-1,m=0;if(d)o=i.getImagePasses(u,c),a=i.getInterlaceIterator(u,c);else{var b=0;a=function(){var t=b;return b+=4,t},o=[{width:u,height:c}]}for(var v=0;v<o.length;v++)8===l?m=f(o[v],r,a,p,t,m):h(o[v],r,a,p,g,_);if(8===l){if(m!==t.length)throw Error("extra data found")}else g.end();return r}}),parcelRequire.register("6FmiX",function(t,e){var r=parcelRequire("igx3v").Buffer;function n(t,e,r,n,i){// use values from palette
for(var o=0,a=0;a<n;a++)for(var s=0;s<r;s++){var f=i[t[o]];if(!f)throw Error("index "+t[o]+" not in palette");for(var h=0;h<4;h++)e[o+h]=f[h];o+=4}}function i(t,e,r,n,i){for(var o=0,a=0;a<n;a++)for(var s=0;s<r;s++){var f=!1;if(1===i.length?i[0]===t[o]&&(f=!0):i[0]===t[o]&&i[1]===t[o+1]&&i[2]===t[o+2]&&(f=!0),f)for(var h=0;h<4;h++)e[o+h]=0;o+=4}}function o(t,e,r,n,i){for(var o=255,a=Math.pow(2,i)-1,s=0,f=0;f<n;f++)for(var h=0;h<r;h++){for(var u=0;u<4;u++)e[s+u]=Math.floor(t[s+u]*o/a+.5);s+=4}}t.exports=function(t,e){var a=e.depth,s=e.width,f=e.height,h=e.colorType,u=e.transColor,c=e.palette,l=t;return 3===h?n(t,l,s,f,c):(u&&i(t,l,s,f,u),8!==a&&(16===a&&(l=new r(s*f*4)),o(t,l,s,f,a))),l}}),parcelRequire.register("4MrH6",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("jcBbL"),i=parcelRequire("bBGGK"),o=parcelRequire("5kdHX"),a=parcelRequire("8Bzgl"),s=t.exports=function(t){i.call(this);var e=t||{};this._packer=new a(e),this._deflate=this._packer.createDeflate(),this.readable=!0};n.inherits(s,i),s.prototype.pack=function(t,e,n,i){// Signature
this.emit("data",new r(o.PNG_SIGNATURE)),this.emit("data",this._packer.packIHDR(e,n)),i&&this.emit("data",this._packer.packGAMA(i));var a=this._packer.filterData(t,e,n);// compress it
this._deflate.on("error",this.emit.bind(this,"error")),this._deflate.on("data",(function(t){this.emit("data",this._packer.packIDAT(t))}).bind(this)),this._deflate.on("end",(function(){this.emit("data",this._packer.packIEND()),this.emit("end")}).bind(this)),this._deflate.end(a)}}),parcelRequire.register("8Bzgl",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("5kdHX"),i=parcelRequire("kz6Jg"),o=parcelRequire("7c532"),a=parcelRequire("d3kfn"),s=parcelRequire("dWb30"),f=t.exports=function(t){if(this._options=t,t.deflateChunkSize=t.deflateChunkSize||32768,t.deflateLevel=null!=t.deflateLevel?t.deflateLevel:9,t.deflateStrategy=null!=t.deflateStrategy?t.deflateStrategy:3,t.inputHasAlpha=null==t.inputHasAlpha||t.inputHasAlpha,t.deflateFactory=t.deflateFactory||s.createDeflate,t.bitDepth=t.bitDepth||8,// This is outputColorType
t.colorType="number"==typeof t.colorType?t.colorType:n.COLORTYPE_COLOR_ALPHA,t.inputColorType="number"==typeof t.inputColorType?t.inputColorType:n.COLORTYPE_COLOR_ALPHA,-1===[n.COLORTYPE_GRAYSCALE,n.COLORTYPE_COLOR,n.COLORTYPE_COLOR_ALPHA,n.COLORTYPE_ALPHA].indexOf(t.colorType))throw Error("option color type:"+t.colorType+" is not supported at present");if(-1===[n.COLORTYPE_GRAYSCALE,n.COLORTYPE_COLOR,n.COLORTYPE_COLOR_ALPHA,n.COLORTYPE_ALPHA].indexOf(t.inputColorType))throw Error("option input color type:"+t.inputColorType+" is not supported at present");if(8!==t.bitDepth&&16!==t.bitDepth)throw Error("option bit depth:"+t.bitDepth+" is not supported at present")};f.prototype.getDeflateOptions=function(){return{chunkSize:this._options.deflateChunkSize,level:this._options.deflateLevel,strategy:this._options.deflateStrategy}},f.prototype.createDeflate=function(){return this._options.deflateFactory(this.getDeflateOptions())},f.prototype.filterData=function(t,e,r){// convert to correct format for filtering (e.g. right bpp and bit depth)
var i=o(t,e,r,this._options),s=n.COLORTYPE_TO_BPP_MAP[this._options.colorType];return a(i,e,r,this._options,s)},f.prototype._packChunk=function(t,e){var n=e?e.length:0,o=new r(n+12);return o.writeUInt32BE(n,0),o.writeUInt32BE(t,4),e&&e.copy(o,8),o.writeInt32BE(i.crc32(o.slice(4,o.length-4)),o.length-4),o},f.prototype.packGAMA=function(t){var e=new r(4);return e.writeUInt32BE(Math.floor(t*n.GAMMA_DIVISION),0),this._packChunk(n.TYPE_gAMA,e)},f.prototype.packIHDR=function(t,e){var i=new r(13);return i.writeUInt32BE(t,0),i.writeUInt32BE(e,4),i[8]=this._options.bitDepth,i[9]=this._options.colorType,i[10]=0,i[11]=0,i[12]=0,this._packChunk(n.TYPE_IHDR,i)},f.prototype.packIDAT=function(t){return this._packChunk(n.TYPE_IDAT,t)},f.prototype.packIEND=function(){return this._packChunk(n.TYPE_IEND,null)}}),parcelRequire.register("7c532",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("5kdHX");t.exports=function(t,e,i,o){var a=-1!==[n.COLORTYPE_COLOR_ALPHA,n.COLORTYPE_ALPHA].indexOf(o.colorType);if(o.colorType===o.inputColorType){var s=function(){var t=new ArrayBuffer(2);// Int16Array uses the platform's endianness.
return new DataView(t).setInt16(0,256,!0),256!==new Int16Array(t)[0]}();// If no need to convert to grayscale and alpha is present/absent in both, take a fast route
if(8===o.bitDepth||16===o.bitDepth&&s)return t}// map to a UInt16 array if data is 16bit, fix endianness below
var f=16!==o.bitDepth?t:new Uint16Array(t.buffer),h=255,u=n.COLORTYPE_TO_BPP_MAP[o.inputColorType];4!==u||o.inputHasAlpha||(u=3);var c=n.COLORTYPE_TO_BPP_MAP[o.colorType];16===o.bitDepth&&(h=65535,c*=2);var l=new r(e*i*c),p=0,d=0,g=o.bgColor||{};function _(){var t,e,r,i=h;switch(o.inputColorType){case n.COLORTYPE_COLOR_ALPHA:i=f[p+3],t=f[p],e=f[p+1],r=f[p+2];break;case n.COLORTYPE_COLOR:t=f[p],e=f[p+1],r=f[p+2];break;case n.COLORTYPE_ALPHA:i=f[p+1],e=t=f[p],r=t;break;case n.COLORTYPE_GRAYSCALE:e=t=f[p],r=t;break;default:throw Error("input color type:"+o.inputColorType+" is not supported at present")}return o.inputHasAlpha&&!a&&(i/=h,t=Math.min(Math.max(Math.round((1-i)*g.red+i*t),0),h),e=Math.min(Math.max(Math.round((1-i)*g.green+i*e),0),h),r=Math.min(Math.max(Math.round((1-i)*g.blue+i*r),0),h)),{red:t,green:e,blue:r,alpha:i}}void 0===g.red&&(g.red=h),void 0===g.green&&(g.green=h),void 0===g.blue&&(g.blue=h);for(var m=0;m<i;m++)for(var b=0;b<e;b++){var v=_(f,p);switch(o.colorType){case n.COLORTYPE_COLOR_ALPHA:case n.COLORTYPE_COLOR:8===o.bitDepth?(l[d]=v.red,l[d+1]=v.green,l[d+2]=v.blue,a&&(l[d+3]=v.alpha)):(l.writeUInt16BE(v.red,d),l.writeUInt16BE(v.green,d+2),l.writeUInt16BE(v.blue,d+4),a&&l.writeUInt16BE(v.alpha,d+6));break;case n.COLORTYPE_ALPHA:case n.COLORTYPE_GRAYSCALE:// Convert to grayscale and alpha
var y=(v.red+v.green+v.blue)/3;8===o.bitDepth?(l[d]=y,a&&(l[d+1]=v.alpha)):(l.writeUInt16BE(y,d),a&&l.writeUInt16BE(v.alpha,d+2));break;default:throw Error("unrecognised color Type "+o.colorType)}p+=u,d+=c}return l}}),parcelRequire.register("d3kfn",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("Jxf9q"),i={0:function(t,e,r,n,i){for(var o=0;o<r;o++)n[i+o]=t[e+o]},1:function(t,e,r,n,i,o){for(var a=0;a<r;a++){var s=a>=o?t[e+a-o]:0,f=t[e+a]-s;n[i+a]=f}},2:function(t,e,r,n,i){for(var o=0;o<r;o++){var a=e>0?t[e+o-r]:0,s=t[e+o]-a;n[i+o]=s}},3:function(t,e,r,n,i,o){for(var a=0;a<r;a++){var s=a>=o?t[e+a-o]:0,f=e>0?t[e+a-r]:0,h=t[e+a]-(s+f>>1);n[i+a]=h}},4:function(t,e,r,i,o,a){for(var s=0;s<r;s++){var f=s>=a?t[e+s-a]:0,h=e>0?t[e+s-r]:0,u=e>0&&s>=a?t[e+s-(r+a)]:0,c=t[e+s]-n(f,h,u);i[o+s]=c}}},o={0:function(t,e,r){for(var n=0,i=e+r,o=e;o<i;o++)n+=Math.abs(t[o]);return n},1:function(t,e,r,n){for(var i=0,o=0;o<r;o++){var a=o>=n?t[e+o-n]:0;i+=Math.abs(t[e+o]-a)}return i},2:function(t,e,r){for(var n=0,i=e+r,o=e;o<i;o++){var a=e>0?t[o-r]:0;n+=Math.abs(t[o]-a)}return n},3:function(t,e,r,n){for(var i=0,o=0;o<r;o++){var a=o>=n?t[e+o-n]:0,s=e>0?t[e+o-r]:0;i+=Math.abs(t[e+o]-(a+s>>1))}return i},4:function(t,e,r,i){for(var o=0,a=0;a<r;a++){var s=a>=i?t[e+a-i]:0,f=e>0?t[e+a-r]:0,h=e>0&&a>=i?t[e+a-(r+i)]:0;o+=Math.abs(t[e+a]-n(s,f,h))}return o}};t.exports=function(t,e,n,a,s){if("filterType"in a&&-1!==a.filterType){if("number"==typeof a.filterType)f=[a.filterType];else throw Error("unrecognised filter types")}else f=[0,1,2,3,4];16===a.bitDepth&&(s*=2);for(var f,h=e*s,u=0,c=0,l=new r((h+1)*n),p=f[0],d=0;d<n;d++){if(f.length>1)for(var g=1/0,_=0;_<f.length;_++){var m=o[f[_]](t,c,h,s);m<g&&(p=f[_],g=m)}l[u]=p,u++,i[p](t,c,h,l,u,s),u+=h,c+=h}return l}}),parcelRequire.register("6W96u",function(t,e){$parcel$export(t.exports,"read",function(){return r},function(t){return r=t}),$parcel$export(t.exports,"write",function(){return n},function(t){return n=t});var r,n,i=parcelRequire("2KA1E"),o=parcelRequire("4Swl8");r=function(t,e){return i(t,e||{})},n=function(t,e){return o(t,e)}}),parcelRequire.register("2KA1E",function(t,e){var r=parcelRequire("igx3v").Buffer,n=!0,i=parcelRequire("dWb30"),o=parcelRequire("ge6aA");i.deflateSync||(n=!1);var a=parcelRequire("byYXJ"),s=parcelRequire("1NqI8"),f=parcelRequire("98Iby"),h=parcelRequire("1TRUf"),u=parcelRequire("6FmiX");t.exports=function(t,e){if(!n)throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");function c(t){m=t}function l(t){b=t}function p(t){b.transColor=t}function d(t){b.palette=t}function g(){b.alpha=!0}function _(t){v=t}var m,b,v,y,w=[];function x(t){w.push(t)}var E=new a(t);if(new f(e,{read:E.read.bind(E),error:c,metadata:l,gamma:_,palette:d,transColor:p,inflateData:x,simpleTransparency:g}).start(),E.process(),m)throw m;//join together the inflate datas
var k=r.concat(w);if(w.length=0,b.interlace)y=i.inflateSync(k);else{var A=((b.width*b.bpp*b.depth+7>>3)+1)*b.height;y=o(k,{chunkSize:A,maxLength:A})}if(k=null,!y||!y.length)throw Error("bad png - invalid inflate data response");var I=s.process(y,b);k=null;var O=h.dataToBitMap(I,b);I=null;var S=u(O,b);return b.data=S,b.gamma=v||0,b}}),parcelRequire.register("ge6aA",function(t,e){var r=parcelRequire("4Dxou"),n=parcelRequire("igx3v"),i=n.Buffer,o=parcelRequire("hEPF9").ok,a=parcelRequire("dWb30"),s=parcelRequire("jcBbL"),n=parcelRequire("igx3v"),f=n.kMaxLength;function h(t){if(!(this instanceof h))return new h(t);t&&t.chunkSize<a.Z_MIN_CHUNK&&(t.chunkSize=a.Z_MIN_CHUNK),a.Inflate.call(this,t),// Node 8 --> 9 compatibility check
this._offset=void 0===this._offset?this._outOffset:this._offset,this._buffer=this._buffer||this._outBuffer,t&&null!=t.maxLength&&(this._maxLength=t.maxLength)}function u(t){return new h(t)}function c(t,e){e&&r.nextTick(e),t._handle&&(t._handle.close(),t._handle=null)}function l(t,e){if("string"==typeof e&&(e=i.from(e)),!(e instanceof i))throw TypeError("Not a string or buffer");var r=t._finishFlushFlag;return null==r&&(r=a.Z_FINISH),t._processChunk(e,r)}function p(t,e){return l(new h(e),t)}h.prototype._processChunk=function(t,e,r){if("function"==typeof r)return a.Inflate._processChunk.call(this,t,e,r);var n,s=this,h=t&&t.length,u=this._chunkSize-this._offset,l=this._maxLength,p=0,d=[],g=0;function _(t,e){if(!s._hadError){var r=u-e;if(o(r>=0,"have should not go down"),r>0){var n=s._buffer.slice(s._offset,s._offset+r);if(s._offset+=r,n.length>l&&(n=n.slice(0,l)),d.push(n),g+=n.length,0==(l-=n.length))return!1}return(0===e||s._offset>=s._chunkSize)&&(u=s._chunkSize,s._offset=0,s._buffer=i.allocUnsafe(s._chunkSize)),0===e&&(p+=h-t,h=t,!0)}}this.on("error",function(t){n=t}),o(this._handle,"zlib binding closed");do{var m=this._handle.writeSync(e,t,p,h,this._buffer,this._offset,u);// out_len
// Node 8 --> 9 compatibility check
m=m||this._writeState}while(!this._hadError&&_(m[0],m[1]))if(this._hadError)throw n;if(g>=f)throw c(this),RangeError("Cannot create final Buffer. It would be larger than 0x"+f.toString(16)+" bytes");var b=i.concat(d,g);return c(this),b},s.inherits(h,a.Inflate),t.exports=e=p,e.Inflate=h,e.createInflate=u,e.inflateSync=p}),parcelRequire.register("byYXJ",function(t,e){var r=t.exports=function(t){this._buffer=t,this._reads=[]};r.prototype.read=function(t,e){this._reads.push({length:Math.abs(t),allowLess:t<0,func:e})},r.prototype.process=function(){// as long as there is any data and read requests
for(;this._reads.length>0&&this._buffer.length;){var t=this._reads[0];if(this._buffer.length&&(this._buffer.length>=t.length||t.allowLess)){// ok there is any data so that we can satisfy this request
this._reads.shift();var e=this._buffer;this._buffer=e.slice(t.length),t.func.call(this,e.slice(0,t.length))}else break}return this._reads.length>0?Error("There are some read requests waitng on finished stream"):this._buffer.length>0?Error("unrecognised content at end of stream"):void 0}}),parcelRequire.register("1NqI8",function(t,e){$parcel$export(t.exports,"process",function(){return r},function(t){return r=t});var r,n=parcelRequire("igx3v").Buffer,i=parcelRequire("byYXJ"),o=parcelRequire("c268a");r=function(t,e){var r=[],a=new i(t);return new o(e,{read:a.read.bind(a),write:function(t){r.push(t)},complete:function(){}}).start(),a.process(),n.concat(r)}}),parcelRequire.register("4Swl8",function(t,e){var r=parcelRequire("igx3v").Buffer,n=!0,i=parcelRequire("dWb30");i.deflateSync||(n=!1);var o=parcelRequire("5kdHX"),a=parcelRequire("8Bzgl");t.exports=function(t,e){if(!n)throw Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");var s=e||{},f=new a(s),h=[];// Signature
h.push(new r(o.PNG_SIGNATURE)),// Header
h.push(f.packIHDR(t.width,t.height)),t.gamma&&h.push(f.packGAMA(t.gamma));var u=f.filterData(t.data,t.width,t.height),c=i.deflateSync(u,f.getDeflateOptions());if(u=null,!c||!c.length)throw Error("bad png - invalid compressed data response");return h.push(f.packIDAT(c)),// End
h.push(f.packIEND()),r.concat(h)}}),parcelRequire.register("gJbbI",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("3aFSS").GifReader;t.exports=function(t,e){var i=new n(r.from(t)),o=new Uint8Array(i.width*i.height*4);return i.decodeAndBlitFrameRGBA(0,o),{data:o,width:i.width,height:i.height}}}),parcelRequire.register("3aFSS",function(t,e){var r;function n(t){var e=0;// - Header (GIF87a or GIF89a).
if(71!==t[e++]||73!==t[e++]||70!==t[e++]||56!==t[e++]||(t[e++]+1&253)!=56||97!==t[e++])throw Error("Invalid GIF 87a/89a header.");// - Logical Screen Descriptor.
var r=t[e++]|t[e++]<<8,n=t[e++]|t[e++]<<8,o=t[e++],a=o>>7,s=1<<(7&o)+1;t[e++],t[e++];var f=null,h=null;a&&(f=e,h=s,e+=3*s);var u=!0,c=[],l=0,p=null,d=0,g=null;for(this.width=r,this.height=n;u&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:// Try if it's a Netscape block (with animation loop counter).
if(11!==t[e]||// 21 FF already read, check block size.
// NETSCAPE2.0
78==t[e+1]&&69==t[e+2]&&84==t[e+3]&&83==t[e+4]&&67==t[e+5]&&65==t[e+6]&&80==t[e+7]&&69==t[e+8]&&50==t[e+9]&&46==t[e+10]&&48==t[e+11]&&// Sub-block
3==t[e+12]&&1==t[e+13]&&0==t[e+16])e+=14,g=t[e++]|t[e++]<<8,e++;else for(e+=12;;){var _=t[e++];// Bad block size (ex: undefined from an out of bounds read).
if(!(_>=0))throw Error("Invalid block size");if(0===_)break;// 0 size is terminator
e+=_}break;case 249:if(4!==t[e++]||0!==t[e+4])throw Error("Invalid graphics extension block.");var m=t[e++];l=t[e++]|t[e++]<<8,p=t[e++],(1&m)==0&&(p=null),d=m>>2&7,e++;break;case 254:for(;;){var _=t[e++];// Bad block size (ex: undefined from an out of bounds read).
if(!(_>=0))throw Error("Invalid block size");if(0===_)break;// 0 size is terminator
// console.log(buf.slice(p, p+block_size).toString('ascii'));
e+=_}break;default:throw Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var b=t[e++]|t[e++]<<8,v=t[e++]|t[e++]<<8,y=t[e++]|t[e++]<<8,w=t[e++]|t[e++]<<8,x=t[e++],E=x>>7,k=x>>6&1,A=1<<(7&x)+1,I=f,O=h,S=!1;if(E){var S=!0;I=e,O=A,e+=3*A}var T=e;for(e++;;){var _=t[e++];// Bad block size (ex: undefined from an out of bounds read).
if(!(_>=0))throw Error("Invalid block size");if(0===_)break;// 0 size is terminator
e+=_}c.push({x:b,y:v,width:y,height:w,has_local_palette:S,palette_offset:I,palette_size:O,data_offset:T,data_length:e-T,transparent_index:p,interlaced:!!k,delay:l,disposal:d});break;case 59:u=!1;break;default:throw Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return c.length},this.loopCount=function(){return g},this.frameInfo=function(t){if(t<0||t>=c.length)throw Error("Frame index out of range.");return c[t]},this.decodeAndBlitFrameBGRA=function(e,n){var o=this.frameInfo(e),a=o.width*o.height,s=new Uint8Array(a);i(t,o.data_offset,s,a);var f=o.palette_offset,h=o.transparent_index;null===h&&(h=256);// We are possibly just blitting to a portion of the entire frame.
// That is a subrect within the framerect, so the additional pixels
// must be skipped over after we finished a scanline.
var u=o.width,c=r-u,l=u,p=(o.y*r+o.x)*4,d=((o.y+o.height)*r+o.x)*4,g=p,_=4*c;// Use scanstride to skip past the rows when interlacing.  This is skipping
// 7 rows for the first two passes, then 3 then 1.
!0===o.interlaced&&(_+=28*r);// Pass 1.
for(var m=8,b=0,v=s.length;b<v;++b){var y=s[b];if(0===l&&(g+=_,l=u,g>=d&&(_=4*c+4*r*(m-1),// interlaceskip / 2 * 4 is interlaceskip << 1.
g=p+(u+c)*(m<<1),m>>=1)),y===h)g+=4;else{var w=t[f+3*y],x=t[f+3*y+1],E=t[f+3*y+2];n[g++]=E,n[g++]=x,n[g++]=w,n[g++]=255}--l}},// I will go to copy and paste hell one day...
this.decodeAndBlitFrameRGBA=function(e,n){var o=this.frameInfo(e),a=o.width*o.height,s=new Uint8Array(a);i(t,o.data_offset,s,a);var f=o.palette_offset,h=o.transparent_index;null===h&&(h=256);// We are possibly just blitting to a portion of the entire frame.
// That is a subrect within the framerect, so the additional pixels
// must be skipped over after we finished a scanline.
var u=o.width,c=r-u,l=u,p=(o.y*r+o.x)*4,d=((o.y+o.height)*r+o.x)*4,g=p,_=4*c;// Use scanstride to skip past the rows when interlacing.  This is skipping
// 7 rows for the first two passes, then 3 then 1.
!0===o.interlaced&&(_+=28*r);// Pass 1.
for(var m=8,b=0,v=s.length;b<v;++b){var y=s[b];if(0===l&&(g+=_,l=u,g>=d&&(_=4*c+4*r*(m-1),// interlaceskip / 2 * 4 is interlaceskip << 1.
g=p+(u+c)*(m<<1),m>>=1)),y===h)g+=4;else{var w=t[f+3*y],x=t[f+3*y+1],E=t[f+3*y+2];n[g++]=w,n[g++]=x,n[g++]=E,n[g++]=255}--l}}}function i(t,e,r,n){for(var i=t[e++],o=1<<i,a=o+1,s=a+1,f=i+1,h=(1<<f)-1,u=0,c=0,l=0,p=t[e++],d=new Int32Array(4096),g=null;;){// Read up to two bytes, making sure we always 12-bits for max sized code.
for(;u<16&&0!==p// No more data to be read.
;)c|=t[e++]<<u,u+=8,1===p?p=t[e++]:--p;// TODO(deanm): We should never really get here, we should have received
// and EOI.
if(u<f)break;var _=c&h;// TODO(deanm): Maybe should check that the first code was a clear code,
// at least this is what you're supposed to do.  But actually our encoder
// now doesn't emit a clear code first anyway.
if(c>>=f,u-=f,_===o){// We don't actually have to clear the table.  This could be a good idea
// for greater error checking, but we don't really do any anyway.  We
// will just track it with next_code and overwrite old entries.
s=a+1,h=(1<<(f=i+1))-1,// Don't update prev_code ?
g=null;continue}if(_===a)break;for(// We have a similar situation as the decoder, where we want to store
// variable length entries (code table entries), but we want to do in a
// faster manner than an array of arrays.  The code below stores sort of a
// linked list within the code table, and then "chases" through it to
// construct the dictionary entries.  When a new entry is created, just the
// last byte is stored, and the rest (prefix) of the entry is only
// referenced by its table entry.  Then the code chases through the
// prefixes until it reaches a single byte code.  We have to chase twice,
// first to compute the length, and then to actually copy the data to the
// output (backwards, since we know the length).  The alternative would be
// storing something in an intermediate stack, but that doesn't make any
// more sense.  I implemented an approach where it also stored the length
// in the code table, although it's a bit tricky because you run out of
// bits (12 + 12 + 8), but I didn't measure much improvements (the table
// entries are generally not the long).  Even when I created benchmarks for
// very long table entries the complexity did not seem worth it.
// The code table stores the prefix entry in 12 bits and then the suffix
// byte in 8 bits, so each entry is 20 bits.
var m=_<s?_:g,b=0,v=m;v>o;)v=d[v]>>8,++b;var y=v;if(l+b+(m!==_?1:0)>n){console.log("Warning, gif stream longer than expected.");return}// Already have the first byte from the chase, might as well write it fast.
r[l++]=y;var w=l+=b;// Track pointer, writing backwards.
for(m!==_&&(r[l++]=y),v=m;b--;)v=d[v],r[--w]=255&v,v>>=8;null!==g&&s<4096&&(d[s++]=g<<8|y,s>=h+1&&f<12&&(++f,h=h<<1|1)),g=_}return l!==n&&console.log("Warning, gif stream shorter than expected."),r}$parcel$export(t.exports,"GifReader",function(){return r},function(t){return r=t});// CommonJS.
try{r=n}catch(t){}}),parcelRequire.register("audnS",function(t,e){var r=parcelRequire("9yxBW"),n=parcelRequire("5KUEL");function i(t,e){var i=r.decode(t);if(!i)throw Error("Error decoding jpeg");return{data:n(i.data),height:i.height,width:i.width}}t.exports=i}),parcelRequire.register("9yxBW",function(t,e){var r=parcelRequire("6C2jS"),n=parcelRequire("ig2VF");t.exports={encode:r,decode:n}}),parcelRequire.register("6C2jS",function(t,e){var r=parcelRequire("igx3v").Buffer;function n(t){var e,n,i,o,a,s=Math.floor,f=Array(64),h=Array(64),u=Array(64),c=Array(64),l=Array(65535),p=Array(65535),d=Array(64),g=Array(64),_=[],m=0,b=7,v=Array(64),y=Array(64),w=Array(64),x=Array(256),E=Array(2048),k=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],A=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],I=[0,1,2,3,4,5,6,7,8,9,10,11],O=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],S=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],T=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],L=[0,1,2,3,4,5,6,7,8,9,10,11],P=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],j=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function R(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],r=0;r<64;r++){var n=s((e[r]*t+50)/100);n<1?n=1:n>255&&(n=255),f[k[r]]=n}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;o<64;o++){var a=s((i[o]*t+50)/100);a<1?a=1:a>255&&(a=255),h[k[o]]=a}for(var l=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],p=0,d=0;d<8;d++)for(var g=0;g<8;g++)u[p]=1/(f[k[p]]*l[d]*l[g]*8),c[p]=1/(h[k[p]]*l[d]*l[g]*8),p++}function U(t,e){for(var r=0,n=0,i=[],o=1;o<=16;o++){for(var a=1;a<=t[o];a++)i[e[n]]=[],i[e[n]][0]=r,i[e[n]][1]=o,n++,r++;r*=2}return i}function B(){e=U(A,I),n=U(T,L),i=U(O,S),o=U(P,j)}function D(){for(var t=1,e=2,r=1;r<=15;r++){//Positive numbers
for(var n=t;n<e;n++)p[32767+n]=r,l[32767+n]=[],l[32767+n][1]=r,l[32767+n][0]=n;//Negative numbers
for(var i=-(e-1);i<=-t;i++)p[32767+i]=r,l[32767+i]=[],l[32767+i][1]=r,l[32767+i][0]=e-1+i;t<<=1,e<<=1}}function C(){for(var t=0;t<256;t++)E[t]=19595*t,E[t+256>>0]=38470*t,E[t+512>>0]=7471*t+32768,E[t+768>>0]=-11059*t,E[t+1024>>0]=-21709*t,E[t+1280>>0]=32768*t+8421375,E[t+1536>>0]=-27439*t,E[t+1792>>0]=-5329*t}// IO functions
function N(t){for(var e=t[0],r=t[1]-1;r>=0;)e&1<<r&&(m|=1<<b),r--,--b<0&&(255==m?(F(255),F(0)):F(m),b=7,m=0)}function F(t){//byteout.push(clt[value]); // write char directly instead of converting later
_.push(t)}function z(t){F(t>>8&255),F(255&t)}// DCT & quantization core
function M(t,e){/* Pass 1: process rows. */var r,n,i,o,a,s,f,h,u,c,l=0,p=8,g=64;for(u=0;u<p;++u){r=t[l],n=t[l+1],i=t[l+2],o=t[l+3],a=t[l+4],s=t[l+5],f=t[l+6];var _=r+(h=t[l+7]),m=r-h,b=n+f,v=n-f,y=i+s,w=i-s,x=o+a,E=o-a,k=_+x,A=_-x,I=b+y,O=b-y;t[l]=k+I,t[l+4]=k-I;var S=(O+A)*.707106781;/* c4 */t[l+2]=A+S,t[l+6]=A-S,/* Odd part */k=E+w,I=w+v;/* The rotator is modified from fig 4-8 to avoid extra negations. */var T=(k-(O=v+m))*.382683433,L=.5411961*k+T,P=1.306562965*O+T,j=.707106781*I,R=m+j,U=m-j;/* c6 */t[l+5]=U+L,t[l+3]=U-L,t[l+1]=R+P,t[l+7]=R-P,l+=8}for(u=0,/* Pass 2: process columns. */l=0;u<p;++u){r=t[l],n=t[l+8],i=t[l+16],o=t[l+24],a=t[l+32],s=t[l+40],f=t[l+48];var B=r+(h=t[l+56]),D=r-h,C=n+f,N=n-f,F=i+s,z=i-s,M=o+a,Z=o-a,G=B+M,H=B-M,Y=C+F,q=C-F;t[l]=G+Y,t[l+32]=G-Y;var W=(q+H)*.707106781;/* c4 */t[l+16]=H+W,t[l+48]=H-W,/* Odd part */G=Z+z,Y=z+N;/* The rotator is modified from fig 4-8 to avoid extra negations. */var V=(G-(q=N+D))*.382683433,X=.5411961*G+V,J=1.306562965*q+V,K=.707106781*Y,$=D+K,Q=D-K;/* c6 */t[l+40]=Q+X,t[l+24]=Q-X,t[l+8]=$+J,t[l+56]=$-J,l++}for(u=0;u<g;++u)// Apply the quantization and scaling factor & Round to nearest integer
c=t[u]*e[u],d[u]=c>0?c+.5|0:c-.5|0;return d}function Z(){z(65504),z(16),F(74),F(70),F(73),F(70),F(0),F(1),F(1),F(0),z(1),z(1),F(0),F(0)}function G(t,e){z(65472),z(17),F(8),z(e),z(t),F(3),F(1),F(17),F(0),F(2),F(17),F(1),F(3),F(17),F(1)}function H(){z(65499),z(132),F(0);for(var t=0;t<64;t++)F(f[t]);F(1);for(var e=0;e<64;e++)F(h[e])}function Y(){z(65476),z(418),F(0);for(var t=0;t<16;t++)F(A[t+1]);for(var e=0;e<=11;e++)F(I[e]);F(16);for(var r=0;r<16;r++)F(O[r+1]);for(var n=0;n<=161;n++)F(S[n]);F(1);for(var i=0;i<16;i++)F(T[i+1]);for(var o=0;o<=11;o++)F(L[o]);F(17);for(var a=0;a<16;a++)F(P[a+1]);for(var s=0;s<=161;s++)F(j[s])}function q(){z(65498),z(12),F(3),F(1),F(0),F(2),F(17),F(3),F(17),F(0),F(63),F(0)}function W(t,e,r,n,i){//ZigZag reorder
for(var o,a,s=i[0],f=i[240],h=16,u=63,c=64,d=M(t,e),_=0;_<c;++_)g[k[_]]=d[_];var m=g[0]-r;r=g[0],0==m?N(n[0]):(N(n[p[o=32767+m]]),N(l[o]));for(//Encode ACs
var b=63;b>0&&0==g[b];b--);//end0pos = first element in reverse order !=0
if(0==b)return N(s),r;for(var v=1;v<=b;){for(var y=v;0==g[v]&&v<=b;++v);var w=v-y;if(w>=h){a=w>>4;for(var x=1;x<=a;++x)N(f);w&=15}N(i[(w<<4)+p[o=32767+g[v]]]),N(l[o]),v++}return b!=u&&N(s),r}function V(){for(var t=String.fromCharCode,e=0;e<256;e++)x[e]=t(e)}function X(t){if(t<=0&&(t=1),t>100&&(t=100),a!=t){var e=0;e=t<50?Math.floor(5e3/t):Math.floor(200-2*t),R(e),a=t}// don't recalc if unchanged
//console.log('Quality set to: '+quality +'%');
}this.encode=function(t,a){new Date().getTime(),a&&X(a),// Initialize bit writer
_=[],m=0,b=7,// Add JPEG headers
z(65496),Z(),H(),G(t.width,t.height),Y(),q();// Encode 8x8 macroblocks
var s,f,h,l,p,d,g,x,k=0,A=0,I=0;m=0,b=7,this.encode.displayName="_encode_";for(var O,S=t.data,T=t.width,L=t.height,P=4*T,j=0;j<L;){for(O=0;O<P;){for(x=0,p=l=P*j+O,d=-1,g=0;x<64;x++)p=l+(g=x>>3)*P+(d=(7&x)*4),j+g>=L&&(p-=P*(j+1+g-L)),O+d>=P&&(p-=O+d-P+4),s=S[p++],f=S[p++],h=S[p++],/* // calculate YUV values dynamically
					YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
					UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
					VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
					*/// use lookup table (slightly faster)
v[x]=(E[s]+E[f+256>>0]+E[h+512>>0]>>16)-128,y[x]=(E[s+768>>0]+E[f+1024>>0]+E[h+1280>>0]>>16)-128,w[x]=(E[s+1280>>0]+E[f+1536>>0]+E[h+1792>>0]>>16)-128;k=W(v,u,k,e,i),A=W(y,c,A,n,o),I=W(w,c,I,n,o),O+=32}j+=8}////////////////////////////////////////////////////////////////
// Do the bit alignment of the EOI marker
if(b>=0){var R=[];R[1]=b+1,R[0]=(1<<b+1)-1,N(R)}//return new Uint8Array(byteout);
return z(65497),new r(_)},function(){new Date().getTime(),t||(t=50),// Create tables
V(),B(),D(),C(),X(t),new Date().getTime();//console.log('Initialization '+ duration + 'ms');
}()}function i(t,e){return void 0===e&&(e=50),{data:new n(e).encode(t,e),width:t.width,height:t.height}}t.exports=i}),parcelRequire.register("ig2VF",function(t,e){var r=parcelRequire("igx3v").Buffer,n=function(){var t=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),e=4017// cos(pi/16)
,r=799// sin(pi/16)
,n=3406// cos(3*pi/16)
,i=2276// sin(3*pi/16)
,o=1567// cos(6*pi/16)
,a=3784// sin(6*pi/16)
,s=5793// sqrt(2)
,f=2896// sqrt(2) / 2
;function h(){}function u(t,e){for(var r,n,i=0,o=[],a=16;a>0&&!t[a-1];)a--;o.push({children:[],index:0});var s,f=o[0];for(r=0;r<a;r++){for(n=0;n<t[r];n++){for((f=o.pop()).children[f.index]=e[i];f.index>0;){if(0===o.length)throw Error("Could not recreate Huffman Table");f=o.pop()}for(f.index++,o.push(f);o.length<=r;)o.push(s={children:[],index:0}),f.children[f.index]=s.children,f=s;i++}r+1<a&&(// p here points to last code
o.push(s={children:[],index:0}),f.children[f.index]=s.children,f=s)}return o[0].children}function c(e,r,n,i,o,a,s,f,h){n.precision,n.samplesPerLine,n.scanLines;var u,c,l,p=n.mcusPerLine,d=n.progressive;n.maxH,n.maxV;var g=r,_=0,m=0;function b(){if(m>0)return m--,_>>m&1;if(255==(_=e[r++])){var t=e[r++];if(t)throw Error("unexpected marker: "+(_<<8|t).toString(16));// unstuff 0
}return m=7,_>>>7}function v(t){for(var e,r=t;null!==(e=b());){if("number"==typeof(r=r[e]))return r;if("object"!=typeof r)throw Error("invalid huffman sequence")}return null}function y(t){for(var e=0;t>0;){var r=b();if(null===r)return;e=e<<1|r,t--}return e}function w(t){var e=y(t);return e>=1<<t-1?e:e+(-1<<t)+1}function x(e,r){var n=v(e.huffmanTableDC),i=0===n?0:w(n);r[0]=e.pred+=i;for(var o=1;o<64;){var a=v(e.huffmanTableAC),s=15&a,f=a>>4;if(0===s){if(f<15)break;o+=16;continue}r[t[o+=f]]=w(s),o++}}function E(t,e){var r=v(t.huffmanTableDC),n=0===r?0:w(r)<<h;e[0]=t.pred+=n}function k(t,e){e[0]|=b()<<h}var A=0;function I(e,r){if(A>0){A--;return}for(var n=a,i=s;n<=i;){var o=v(e.huffmanTableAC),f=15&o,u=o>>4;if(0===f){if(u<15){A=y(u)+(1<<u)-1;break}n+=16;continue}r[t[n+=u]]=w(f)*(1<<h),n++}}var O,S=0;function T(e,r){for(var n=a,i=s,o=0;n<=i;){var f=t[n],u=r[f]<0?-1:1;switch(S){case 0:var c=v(e.huffmanTableAC),l=15&c,o=c>>4;if(0===l)o<15?(A=y(o)+(1<<o),S=4):(o=16,S=1);else{if(1!==l)throw Error("invalid ACn encoding");O=w(l),S=o?2:3}continue;case 1:case 2:r[f]?r[f]+=(b()<<h)*u:0==--o&&(S=2==S?3:0);break;case 3:r[f]?r[f]+=(b()<<h)*u:(r[f]=O<<h,S=0);break;case 4:r[f]&&(r[f]+=(b()<<h)*u)}n++}4===S&&0==--A&&(S=0)}function L(t,e,r,n,i){var o=r/p|0,a=r%p,s=o*t.v+n,f=a*t.h+i;e(t,t.blocks[s][f])}function P(t,e,r){var n=r/t.blocksPerLine|0,i=r%t.blocksPerLine;e(t,t.blocks[n][i])}var j=i.length;N=d?0===a?0===f?E:k:0===f?I:T:x;var R,U,B,D,C,N,F,z=0;for(u=1==j?i[0].blocksPerLine*i[0].blocksPerColumn:p*n.mcusPerColumn,o||(o=u);z<u;){// reset interval stuff
for(U=0;U<j;U++)i[U].pred=0;if(A=0,1==j)for(C=0,R=i[0];C<o;C++)P(R,N,z),z++;else for(C=0;C<o;C++){for(U=0;U<j;U++)for(B=0,c=(R=i[U]).h,l=R.v;B<l;B++)for(D=0;D<c;D++)L(R,N,z,B,D);// If we've reached our expected MCU's, stop decoding
if(++z===u)break}if(// find marker
m=0,(F=e[r]<<8|e[r+1])<65280)throw Error("marker was not found");if(F>=65488&&F<=65495)r+=2;else break}return r-g}function l(t,h){var u,c,l=[],p=h.blocksPerLine,d=h.blocksPerColumn,g=p<<3,_=new Int32Array(64),m=new Uint8Array(64);// A port of poppler's IDCT method which in turn is taken from:
//   Christoph Loeffler, Adriaan Ligtenberg, George S. Moschytz,
//   "Practical Fast 1-D DCT Algorithms with 11 Multiplications",
//   IEEE Intl. Conf. on Acoustics, Speech & Signal Processing, 1989,
//   988-991.
function b(t,u,c){var l,p,d,g,_,m,b,v,y,w,x=h.quantizationTable,E=c;// dequant
for(w=0;w<64;w++)E[w]=t[w]*x[w];// inverse DCT on rows
for(w=0;w<8;++w){var k=8*w;// check for all-zero AC coefficients
if(0==E[1+k]&&0==E[2+k]&&0==E[3+k]&&0==E[4+k]&&0==E[5+k]&&0==E[6+k]&&0==E[7+k]){y=s*E[0+k]+512>>10,E[0+k]=y,E[1+k]=y,E[2+k]=y,E[3+k]=y,E[4+k]=y,E[5+k]=y,E[6+k]=y,E[7+k]=y;continue}// stage 4
l=s*E[0+k]+128>>8,p=s*E[4+k]+128>>8,d=E[2+k],g=E[6+k],_=f*(E[1+k]-E[7+k])+128>>8,v=f*(E[1+k]+E[7+k])+128>>8,m=E[3+k]<<4,b=E[5+k]<<4,// stage 3
y=l-p+1>>1,l=l+p+1>>1,p=y,y=d*a+g*o+128>>8,d=d*o-g*a+128>>8,g=y,y=_-b+1>>1,_=_+b+1>>1,b=y,y=v+m+1>>1,m=v-m+1>>1,v=y,// stage 2
y=l-g+1>>1,l=l+g+1>>1,g=y,y=p-d+1>>1,p=p+d+1>>1,d=y,y=_*i+v*n+2048>>12,_=_*n-v*i+2048>>12,v=y,y=m*r+b*e+2048>>12,m=m*e-b*r+2048>>12,b=y,// stage 1
E[0+k]=l+v,E[7+k]=l-v,E[1+k]=p+b,E[6+k]=p-b,E[2+k]=d+m,E[5+k]=d-m,E[3+k]=g+_,E[4+k]=g-_}// inverse DCT on columns
for(w=0;w<8;++w){var A=w;// check for all-zero AC coefficients
if(0==E[8+A]&&0==E[16+A]&&0==E[24+A]&&0==E[32+A]&&0==E[40+A]&&0==E[48+A]&&0==E[56+A]){y=s*c[w+0]+8192>>14,E[0+A]=y,E[8+A]=y,E[16+A]=y,E[24+A]=y,E[32+A]=y,E[40+A]=y,E[48+A]=y,E[56+A]=y;continue}// stage 4
l=s*E[0+A]+2048>>12,p=s*E[32+A]+2048>>12,d=E[16+A],g=E[48+A],_=f*(E[8+A]-E[56+A])+2048>>12,v=f*(E[8+A]+E[56+A])+2048>>12,m=E[24+A],b=E[40+A],// stage 3
y=l-p+1>>1,l=l+p+1>>1,p=y,y=d*a+g*o+2048>>12,d=d*o-g*a+2048>>12,g=y,y=_-b+1>>1,_=_+b+1>>1,b=y,y=v+m+1>>1,m=v-m+1>>1,v=y,// stage 2
y=l-g+1>>1,l=l+g+1>>1,g=y,y=p-d+1>>1,p=p+d+1>>1,d=y,y=_*i+v*n+2048>>12,_=_*n-v*i+2048>>12,v=y,y=m*r+b*e+2048>>12,m=m*e-b*r+2048>>12,b=y,// stage 1
E[0+A]=l+v,E[56+A]=l-v,E[8+A]=p+b,E[48+A]=p-b,E[16+A]=d+m,E[40+A]=d-m,E[24+A]=g+_,E[32+A]=g-_}// convert to 8-bit integers
for(w=0;w<64;++w){var I=128+(E[w]+8>>4);u[w]=I<0?0:I>255?255:I}}for(var v=0;v<d;v++){var y=v<<3;for(u=0;u<8;u++)l.push(new Uint8Array(g));for(var w=0;w<p;w++){b(h.blocks[v][w],m,_);var x=0,E=w<<3;for(c=0;c<8;c++){var k=l[y+c];for(u=0;u<8;u++)k[E+u]=m[x++]}}}return l}function p(t){return t<0?0:t>255?255:t}return h.prototype={load:function(t){var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=(function(){// TODO catch parse error
var t=new Uint8Array(e.response||e.mozResponseArrayBuffer);this.parse(t),this.onload&&this.onload()}).bind(this),e.send(null)},parse:function(e){var r=0;function n(){var t=e[r]<<8|e[r+1];return r+=2,t}function i(){var t=n(),i=e.subarray(r,r+t-2);return r+=i.length,i}function o(t){var e,r,n=0,i=0;for(r in t.components)t.components.hasOwnProperty(r)&&(n<(e=t.components[r]).h&&(n=e.h),i<e.v&&(i=e.v));var o=Math.ceil(t.samplesPerLine/8/n),a=Math.ceil(t.scanLines/8/i);for(r in t.components)if(t.components.hasOwnProperty(r)){e=t.components[r];for(var s=Math.ceil(Math.ceil(t.samplesPerLine/8)*e.h/n),f=Math.ceil(Math.ceil(t.scanLines/8)*e.v/i),h=o*e.h,u=a*e.v,c=[],l=0;l<u;l++){for(var p=[],d=0;d<h;d++)p.push(new Int32Array(64));c.push(p)}e.blocksPerLine=s,e.blocksPerColumn=f,e.blocks=c}t.maxH=n,t.maxV=i,t.mcusPerLine=o,t.mcusPerColumn=a}e.length;var a=null,s=null,f=[],h=[],p=[],d=[],g=n();if(65496!=g)throw Error("SOI not found");for(g=n();65497!=g;){switch(g){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var _=i();65504===g&&74===_[0]&&70===_[1]&&73===_[2]&&70===_[3]&&0===_[4]&&(a={version:{major:_[5],minor:_[6]},densityUnits:_[7],xDensity:_[8]<<8|_[9],yDensity:_[10]<<8|_[11],thumbWidth:_[12],thumbHeight:_[13],thumbData:_.subarray(14,14+3*_[12]*_[13])}),65518===g&&65===_[0]&&100===_[1]&&111===_[2]&&98===_[3]&&101===_[4]&&0===_[5]&&(s={version:_[6],flags0:_[7]<<8|_[8],flags1:_[9]<<8|_[10],transformCode:_[11]});break;case 65499:for(var m=n()+r-2;r<m;){var b=e[r++],v=new Int32Array(64);if(b>>4==0)for(k=0;k<64;k++){var y=t[k];v[y]=e[r++]}else if(b>>4==1)for(k=0;k<64;k++){var y=t[k];v[y]=n()}else throw Error("DQT: invalid table spec");f[15&b]=v}break;case 65472:case 65473:case 65474:n(),(w={}).extended=65473===g,w.progressive=65474===g,w.precision=e[r++],w.scanLines=n(),w.samplesPerLine=n(),w.components={},w.componentsOrder=[];var w,x,E,k,A,I=e[r++];for(E=0;E<I;E++){A=e[r];var O=e[r+1]>>4,S=15&e[r+1],T=e[r+2];w.componentsOrder.push(A),w.components[A]={h:O,v:S,quantizationIdx:T},r+=3}o(w),h.push(w);break;case 65476:var L=n();for(E=2;E<L;){var P=e[r++],j=new Uint8Array(16),R=0;for(k=0;k<16;k++,r++)R+=j[k]=e[r];var U=new Uint8Array(R);for(k=0;k<R;k++,r++)U[k]=e[r];E+=17+R,(P>>4==0?d:p)[15&P]=u(j,U)}break;case 65501:n(),x=n();break;case 65498:n();var B,D=e[r++],C=[];for(E=0;E<D;E++){B=w.components[e[r++]];var N=e[r++];B.huffmanTableDC=d[N>>4],B.huffmanTableAC=p[15&N],C.push(B)}var F=e[r++],z=e[r++],M=e[r++],Z=c(e,r,w,C,x,F,z,M>>4,15&M);r+=Z;break;case 65535:255!==e[r]&&r--;break;default:if(255==e[r-3]&&e[r-2]>=192&&e[r-2]<=254){// could be incorrect encoding -- last 0xFF byte of the previous
// block was eaten by the encoder
r-=3;break}throw Error("unknown JPEG marker "+g.toString(16))}g=n()}if(1!=h.length)throw Error("only single frame JPEGs supported");// set each frame's components quantization table
for(var E=0;E<h.length;E++){var G=h[E].components;for(var k in G)G[k].quantizationTable=f[G[k].quantizationIdx],delete G[k].quantizationIdx}this.width=w.samplesPerLine,this.height=w.scanLines,this.jfif=a,this.adobe=s,this.components=[];for(var E=0;E<w.componentsOrder.length;E++){var B=w.components[w.componentsOrder[E]];this.components.push({lines:l(w,B),scaleX:B.h/w.maxH,scaleY:B.v/w.maxV})}},getData:function(t,e){var r,n,i,o,a,s,f,h,u,c,l,d,g,_,m,b,v,y,w,x,E,k=this.width/t,A=this.height/e,I=0,O=t*e*this.components.length,S=new Uint8Array(O);switch(this.components.length){case 1:for(c=0,r=this.components[0];c<e;c++)for(u=0,a=r.lines[0|c*r.scaleY*A];u<t;u++)l=a[0|u*r.scaleX*k],S[I++]=l;break;case 2:for(c=0,// PDF might compress two component data in custom colorspace
r=this.components[0],n=this.components[1];c<e;c++)for(u=0,a=r.lines[0|c*r.scaleY*A],s=n.lines[0|c*n.scaleY*A];u<t;u++)l=a[0|u*r.scaleX*k],S[I++]=l,l=s[0|u*n.scaleX*k],S[I++]=l;break;case 3:for(// The default transform for three components is true
E=!0,this.adobe&&this.adobe.transformCode?E=!0:void 0!==this.colorTransform&&(E=!!this.colorTransform),r=this.components[0],n=this.components[1],i=this.components[2],c=0;c<e;c++)for(u=0,a=r.lines[0|c*r.scaleY*A],s=n.lines[0|c*n.scaleY*A],f=i.lines[0|c*i.scaleY*A];u<t;u++)E?(l=a[0|u*r.scaleX*k],d=s[0|u*n.scaleX*k],y=p(l+1.402*((g=f[0|u*i.scaleX*k])-128)),w=p(l-.3441363*(d-128)-.71413636*(g-128)),x=p(l+1.772*(d-128))):(y=a[0|u*r.scaleX*k],w=s[0|u*n.scaleX*k],x=f[0|u*i.scaleX*k]),S[I++]=y,S[I++]=w,S[I++]=x;break;case 4:if(!this.adobe)throw Error("Unsupported color mode (4 components)");for(// The default transform for four components is false
E=!1,this.adobe&&this.adobe.transformCode?E=!0:void 0!==this.colorTransform&&(E=!!this.colorTransform),r=this.components[0],n=this.components[1],i=this.components[2],o=this.components[3],c=0;c<e;c++)for(u=0,a=r.lines[0|c*r.scaleY*A],s=n.lines[0|c*n.scaleY*A],f=i.lines[0|c*i.scaleY*A],h=o.lines[0|c*o.scaleY*A];u<t;u++)E?(l=a[0|u*r.scaleX*k],d=s[0|u*n.scaleX*k],g=f[0|u*i.scaleX*k],_=h[0|u*o.scaleX*k],m=255-p(l+1.402*(g-128)),b=255-p(l-.3441363*(d-128)-.71413636*(g-128)),v=255-p(l+1.772*(d-128))):(m=a[0|u*r.scaleX*k],b=s[0|u*n.scaleX*k],v=f[0|u*i.scaleX*k],_=h[0|u*o.scaleX*k]),S[I++]=255-m,S[I++]=255-b,S[I++]=255-v,S[I++]=255-_;break;default:throw Error("Unsupported color mode")}return S},copyToImageData:function(t,e){var r,n,i,o,a,s,f,h,u,c=t.width,l=t.height,d=t.data,g=this.getData(c,l),_=0,m=0;switch(this.components.length){case 1:for(u=0;u<l;u++)for(h=0;h<c;h++)r=g[_++],d[m++]=r,d[m++]=r,d[m++]=r,e&&(d[m++]=255);break;case 3:for(u=0;u<l;u++)for(h=0;h<c;h++)a=g[_++],s=g[_++],f=g[_++],d[m++]=a,d[m++]=s,d[m++]=f,e&&(d[m++]=255);break;case 4:for(u=0;u<l;u++)for(h=0;h<c;h++)i=g[_++],o=g[_++],r=g[_++],a=255-p(i*(1-(n=g[_++])/255)+n),s=255-p(o*(1-n/255)+n),f=255-p(r*(1-n/255)+n),d[m++]=a,d[m++]=s,d[m++]=f,e&&(d[m++]=255);break;default:throw Error("Unsupported color mode")}}},h}();function i(t,e){var i={useTArray:!1,// "undefined" means "Choose whether to transform colors based on the image’s color model."
colorTransform:void 0,formatAsRGBA:!0};e?"object"==typeof e?e={useTArray:void 0===e.useTArray?i.useTArray:e.useTArray,colorTransform:void 0===e.colorTransform?i.colorTransform:e.colorTransform,formatAsRGBA:void 0===e.formatAsRGBA?i.formatAsRGBA:e.formatAsRGBA}:// backwards compatiblity, before 0.3.5, we only had the useTArray param
(e=i).useTArray=!0:e=i;var o=new Uint8Array(t),a=new n;a.parse(o),a.colorTransform=e.colorTransform;var s=e.formatAsRGBA?4:3,f=a.width*a.height*s;try{var h={width:a.width,height:a.height,data:e.useTArray?new Uint8Array(f):new r(f)}}catch(t){if(t instanceof RangeError)throw Error("Could not allocate enough memory for the image. Required: "+f);throw t}return a.copyToImageData(h,e.formatAsRGBA),h}t.exports=i}),parcelRequire.register("5KUEL",function(t,e){var r=parcelRequire("igx3v").Buffer;t.exports=function(t){if(t){if("Uint8Array"===t.constructor.name||t.constructor===Uint8Array)return t;"string"==typeof t&&(t=r(t));for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=t[n];return e}}}),parcelRequire.register("dWI74",function(t,e){var r=parcelRequire("igx3v").Buffer,n=parcelRequire("dA6jF");t.exports=function(t,e){// bmp stores stuff as ABGR seq
for(var i=n.decode(r.from(t)),o=i.width,a=i.height,s=new Uint8Array(o*a*4),f=0;f<s.length;f+=4){var h=i.data[f+0],u=i.data[f+1],c=i.data[f+2],l=i.data[f+3];s[f+0]=l,s[f+1]=c,s[f+2]=u,s[f+3]=i.is_with_alpha?h:255}return{data:s,width:i.width,height:i.height}}}),parcelRequire.register("dA6jF",function(t,e){/**
 * @author shaozilee
 *
 * support 1bit 4bit 8bit 24bit decode
 * encode with 24bit
 * 
 */var r=parcelRequire("ftKE3"),n=parcelRequire("9rQG4");t.exports={encode:r,decode:n}}),parcelRequire.register("ftKE3",function(t,e){var r=parcelRequire("igx3v").Buffer;function n(t){this.buffer=t.data,this.width=t.width,this.height=t.height,this.extraBytes=this.width%4,this.rgbSize=this.height*(3*this.width+this.extraBytes),this.headerInfoSize=40,this.data=[],/******************header***********************/this.flag="BM",this.reserved=0,this.offset=54,this.fileSize=this.rgbSize+this.offset,this.planes=1,this.bitPP=24,this.compress=0,this.hr=0,this.vr=0,this.colors=0,this.importantColors=0}n.prototype.encode=function(){var t=new r(this.offset+this.rgbSize);this.pos=0,t.write(this.flag,this.pos,2),this.pos+=2,t.writeUInt32LE(this.fileSize,this.pos),this.pos+=4,t.writeUInt32LE(this.reserved,this.pos),this.pos+=4,t.writeUInt32LE(this.offset,this.pos),this.pos+=4,t.writeUInt32LE(this.headerInfoSize,this.pos),this.pos+=4,t.writeUInt32LE(this.width,this.pos),this.pos+=4,t.writeInt32LE(-this.height,this.pos),this.pos+=4,t.writeUInt16LE(this.planes,this.pos),this.pos+=2,t.writeUInt16LE(this.bitPP,this.pos),this.pos+=2,t.writeUInt32LE(this.compress,this.pos),this.pos+=4,t.writeUInt32LE(this.rgbSize,this.pos),this.pos+=4,t.writeUInt32LE(this.hr,this.pos),this.pos+=4,t.writeUInt32LE(this.vr,this.pos),this.pos+=4,t.writeUInt32LE(this.colors,this.pos),this.pos+=4,t.writeUInt32LE(this.importantColors,this.pos),this.pos+=4;for(var e=0,n=3*this.width+this.extraBytes,i=0;i<this.height;i++){for(var o=0;o<this.width;o++){var a=this.pos+i*n+3*o;e++,t[a]=this.buffer[e++],t[a+1]=this.buffer[e++],t[a+2]=this.buffer[e++]}if(this.extraBytes>0){var s=this.pos+i*n+3*this.width;t.fill(0,s,s+this.extraBytes)}}return t},t.exports=function(t,e){return void 0===e&&(e=100),{data:new n(t).encode(),width:t.width,height:t.height}}}),parcelRequire.register("9rQG4",function(t,e){var r=parcelRequire("igx3v").Buffer;function n(t,e){if(this.pos=0,this.buffer=t,this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=this.buffer.toString("utf-8",0,this.pos+=2),"BM"!=this.flag)throw Error("Invalid BMP File");this.parseHeader(),this.parseRGBA()}n.prototype.parseHeader=function(){if(this.fileSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.reserved=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.offset=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.headerSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.width=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.height=this.buffer.readInt32LE(this.pos),this.pos+=4,this.planes=this.buffer.readUInt16LE(this.pos),this.pos+=2,this.bitPP=this.buffer.readUInt16LE(this.pos),this.pos+=2,this.compress=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.rawSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.hr=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.vr=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.colors=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.importantColors=this.buffer.readUInt32LE(this.pos),this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=0===this.colors?1<<this.bitPP:this.colors;this.palette=Array(t);for(var e=0;e<t;e++){var r=this.buffer.readUInt8(this.pos++),n=this.buffer.readUInt8(this.pos++),i=this.buffer.readUInt8(this.pos++),o=this.buffer.readUInt8(this.pos++);this.palette[e]={red:i,green:n,blue:r,quad:o}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},n.prototype.parseRGBA=function(){var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new r(e),this[t]()},n.prototype.bit1=function(){for(var t=Math.ceil(this.width/8),e=t%4,r=this.height>=0?this.height-1:-this.height,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,i=0;i<t;i++)for(var o=this.buffer.readUInt8(this.pos++),a=n*this.width*4+32*i,s=0;s<8&&8*i+s<this.width;s++){var f=this.palette[o>>7-s&1];this.data[a+4*s]=0,this.data[a+4*s+1]=f.blue,this.data[a+4*s+2]=f.green,this.data[a+4*s+3]=f.red}0!=e&&(this.pos+=4-e)}},n.prototype.bit4=function(){//RLE-4
if(2==this.compress){this.data.fill(255);for(var t=0,e=this.bottom_up?this.height-1:0,r=!1;t<this.data.length;){var n=this.buffer.readUInt8(this.pos++),i=this.buffer.readUInt8(this.pos++);//absolute mode
if(0==n){if(0==i){this.bottom_up?e--:e++,t=e*this.width*4,r=!1;continue}if(1==i)break;if(2==i){//offset x,y
var o=this.buffer.readUInt8(this.pos++),a=this.buffer.readUInt8(this.pos++);this.bottom_up?e-=a:e+=a,t+=a*this.width*4+4*o}else{for(var s=this.buffer.readUInt8(this.pos++),f=0;f<i;f++)r?h.call(this,15&s):h.call(this,(240&s)>>4),1&f&&f+1<i&&(s=this.buffer.readUInt8(this.pos++)),r=!r;(i+1>>1&1)==1&&this.pos++}}else for(var f=0;f<n;f++)r?h.call(this,15&i):h.call(this,(240&i)>>4),r=!r}function h(e){var r=this.palette[e];this.data[t]=0,this.data[t+1]=r.blue,this.data[t+2]=r.green,this.data[t+3]=r.red,t+=4}}else for(var u=Math.ceil(this.width/2),c=u%4,a=this.height-1;a>=0;a--){for(var l=this.bottom_up?a:this.height-1-a,o=0;o<u;o++){var i=this.buffer.readUInt8(this.pos++),t=l*this.width*4+8*o,p=i>>4,d=15&i,g=this.palette[p];if(this.data[t]=0,this.data[t+1]=g.blue,this.data[t+2]=g.green,this.data[t+3]=g.red,2*o+1>=this.width)break;g=this.palette[d],this.data[t+4]=0,this.data[t+4+1]=g.blue,this.data[t+4+2]=g.green,this.data[t+4+3]=g.red}0!=c&&(this.pos+=4-c)}},n.prototype.bit8=function(){//RLE-8
if(1==this.compress){this.data.fill(255);for(var t=0,e=this.bottom_up?this.height-1:0;t<this.data.length;){var r=this.buffer.readUInt8(this.pos++),n=this.buffer.readUInt8(this.pos++);//absolute mode
if(0==r){if(0==n){this.bottom_up?e--:e++,t=e*this.width*4;continue}if(1==n)break;if(2==n){//offset x,y
var i=this.buffer.readUInt8(this.pos++),o=this.buffer.readUInt8(this.pos++);this.bottom_up?e-=o:e+=o,t+=o*this.width*4+4*i}else{for(var a=0;a<n;a++)s.call(this,this.buffer.readUInt8(this.pos++));!0&n&&this.pos++}}else for(var a=0;a<r;a++)s.call(this,n)}function s(e){var r=this.palette[e];this.data[t]=0,this.data[t+1]=r.blue,this.data[t+2]=r.green,this.data[t+3]=r.red,t+=4}}else for(var f=this.width%4,o=this.height-1;o>=0;o--){for(var h=this.bottom_up?o:this.height-1-o,i=0;i<this.width;i++){var n=this.buffer.readUInt8(this.pos++),t=h*this.width*4+4*i;if(n<this.palette.length){var u=this.palette[n];this.data[t]=0,this.data[t+1]=u.blue,this.data[t+2]=u.green,this.data[t+3]=u.red}else this.data[t]=0,this.data[t+1]=255,this.data[t+2]=255,this.data[t+3]=255}0!=f&&(this.pos+=4-f)}},n.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,i=0;i<this.width;i++){var o=this.buffer.readUInt16LE(this.pos);this.pos+=2;var a=(o&e)/e*255|0,s=(o>>5&e)/e*255|0,f=(o>>10&e)/e*255|0,h=o>>15?255:0,u=n*this.width*4+4*i;this.data[u]=h,this.data[u+1]=a,this.data[u+2]=s,this.data[u+3]=f}//skip extra bytes
this.pos+=t}},n.prototype.bit16=function(){var t=this.width%2*2;//default xrgb555
this.maskRed=31744,this.maskGreen=992,this.maskBlue=31,this.mask0=0,3==this.compress&&(this.maskRed=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.maskGreen=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.maskBlue=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.mask0=this.buffer.readUInt32LE(this.pos),this.pos+=4);for(var e=[0,0,0],r=0;r<16;r++)this.maskRed>>r&1&&e[0]++,this.maskGreen>>r&1&&e[1]++,this.maskBlue>>r&1&&e[2]++;e[1]+=e[0],e[2]+=e[1],e[0]=8-e[0],e[1]-=8,e[2]-=8;for(var n=this.height-1;n>=0;n--){for(var i=this.bottom_up?n:this.height-1-n,o=0;o<this.width;o++){var a=this.buffer.readUInt16LE(this.pos);this.pos+=2;var s=(a&this.maskBlue)<<e[0],f=(a&this.maskGreen)>>e[1],h=(a&this.maskRed)>>e[2],u=i*this.width*4+4*o;this.data[u]=0,this.data[u+1]=s,this.data[u+2]=f,this.data[u+3]=h}//skip extra bytes
this.pos+=t}},n.prototype.bit24=function(){for(var t=this.height-1;t>=0;t--){for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){//Little Endian rgb
var n=this.buffer.readUInt8(this.pos++),i=this.buffer.readUInt8(this.pos++),o=this.buffer.readUInt8(this.pos++),a=e*this.width*4+4*r;this.data[a]=0,this.data[a+1]=n,this.data[a+2]=i,this.data[a+3]=o}//skip extra bytes
this.pos+=this.width%4}},/**
 * add 32bit decode func
 * @author soubok
 */n.prototype.bit32=function(){//BI_BITFIELDS
if(3==this.compress){this.maskRed=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.maskGreen=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.maskBlue=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.mask0=this.buffer.readUInt32LE(this.pos),this.pos+=4;for(var t=this.height-1;t>=0;t--)for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){//Little Endian rgba
var n=this.buffer.readUInt8(this.pos++),i=this.buffer.readUInt8(this.pos++),o=this.buffer.readUInt8(this.pos++),a=this.buffer.readUInt8(this.pos++),s=e*this.width*4+4*r;this.data[s]=n,this.data[s+1]=i,this.data[s+2]=o,this.data[s+3]=a}}else for(var t=this.height-1;t>=0;t--)for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){//Little Endian argb
var i=this.buffer.readUInt8(this.pos++),o=this.buffer.readUInt8(this.pos++),a=this.buffer.readUInt8(this.pos++),n=this.buffer.readUInt8(this.pos++),s=e*this.width*4+4*r;this.data[s]=n,this.data[s+1]=i,this.data[s+2]=o,this.data[s+3]=a}},n.prototype.getData=function(){return this.data},t.exports=function(t){return new n(t)}}),parcelRequire.register("5IsOZ",function(t,e){var r=parcelRequire("4xm5s");t.exports=function(t,e){var n=r.decode(t);return r.decodeImages(t,n),{data:r.toRGBA8(n[0]),height:n[0].height,width:n[0].width}}}),parcelRequire.register("4xm5s",function(t,e){var r=parcelRequire("4Dxou");!function(){var e={};function n(){void 0===r&&console.log.apply(console,arguments)}t.exports=e,function(t,e){// Following lines add a JPEG decoder  to UTIF.JpegDecoder
(function(){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t){this.message="JPEG error: "+t}return t.prototype=Error(),t.prototype.name="JpegError",t.constructor=t}(),n=function(){function t(t,e){this.message=t,this.g=e}return t.prototype=Error(),t.prototype.name="DNLMarkerError",t.constructor=t}();!function(){function i(){this.M=null,this.B=-1}function o(t,e){for(var r,n,i=0,o=[],a=16;0<a&&!t[a-1];)a--;o.push({children:[],index:0});var s,f=o[0];for(r=0;r<a;r++){for(n=0;n<t[r];n++){for((f=o.pop()).children[f.index]=e[i];0<f.index;)f=o.pop();for(f.index++,o.push(f);o.length<=r;)o.push(s={children:[],index:0}),f.children[f.index]=s.children,f=s;i++}r+1<a&&(o.push(s={children:[],index:0}),f.children[f.index]=s.children,f=s)}return o[0].children}function a(t,i,o,a,s,u,c,l,p){function d(){if(0<U)return U--,R>>U&1;if(255===(R=t[i++])){var e=t[i++];if(e){if(220===e&&L){i+=2;var a=t[i++]<<8|t[i++];if(0<a&&a!==o.g)throw new n("Found DNL marker (0xFFDC) while parsing scan data",a)}throw new r("unexpected marker "+(R<<8|e).toString(16))}}return U=7,R>>>7}function g(t){for(;;){if("number"==typeof(t=t[d()]))return t;if("object"!==(void 0===t?"undefined":e(t)))throw new r("invalid huffman sequence")}}function _(t){for(var e=0;0<t;)e=e<<1|d(),t--;return e}function m(t){if(1===t)return 1===d()?1:-1;var e=_(t);return e>=1<<t-1?e:e+(-1<<t)+1}function b(t,e){var r=g(t.D);for(r=0===r?0:m(r),t.a[e]=t.m+=r,r=1;64>r;){var n=g(t.o),i=15&n;if(n>>=4,0===i){if(15>n)break;r+=16}else r+=n,t.a[e+h[r]]=m(i),r++}}function v(t,e){var r=g(t.D);r=0===r?0:m(r)<<p,t.a[e]=t.m+=r}function y(t,e){t.a[e]|=d()<<p}function w(t,e){if(0<B)B--;else for(var r=u;r<=c;){var n=g(t.o),i=15&n;if(n>>=4,0===i){if(15>n){B=_(n)+(1<<n)-1;break}r+=16}else r+=n,t.a[e+h[r]]=m(i)*(1<<p),r++}}function x(t,e){for(var n,i=u,o=0;i<=c;){n=e+h[i];var a=0>t.a[n]?-1:1;switch(D){case 0:if(n=15&(o=g(t.o)),o>>=4,0===n)15>o?(B=_(o)+(1<<o),D=4):(o=16,D=1);else{if(1!==n)throw new r("invalid ACn encoding");A=m(n),D=o?2:3}continue;case 1:case 2:t.a[n]?t.a[n]+=a*(d()<<p):0==--o&&(D=2===D?3:0);break;case 3:t.a[n]?t.a[n]+=a*(d()<<p):(t.a[n]=A<<p,D=0);break;case 4:t.a[n]&&(t.a[n]+=a*(d()<<p))}i++}4===D&&0==--B&&(D=0)}for(var E,k,A,I,O,S,T,L=9<arguments.length&&void 0!==arguments[9]&&arguments[9],P=o.P,j=i,R=0,U=0,B=0,D=0,C=a.length,N=o.S?0===u?0===l?v:y:0===l?w:x:b,F=0,z=1===C?a[0].c*a[0].l:P*o.O;F<z;){var M=s?Math.min(z-F,s):z;for(I=0;I<C;I++)a[I].m=0;if(B=0,1===C){var Z=a[0];for(T=0;T<M;T++)N(Z,64*((Z.c+1)*(F/Z.c|0)+F%Z.c)),F++}else for(T=0;T<M;T++){for(I=0;I<C;I++)for(E=(Z=a[I]).h,k=Z.j,O=0;O<k;O++)for(S=0;S<E;S++)N(Z,64*((Z.c+1)*((F/P|0)*Z.j+O)+(F%P*Z.h+S)));F++}if(U=0,(Z=f(t,i))&&Z.f&&((0,_util.warn)("decodeScan - unexpected MCU data, current marker is: "+Z.f),i=Z.offset),!(Z=Z&&Z.F)||65280>=Z)throw new r("marker was not found");if(65488<=Z&&65495>=Z)i+=2;else break}return(Z=f(t,i))&&Z.f&&((0,_util.warn)("decodeScan - unexpected Scan data, current marker is: "+Z.f),i=Z.offset),i-j}function s(t,e){for(var n=e.c,i=e.l,o=new Int16Array(64),a=0;a<i;a++)for(var s=0;s<n;s++){var f=64*((e.c+1)*a+s),h=o,u=e.G,c=e.a;if(!u)throw new r("missing required Quantization Table.");for(var l=0;64>l;l+=8){var p=c[f+l],d=c[f+l+1],g=c[f+l+2],_=c[f+l+3],m=c[f+l+4],b=c[f+l+5],v=c[f+l+6],y=c[f+l+7];if(p*=u[l],0==(d|g|_|m|b|v|y))p=5793*p+512>>10,h[l]=p,h[l+1]=p,h[l+2]=p,h[l+3]=p,h[l+4]=p,h[l+5]=p,h[l+6]=p,h[l+7]=p;else{d*=u[l+1],g*=u[l+2],_*=u[l+3],m*=u[l+4],b*=u[l+5],v*=u[l+6],y*=u[l+7];var w=5793*p+128>>8,x=5793*m+128>>8,E=g,k=v;m=2896*(d-y)+128>>8,y=2896*(d+y)+128>>8,_<<=4,b<<=4,x=(w=w+x+1>>1)-x,p=3784*E+1567*k+128>>8,E=1567*E-3784*k+128>>8,k=p,b=(m=m+b+1>>1)-b,_=(y=y+_+1>>1)-_,k=(w=w+k+1>>1)-k,E=(x=x+E+1>>1)-E,p=2276*m+3406*y+2048>>12,m=3406*m-2276*y+2048>>12,y=p,p=799*_+4017*b+2048>>12,_=4017*_-799*b+2048>>12,b=p,h[l]=w+y,h[l+7]=w-y,h[l+1]=x+b,h[l+6]=x-b,h[l+2]=E+_,h[l+5]=E-_,h[l+3]=k+m,h[l+4]=k-m}}for(u=0;8>u;++u)p=h[u],d=h[u+8],g=h[u+16],_=h[u+24],m=h[u+32],0==(d|g|_|m|(b=h[u+40])|(v=h[u+48])|(y=h[u+56]))?(p=-2040>(p=5793*p+8192>>14)?0:2024<=p?255:p+2056>>4,c[f+u]=p,c[f+u+8]=p,c[f+u+16]=p,c[f+u+24]=p,c[f+u+32]=p,c[f+u+40]=p,c[f+u+48]=p,c[f+u+56]=p):(w=5793*p+2048>>12,x=5793*m+2048>>12,E=g,k=v,m=2896*(d-y)+2048>>12,y=2896*(d+y)+2048>>12,x=(w=(w+x+1>>1)+4112)-x,p=3784*E+1567*k+2048>>12,E=1567*E-3784*k+2048>>12,k=p,b=(m=m+b+1>>1)-b,_=(y=y+_+1>>1)-_,k=(w=w+k+1>>1)-k,E=(x=x+E+1>>1)-E,p=2276*m+3406*y+2048>>12,m=3406*m-2276*y+2048>>12,y=p,p=799*_+4017*b+2048>>12,_=4017*_-799*b+2048>>12,b=p,p=w+y,y=w-y,d=x+b,v=x-b,g=E+_,b=E-_,p=16>p?0:4080<=p?255:p>>4,d=16>d?0:4080<=d?255:d>>4,g=16>g?0:4080<=g?255:g>>4,_=16>(_=k+m)?0:4080<=_?255:_>>4,m=16>(m=k-m)?0:4080<=m?255:m>>4,b=16>b?0:4080<=b?255:b>>4,v=16>v?0:4080<=v?255:v>>4,y=16>y?0:4080<=y?255:y>>4,c[f+u]=p,c[f+u+8]=d,c[f+u+16]=g,c[f+u+24]=_,c[f+u+32]=m,c[f+u+40]=b,c[f+u+48]=v,c[f+u+56]=y)}return e.a}function f(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:e,n=t.length-1;if(r=r<e?r:e,e>=n)return null;var i=t[e]<<8|t[e+1];if(65472<=i&&65534>=i)return{f:null,F:i,offset:e};for(var o=t[r]<<8|t[r+1];!(65472<=o&&65534>=o);){if(++r>=n)return null;o=t[r]<<8|t[r+1]}return{f:i.toString(16),F:o,offset:r}}var h=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);i.prototype={parse:function(t){function e(){var e=t[p]<<8|t[p+1];return p+=2,e}function i(){var r=e(),n=f(t,r=p+r-2,p);return n&&n.f&&((0,_util.warn)("readDataBlock - incorrect length, current marker is: "+n.f),r=n.offset),r=t.subarray(p,r),p+=r.length,r}function u(t){for(var e=Math.ceil(t.v/8/t.s),r=Math.ceil(t.g/8/t.u),n=0;n<t.b.length;n++){O=t.b[n];var i=Math.ceil(Math.ceil(t.v/8)*O.h/t.s),o=Math.ceil(Math.ceil(t.g/8)*O.j/t.u);O.a=new Int16Array(64*r*O.j*(e*O.h+1)),O.c=i,O.l=o}t.P=e,t.O=r}var c=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).N,l=void 0===c?null:c,p=0,d=null,g=0;c=[];var _=[],m=[],b=e();if(65496!==b)throw new r("SOI not found");for(b=e();65497!==b;){switch(b){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var v,y=i();65518===b&&65===y[0]&&100===y[1]&&111===y[2]&&98===y[3]&&101===y[4]&&(d={version:y[5]<<8|y[6],Y:y[7]<<8|y[8],Z:y[9]<<8|y[10],W:y[11]});break;case 65499:for(b=e()+p-2;p<b;){var w=t[p++],x=new Uint16Array(64);if(0==w>>4)for(y=0;64>y;y++)x[v=h[y]]=t[p++];else if(1==w>>4)for(y=0;64>y;y++)x[v=h[y]]=e();else throw new r("DQT - invalid table spec");c[15&w]=x}break;case 65472:case 65473:case 65474:if(E)throw new r("Only single frame JPEGs supported");e();var E={};for(E.X=65473===b,E.S=65474===b,E.precision=t[p++],b=e(),E.g=l||b,E.v=e(),E.b=[],E.C={},y=t[p++],b=x=w=0;b<y;b++){v=t[p];var k=t[p+1]>>4,A=15&t[p+1];w<k&&(w=k),x<A&&(x=A),k=E.b.push({h:k,j:A,T:t[p+2],G:null}),E.C[v]=k-1,p+=3}E.s=w,E.u=x,u(E);break;case 65476:for(b=2,v=e();b<v;){for(w=t[p++],x=new Uint8Array(16),y=k=0;16>y;y++,p++)k+=x[y]=t[p];for(y=0,A=new Uint8Array(k);y<k;y++,p++)A[y]=t[p];b+=17+k,(0==w>>4?m:_)[15&w]=o(x,A)}break;case 65501:e();var I=e();break;case 65498:for(y=1==++g&&!l,e(),w=t[p++],v=[],b=0;b<w;b++){x=E.C[t[p++]];var O=E.b[x];x=t[p++],O.D=m[x>>4],O.o=_[15&x],v.push(O)}b=t[p++],w=t[p++],x=t[p++];try{var S=a(t,p,E,v,I,b,w,x>>4,15&x,y);p+=S}catch(e){if(e instanceof n)return(0,_util.warn)('Attempting to re-parse JPEG image using "scanLines" parameter found in DNL marker (0xFFDC) segment.'),this.parse(t,{N:e.g});throw e}break;case 65500:p+=4;break;case 65535:255!==t[p]&&p--;break;default:if(255===t[p-3]&&192<=t[p-2]&&254>=t[p-2])p-=3;else if((y=f(t,p-2))&&y.f)(0,_util.warn)("JpegImage.parse - unexpected data, current marker is: "+y.f),p=y.offset;else throw new r("unknown marker "+b.toString(16))}b=e()}for(b=0,this.width=E.v,this.height=E.g,this.A=d,this.b=[];b<E.b.length;b++)(I=c[(O=E.b[b]).T])&&(O.G=I),this.b.push({R:s(E,O),U:O.h/E.s,V:O.j/E.u,c:O.c,l:O.l});this.i=this.b.length},L:function(t,e){var r,n,i=this.width/t,o=this.height/e,a=this.b.length,s=t*e*a,f=new Uint8ClampedArray(s),h=new Uint32Array(t);for(n=0;n<a;n++){var u=this.b[n],c=u.U*i,l=u.V*o,p=n,d=u.R,g=u.c+1<<3;for(r=0;r<t;r++)u=0|r*c,h[r]=(4294967288&u)<<3|7&u;for(c=0;c<e;c++)for(u=g*(4294967288&(u=0|c*l))|(7&u)<<3,r=0;r<t;r++)f[p]=d[u+h[r]],p+=a}if(o=this.M)for(n=0;n<s;)for(i=u=0;u<a;u++,n++,i+=2)f[n]=(f[n]*o[i]>>8)+o[i+1];return f},w:function(){return this.A?!!this.A.W:3===this.i?0!==this.B:1===this.B},I:function(t){for(var e,r,n,i=0,o=t.length;i<o;i+=3)e=t[i],r=t[i+1],n=t[i+2],t[i]=e-179.456+1.402*n,t[i+1]=e+135.459-.344*r-.714*n,t[i+2]=e-226.816+1.772*r;return t},K:function(t){for(var e,r,n,i,o=0,a=0,s=t.length;a<s;a+=4)e=t[a],r=t[a+1],n=t[a+2],i=t[a+3],t[o++]=-122.67195406894+r*(-.0000660635669420364*r+437130475926232e-18*n-54080610064599e-18*e+48449797120281e-17*i-.154362151871126)+n*(-.000957964378445773*n+817076911346625e-18*e-.00477271405408747*i+1.53380253221734)+e*(961250184130688e-18*e-.00266257332283933*i+.48357088451265)+i*(-.000336197177618394*i+.484791561490776),t[o++]=107.268039397724+r*(219927104525741e-19*r-640992018297945e-18*n+659397001245577e-18*e+426105652938837e-18*i-.176491792462875)+n*(-.000778269941513683*n+.00130872261408275*e+770482631801132e-18*i-.151051492775562)+e*(.00126935368114843*e-.00265090189010898*i+.25802910206845)+i*(-.000318913117588328*i-.213742400323665),t[o++]=-20.810012546947+r*(-.000570115196973677*r-263409051004589e-19*n+.0020741088115012*e-.00288260236853442*i+.814272968359295)+n*(-.0000153496057440975*n-132689043961446e-18*e+560833691242812e-18*i-.195152027534049)+e*(.00174418132927582*e-.00255243321439347*i+.116935020465145)+i*(-.000343531996510555*i+.24165260232407);return t.subarray(0,o)},J:function(t){for(var e,r,n,i=0,o=t.length;i<o;i+=4)e=t[i],r=t[i+1],n=t[i+2],t[i]=434.456-e-1.402*n,t[i+1]=119.541-e+.344*r+.714*n,t[i+2]=481.816-e-1.772*r;return t},H:function(t){for(var e,r,n,i,o=0,a=1/255,s=0,f=t.length;s<f;s+=4)e=t[s]*a,r=t[s+1]*a,n=t[s+2]*a,i=t[s+3]*a,t[o++]=255+e*(-4.387332384609988*e+54.48615194189176*r+18.82290502165302*n+212.25662451639585*i-285.2331026137004)+r*(1.7149763477362134*r-5.6096736904047315*n-17.873870861415444*i-5.497006427196366)+n*(-2.5217340131683033*n-21.248923337353073*i+17.5119270841813)-i*(21.86122147463605*i+189.48180835922747),t[o++]=255+e*(8.841041422036149*e+60.118027045597366*r+6.871425592049007*n+31.159100130055922*i-79.2970844816548)+r*(-15.310361306967817*r+17.575251261109482*n+131.35250912493976*i-190.9453302588951)+n*(4.444339102852739*n+9.8632861493405*i-24.86741582555878)-i*(20.737325471181034*i+187.80453709719578),t[o++]=255+e*(.8842522430003296*e+8.078677503112928*r+30.89978309703729*n-.23883238689178934*i-14.183576799673286)+r*(10.49593273432072*r+63.02378494754052*n+50.606957656360734*i-112.23884253719248)+n*(.03296041114873217*n+115.60384449646641*i-193.58209356861505)-i*(22.33816807309886*i+180.12613974708367);return t.subarray(0,o)},getData:function(t,e,n){if(4<this.i)throw new r("Unsupported color mode");if(t=this.L(t,e),1===this.i&&n){n=t.length,e=new Uint8ClampedArray(3*n);for(var i=0,o=0;o<n;o++){var a=t[o];e[i++]=a,e[i++]=a,e[i++]=a}return e}if(3===this.i&&this.w())return this.I(t);if(4===this.i){if(this.w())return n?this.K(t):this.J(t);if(n)return this.H(t)}return t}},t.JpegDecoder=i}()})(),//UTIF.JpegDecoder = window.JpegDecoder;
t.encodeImage=function(e,r,n,i){var o={t256:[r],t257:[n],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[n],/* rows per strip */t279:[r*n*4],t282:[1],t283:[1],t284:[1],t286:[0],t287:[0],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(i)for(var a in i)o[a]=i[a];for(var s=new Uint8Array(t.encode([o])),f=new Uint8Array(e),h=new Uint8Array(1e3+r*n*4),a=0;a<s.length;a++)h[a]=s[a];for(var a=0;a<f.length;a++)h[1e3+a]=f[a];return h.buffer},t.encode=function(e){var r=new Uint8Array(2e4),n=4,i=t._binBE;r[0]=77,r[1]=77,r[3]=42;var o=8;i.writeUint(r,n,o),n+=4;for(var a=0;a<e.length;a++){var s=t._writeIFD(i,r,o,e[a]);o=s[1],a<e.length-1&&i.writeUint(r,s[0],o)}return r.slice(0,o).buffer},//UTIF.encode._writeIFD
t.decode=function(e){t.decode._decodeG3.allow2D=null;var r=new Uint8Array(e),n=0,i=t._binBE.readASCII(r,n,2);n+=2;var o="II"==i?t._binLE:t._binBE;o.readUshort(r,n),n+=2;var a=o.readUint(r,n);n+=4;for(var s=[];;){var f=t._readIFD(o,r,a,s);if(0==//var ifd = ifds[ifds.length-1];   if(ifd["t34665"]) {  ifd.exifIFD = [];  UTIF._readIFD(bin, data, ifd["t34665"][0], ifd.exifIFD);  }
(a=o.readUint(r,f)))break}return s},t.decodeImages=function(e,r){for(var i=new Uint8Array(e),o=t._binBE.readASCII(i,0,2),a=0;a<r.length;a++){var s=r[a];if(null!=s.t256){s.isLE="II"==o,s.width=s.t256[0],s.height=s.t257[0];var f=s.t259?s.t259[0]:1,h=s.t266?s.t266[0]:1;//delete img["t259"];
s.t284&&2==s.t284[0]&&n("PlanarConfiguration 2 should not be used!");var u=(s.t258?Math.min(32,s.t258[0]):1)*(s.t277?s.t277[0]:1),c=8*Math.ceil(s.width*u/8),l=s.t273;// bits per pixel
null==l&&(l=s.t324);var p=s.t279;1==f&&1==l.length&&(p=[s.height*(c>>>3)]),null==p&&(p=s.t325);var d=new Uint8Array(s.height*(c>>>3)),g=0;if(null!=s.t322){for(var _=s.t322[0],m=s.t323[0],b=Math.floor((s.width+_-1)/_),v=Math.floor((s.height+m-1)/m),y=new Uint8Array(0|Math.ceil(_*m*u/8)),w=0;w<v;w++)for(var x=0;x<b;x++){for(var E=w*b+x,k=0;k<y.length;k++)y[k]=0;t.decode._decompress(s,i,l[E],p[E],f,y,0,h),6==f?d=y:t._copyTile(y,0|Math.ceil(_*u/8),m,d,0|Math.ceil(s.width*u/8),s.height,0|Math.ceil(x*_*u/8),w*m)}g=8*d.length}else{var A=s.t278?s.t278[0]:s.height;A=Math.min(A,s.height);for(var E=0;E<l.length;E++)t.decode._decompress(s,i,l[E],p[E],f,d,0|Math.ceil(g/8),h),g+=c*A;g=Math.min(g,8*d.length)}s.data=new Uint8Array(d.buffer,0,0|Math.ceil(g/8))}// EXIF files don't have TIFF tags
}},t.decode._decompress=function(r,i,o,a,s,f,h,u){if(1==s)for(var c=0;c<a;c++)f[h+c]=i[o+c];else if(3==s)t.decode._decodeG3(i,o,a,f,h,r.width,u);else if(4==s)t.decode._decodeG4(i,o,a,f,h,r.width,u);else if(5==s)t.decode._decodeLZW(i,o,f,h);else if(6==s)t.decode._decodeOldJPEG(r,i,o,a,f,h);else if(7==s)t.decode._decodeNewJPEG(r,i,o,a,f,h);else if(8==s)for(var l=new Uint8Array(i.buffer,o,a),p=e.inflate(l),d=0;d<p.length;d++)f[h+d]=p[d];else 32773==s?t.decode._decodePackBits(i,o,a,f,h):32809==s?t.decode._decodeThunder(i,o,a,f,h):n("Unknown compression",s);if(r.t317&&2==r.t317[0])//log(noc);
for(var g=r.t277?r.t277[0]:1,_=r.t278?r.t278[0]:r.height,m=r.width*g,b=0;b<_;b++){var v=h+b*m;if(3==g)for(var c=3;c<m;c+=3)f[v+c]=f[v+c]+f[v+c-3]&255,f[v+c+1]=f[v+c+1]+f[v+c-2]&255,f[v+c+2]=f[v+c+2]+f[v+c-1]&255;else for(var c=g;c<m;c++)f[v+c]=f[v+c]+f[v+c-g]&255}},t.decode._decodeNikon=function(t,e,r,i,o){var a,s;n(t.slice(e,e+100)),a=t[e],s=t[++e],e++,n(a.toString(16),s.toString(16),r)},t.decode._decodeNewJPEG=function(e,r,n,i,o,a){var s=e.t347,f=s?s.length:0,h=new Uint8Array(f+i);if(s){for(var u=216,c=217,l=0,p=0;// Skip EOI marker from JPEGTables
p<f-1&&(255!=s[p]||s[p+1]!=c);p++)h[l++]=s[p];var d=r[n],g=r[n+1];(255!=d||g!=u)&&(h[l++]=d,h[l++]=g);for(var p=2;p<i;p++)h[l++]=r[n+p]}else for(var p=0;p<i;p++)h[p]=r[n+p];if(32803==e.t262){var _=e.t258[0],m=new LosslessJpegDecoder().decode(h),b=m.length;if(16==_)for(var p=0;p<b;p++)o[a++]=255&m[p],o[a++]=m[p]>>>8;else if(12==_)for(var p=0;p<b;p+=2)o[a++]=m[p]>>>4,o[a++]=(m[p]<<4|m[p+1]>>>8)&255,o[a++]=255&m[p+1];else throw Error("unsupported bit depth "+_)}else{var v=new t.JpegDecoder;v.parse(h);for(var y=v.getData(v.width,v.height),p=0;p<y.length;p++)o[a+p]=y[p]}// PhotometricInterpretation is 6 (YCbCr) for JPEG, but after decoding we populate data in
// RGB format, so updating the tag value
6==e.t262[0]&&(e.t262[0]=2)},t.decode._decodeOldJPEGInit=function(t,e,r,i){var o,a,s,f,h,u=216,c=219,l=196,p=221,d=192,g=218,_=0,m=0,b=!1,v=t.t513,y=v?v[0]:0,w=t.t514,x=w?w[0]:0,E=t.t324||t.t273||v,k=t.t530,A=0,I=0,O=t.t277?t.t277[0]:1,S=t.t515;if(E&&(m=E[0],b=E.length>1),!b){if(255==e[r]&&e[r+1]==u)return{jpegOffset:r};if(null!=v&&(255==e[r+y]&&e[r+y+1]==u?_=r+y:n("JPEGInterchangeFormat does not point to SOI"),null==w?n("JPEGInterchangeFormatLength field is missing"):(y>=m||y+x<=m)&&n("JPEGInterchangeFormatLength field value is invalid"),null!=_))return{jpegOffset:_}}if(null!=k&&(A=k[0],I=k[1]),null!=v&&null!=w){if(x>=2&&y+x<=m){for(s=0,o=new Uint8Array(255==e[r+y+x-2]&&e[r+y+x-1]==u?x-2:x);s<o.length;s++)o[s]=e[r+y+s];n("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else n("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile")}if(null==o){var T=0,L=[];L[T++]=255,L[T++]=u;var P=t.t519;if(null==P)throw Error("JPEGQTables tag is missing");for(s=0;s<P.length;s++)for(f=0,L[T++]=255,L[T++]=c,L[T++]=0,L[T++]=67,L[T++]=s;f<64;f++)L[T++]=e[r+P[s]+f];for(h=0;h<2;h++){var j=t[0==h?"t520":"t521"];if(null==j)throw Error((0==h?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(s=0;s<j.length;s++){L[T++]=255,L[T++]=l;//out[ooff++] = 0; out[ooff++] = 67; out[ooff++] = i;
var R=19;for(f=0;f<16;f++)R+=e[r+j[s]+f];for(f=0,L[T++]=R>>>8,L[T++]=255&R,L[T++]=s|h<<4;f<16;f++)L[T++]=e[r+j[s]+f];for(f=0;f<R;f++)L[T++]=e[r+j[s]+16+f]}}if(L[T++]=255,L[T++]=d,L[T++]=0,L[T++]=8+3*O,L[T++]=8,L[T++]=t.height>>>8&255,L[T++]=255&t.height,L[T++]=t.width>>>8&255,L[T++]=255&t.width,L[T++]=O,1==O)L[T++]=1,L[T++]=17,L[T++]=0;else for(s=0;s<3;s++)L[T++]=s+1,L[T++]=0!=s?17:(15&A)<<4|15&I,L[T++]=s;null!=S&&0!=S[0]&&(L[T++]=255,L[T++]=p,L[T++]=0,L[T++]=4,L[T++]=S[0]>>>8&255,L[T++]=255&S[0]),o=new Uint8Array(L)}var U=-1;for(s=0;s<o.length-1;){if(255==o[s]&&o[s+1]==d){U=s;break}s++}if(-1==U){var B=new Uint8Array(o.length+10+3*O);B.set(o);var D=o.length;if(U=o.length,(o=B)[D++]=255,o[D++]=d,o[D++]=0,o[D++]=8+3*O,o[D++]=8,o[D++]=t.height>>>8&255,o[D++]=255&t.height,o[D++]=t.width>>>8&255,o[D++]=255&t.width,o[D++]=O,1==O)o[D++]=1,o[D++]=17,o[D++]=0;else for(s=0;s<3;s++)o[D++]=s+1,o[D++]=0!=s?17:(15&A)<<4|15&I,o[D++]=s}if(255==e[m]&&e[m+1]==g){var C=e[m+2]<<8|e[m+3];for(s=0,(a=new Uint8Array(C+2))[0]=e[m],a[1]=e[m+1],a[2]=e[m+2],a[3]=e[m+3];s<C-2;s++)a[s+4]=e[m+s+4]}else{a=new Uint8Array(8+2*O);var N=0;if(a[N++]=255,a[N++]=g,a[N++]=0,a[N++]=6+2*O,a[N++]=O,1==O)a[N++]=1,a[N++]=0;else for(s=0;s<3;s++)a[N++]=s+1,a[N++]=s<<4|s;a[N++]=0,a[N++]=63,a[N++]=0}return{jpegOffset:r,tables:o,sosMarker:a,sofPosition:U}},t.decode._decodeOldJPEG=function(e,r,n,i,o,a){var s,f,h,u,c=t.decode._decodeOldJPEGInit(e,r,n,i);if(null!=c.jpegOffset)for(s=0,f=n+i-c.jpegOffset,u=new Uint8Array(f);s<f;s++)u[s]=r[c.jpegOffset+s];else{for(h=c.tables.length,(u=new Uint8Array(h+c.sosMarker.length+i+2)).set(c.tables),u[c.sofPosition+5]=e.height>>>8&255,u[c.sofPosition+6]=255&e.height,u[c.sofPosition+7]=e.width>>>8&255,u[c.sofPosition+8]=255&e.width,(255!=r[n]||r[n+1]!=SOS)&&(u.set(c.sosMarker,bufoff),bufoff+=sosMarker.length),s=0;s<i;s++)u[bufoff++]=r[n+s];u[bufoff++]=255,u[bufoff++]=EOI}var l=new t.JpegDecoder;l.parse(u);for(var p=l.getData(l.width,l.height),s=0;s<p.length;s++)o[a+s]=p[s];// PhotometricInterpretation is 6 (YCbCr) for JPEG, but after decoding we populate data in
// RGB format, so updating the tag value
6==e.t262[0]&&(e.t262[0]=2)},t.decode._decodePackBits=function(t,e,r,n,i){for(var o=new Int8Array(t.buffer),a=new Int8Array(n.buffer),s=e+r;e<s;){var f=o[e];if(e++,f>=0&&f<128)for(var h=0;h<f+1;h++)a[i]=o[e],i++,e++;if(f>=-127&&f<0){for(var h=0;h<-f+1;h++)a[i]=o[e],i++;e++}}},t.decode._decodeThunder=function(t,e,r,n,i){for(var o=[0,1,0,-1],a=[0,1,2,3,0,-3,-2,-1],s=e+r,f=2*i,h=0;e<s;){var u=t[e],c=u>>>6,l=63&u;if(e++,3==c&&(h=15&l,n[f>>>1]|=h<<4*(1-f&1),f++),0==c)for(var p=0;p<l;p++)n[f>>>1]|=h<<4*(1-f&1),f++;if(2==c)for(var p=0;p<2;p++){var d=l>>>3*(1-p)&7;4!=d&&(h+=a[d],n[f>>>1]|=h<<4*(1-f&1),f++)}if(1==c)for(var p=0;p<3;p++){var d=l>>>2*(2-p)&3;2!=d&&(h+=o[d],n[f>>>1]|=h<<4*(1-f&1),f++)}}},t.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3},t.decode._lens=function(){var t=function(t,e,r,n){for(var i=0;i<e.length;i++)t[e[i]]=r+i*n},e="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",r="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",n="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",i="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",o="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";e=e.split(","),r=r.split(","),n=n.split(","),i=i.split(","),o=o.split(",");var a={},s={};return t(a,e,0,1),t(a,n,64,64),t(a,o,1792,64),t(s,r,0,1),t(s,i,64,64),t(s,o,1792,64),[a,s]}(),t.decode._decodeG4=function(e,r,n,i,o,a,s){for(var f=t.decode,h=r<<3,u=0,c="",l=[],p=[],d=0;d<a;d++)p.push(0);p=f._makeDiff(p);for(var g=0,_=0,m=0,b=0,v=0,y=0,w="",x=0,E=8*Math.ceil(a/8);h>>>3<r+n;){m=f._findDiff(p,g+(0==g?0:1),1-v),b=f._findDiff(p,m,v);var k=0;if(1==s&&(k=e[h>>>3]>>>7-(7&h)&1),2==s&&(k=e[h>>>3]>>>(7&h)&1),h++,c+=k,"H"==w){if(null!=f._lens[v][c]){var A=f._lens[v][c];c="",u+=A,A<64&&(f._addNtimes(l,u,v),g+=u,v=1-v,u=0,0==--x&&(w=""))}}else"0001"==c&&(c="",f._addNtimes(l,b-g,v),g=b),"001"==c&&(c="",w="H",x=2),null!=f._dmap[c]&&(_=m+f._dmap[c],f._addNtimes(l,_-g,v),g=_,c="",v=1-v);l.length==a&&""==w&&(f._writeBits(l,i,8*o+y*E),v=0,y++,g=0,p=f._makeDiff(l),l=[]);//if(wrd.length>150) {  log(wrd);  break;  throw "e";  }
}},t.decode._findDiff=function(t,e,r){for(var n=0;n<t.length;n+=2)if(t[n]>=e&&t[n+1]==r)return t[n]},t.decode._makeDiff=function(t){var e=[];1==t[0]&&e.push(0,1);for(var r=1;r<t.length;r++)t[r-1]!=t[r]&&e.push(r,t[r]);return e.push(t.length,0,t.length,1),e},t.decode._decodeG3=function(e,r,n,i,o,a,s){for(var f=t.decode,h=r<<3,u=0,c="",l=[],p=[],d=0;d<a;d++)l.push(0);for(var g=0,_=0,m=0,b=0,v=0,y=-1,w="",x=0,E=!1,k=8*Math.ceil(a/8);h>>>3<r+n;){m=f._findDiff(p,g+(0==g?0:1),1-v),b=f._findDiff(p,m,v);var A=0;if(1==s&&(A=e[h>>>3]>>>7-(7&h)&1),2==s&&(A=e[h>>>3]>>>(7&h)&1),h++,c+=A,E){if(null!=f._lens[v][c]){var I=f._lens[v][c];c="",u+=I,I<64&&(f._addNtimes(l,u,v),v=1-v,u=0)}}else if("H"==w){if(null!=f._lens[v][c]){var I=f._lens[v][c];c="",u+=I,I<64&&(f._addNtimes(l,u,v),g+=u,v=1-v,u=0,0==--x&&(w=""))}}else"0001"==c&&(c="",f._addNtimes(l,b-g,v),g=b),"001"==c&&(c="",w="H",x=2),null!=f._dmap[c]&&(_=m+f._dmap[c],f._addNtimes(l,_-g,v),g=_,c="",v=1-v);c.endsWith("000000000001")&&(y>=0&&f._writeBits(l,i,8*o+y*k),1==s&&(E=(e[h>>>3]>>>7-(7&h)&1)==1),2==s&&(E=(e[h>>>3]>>>(7&h)&1)==1),h++,null==f._decodeG3.allow2D&&(f._decodeG3.allow2D=E),!f._decodeG3.allow2D&&(E=!0,h--),//log("EOL",y, "next 1D:", is1D);
c="",v=0,y++,g=0,p=f._makeDiff(l),l=[])}l.length==a&&f._writeBits(l,i,8*o+y*k)},t.decode._addNtimes=function(t,e,r){for(var n=0;n<e;n++)t.push(r)},t.decode._writeBits=function(t,e,r){for(var n=0;n<t.length;n++)e[r+n>>>3]|=t[n]<<7-(r+n&7)},t.decode._decodeLZW=function(e,r,n,i){if(null==t.decode._lzwTab){for(var o=new Uint32Array(65535),a=new Uint16Array(65535),s=new Uint8Array(2e6),f=0;f<256;f++)s[f<<2]=f,o[f]=f<<2,a[f]=1;t.decode._lzwTab=[o,a,s]}for(var h=t.decode._copyData,u=t.decode._lzwTab[0],c=t.decode._lzwTab[1],s=t.decode._lzwTab[2],l=258,p=1032,d=9,g=r<<3,_=256,m=257,b=0,v=0,y=0;v=(b=e[g>>>3]<<16|e[g+8>>>3]<<8|e[g+16>>>3])>>24-(7&g)-d&(1<<d)-1,g+=d,v!=m;){if(v==_){if(d=9,l=258,p=1032,v=(b=e[g>>>3]<<16|e[g+8>>>3]<<8|e[g+16>>>3])>>24-(7&g)-d&(1<<d)-1,g+=d,v==m)break;n[i]=v,i++}else if(v<l){var w=u[v],x=c[v];if(h(s,w,n,i,x),i+=x,y>=l)u[l]=p,s[u[l]]=w[0],c[l]=1,p=p+1+3&-4,l++;else{u[l]=p;var E=u[y],k=c[y];h(s,E,s,p,k),s[p+k]=s[w],k++,c[l]=k,l++,p=p+k+3&-4}l+1==1<<d&&d++}else{if(y>=l)u[l]=p,c[l]=0,l++;else{u[l]=p;var E=u[y],k=c[y];h(s,E,s,p,k),s[p+k]=s[p],k++,c[l]=k,l++,h(s,p,n,i,k),i+=k,p=p+k+3&-4}l+1==1<<d&&d++}y=v}},t.decode._copyData=function(t,e,r,n,i){for(var o=0;o<i;o+=4)r[n+o]=t[e+o],r[n+o+1]=t[e+o+1],r[n+o+2]=t[e+o+2],r[n+o+3]=t[e+o+3]},t.tags={254:"NewSubfileType",255:"SubfileType",256:"ImageWidth",257:"ImageLength",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",266:"FillOrder",269:"DocumentName",270:"ImageDescription",271:"Make",272:"Model",273:"StripOffset",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",280:"MinSampleValue",281:"MaxSampleValue",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",285:"PageName",286:"XPosition",287:"YPosition",292:"T4Options",296:"ResolutionUnit",297:"PageNumber",305:"Software",306:"DateTime",315:"Artist",316:"HostComputer",317:"Predictor",318:"WhitePoint",319:"PrimaryChromaticities",320:"ColorMap",321:"HalftoneHints",322:"TileWidth",323:"TileLength",324:"TileOffset",325:"TileByteCounts",330:"SubIFDs",336:"DotRange",338:"ExtraSample",339:"SampleFormat",347:"JPEGTables",512:"JPEGProc",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",519:"JPEGQTables",520:"JPEGDCTables",521:"JPEGACTables",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite",700:"XMP",33421:"CFARepeatPatternDim",33422:"CFAPattern",33432:"Copyright",33434:"ExposureTime",33437:"FNumber",33723:"IPTC/NAA",34377:"Photoshop",34665:"ExifIFD",34675:"ICC Profile",34850:"ExposureProgram",34853:"GPSInfo",34855:"ISOSpeedRatings",34858:"TimeZoneOffset",34859:"SelfTimeMode",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37377:"ShutterSpeedValue",37378:"ApertureValue",37380:"ExposureBiasValue",37383:"MeteringMode",37385:"Flash",37386:"FocalLength",37390:"FocalPlaneXResolution",37391:"FocalPlaneYResolution",37392:"FocalPlaneResolutionUnit",37393:"ImageNumber",37398:"TIFF/EPStandardID",37399:"SensingMethod",37500:"MakerNote",37510:"UserComment",37724:"ImageSourceData",40092:"XPComment",40094:"XPKeywords",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelXDimension",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",50706:"DNGVersion",50707:"DNGBackwardVersion",50708:"UniqueCameraModel",50709:"LocalizedCameraModel",50710:"CFAPlaneColor",50711:"CFALayout",50712:"LinearizationTable",50713:"BlackLevelRepeatDim",50714:"BlackLevel",50716:"BlackLevelDeltaV",50717:"WhiteLevel",50718:"DefaultScale",50719:"DefaultCropOrigin",50720:"DefaultCropSize",50733:"BayerGreenSplit",50738:"AntiAliasStrength",50721:"ColorMatrix1",50722:"ColorMatrix2",50723:"CameraCalibration1",50724:"CameraCalibration2",50727:"AnalogBalance",50728:"AsShotNeutral",50730:"BaselineExposure",50731:"BaselineNoise",50732:"BaselineSharpness",50734:"LinearResponseLimit",50735:"CameraSerialNumber",50736:"LensInfo",50739:"ShadowScale",50740:"DNGPrivateData",50741:"MakerNoteSafety",50778:"CalibrationIlluminant1",50779:"CalibrationIlluminant2",50780:"BestQualityScale",50781:"RawDataUniqueID",50827:"OriginalRawFileName",50829:"ActiveArea",50830:"MaskedAreas",50931:"CameraCalibrationSignature",50932:"ProfileCalibrationSignature",50935:"NoiseReductionApplied",50936:"ProfileName",50937:"ProfileHueSatMapDims",50938:"ProfileHueSatMapData1",50939:"ProfileHueSatMapData2",50940:"ProfileToneCurve",50941:"ProfileEmbedPolicy",50942:"ProfileCopyright",50964:"ForwardMatrix1",50965:"ForwardMatrix2",50966:"PreviewApplicationName",50967:"PreviewApplicationVersion",50969:"PreviewSettingsDigest",50970:"PreviewColorSpace",50971:"PreviewDateTime",50972:"RawImageDigest",51008:"OpcodeList1",51009:"OpcodeList2",51022:"OpcodeList3",51041:"NoiseProfile",51089:"OriginalDefaultFinalSize",51090:"OriginalBestQualityFinalSize",51091:"OriginalDefaultCropSize",51125:"DefaultUserCrop"},t.ttypes={256:3,257:3,258:3,259:3,262:3,273:4,274:3,277:3,278:4,279:4,282:5,283:5,284:3,286:5,287:5,296:3,305:2,306:2,338:3,513:4,514:4,34665:4},t._readIFD=function(e,r,i,o){var a=e.readUshort(r,i);i+=2;var s={};o.push(s);//log(">>>----------------");
for(var f=0;f<a;f++){var h=e.readUshort(r,i);i+=2;var u=e.readUshort(r,i);i+=2;var c=e.readUint(r,i);i+=4;var l=e.readUint(r,i);i+=4;var p=[];//ifd["t"+tag+"-"+UTIF.tags[tag]] = arr;
if(s["t"+h]=p,1==u||7==u)for(var d=0;d<c;d++)p.push(r[(c<5?i-4:l)+d]);if(2==u&&p.push(e.readASCII(r,c<5?i-4:l,c-1)),3==u)for(var d=0;d<c;d++)p.push(e.readUshort(r,(c<3?i-4:l)+2*d));if(4==u)for(var d=0;d<c;d++)p.push(e.readUint(r,(c<2?i-4:l)+4*d));if(5==u)for(var d=0;d<c;d++)p.push(e.readUint(r,l+8*d)/e.readUint(r,l+8*d+4));if(8==u)for(var d=0;d<c;d++)p.push(e.readShort(r,(c<3?i-4:l)+2*d));if(9==u)for(var d=0;d<c;d++)p.push(e.readInt(r,(c<2?i-4:l)+4*d));if(10==u)for(var d=0;d<c;d++)p.push(e.readInt(r,l+8*d)/e.readInt(r,l+8*d+4));if(11==u)for(var d=0;d<c;d++)p.push(e.readFloat(r,l+4*d));if(12==u)for(var d=0;d<c;d++)p.push(e.readDouble(r,l+8*d));//log(tag, type, UTIF.tags[tag], arr);
if(0!=c&&0==p.length&&n("unknown TIFF tag type: ",u,"num:",c),330==h)for(var d=0;d<c;d++)t._readIFD(e,r,p[d],o);//if(tag==34665) UTIF._readIFD(bin, data, arr[0], ifds);
}//log("<<<---------------");
return i},t._writeIFD=function(e,r,n,i){var o=Object.keys(i);e.writeUshort(r,n,o.length);for(var a=(n+=2)+12*o.length+4,s=0;s<o.length;s++){var f=o[s],h=parseInt(f.slice(1)),u=t.ttypes[h];if(null==u)throw Error("unknown type of tag: "+h);var c=i[f];2==u&&(c=c[0]+"\x00");var l=c.length;e.writeUshort(r,n,h),n+=2,e.writeUshort(r,n,u),n+=2,e.writeUint(r,n,l);var p=[-1,1,1,2,4,8,0,0,0,0,0,0,8][u]*l,d=n+=4;if(p>4&&(e.writeUint(r,n,a),d=a),2==u&&e.writeASCII(r,d,c),3==u)for(var g=0;g<l;g++)e.writeUshort(r,d+2*g,c[g]);if(4==u)for(var g=0;g<l;g++)e.writeUint(r,d+4*g,c[g]);if(5==u)for(var g=0;g<l;g++)e.writeUint(r,d+8*g,Math.round(1e4*c[g])),e.writeUint(r,d+8*g+4,1e4);if(12==u)for(var g=0;g<l;g++)e.writeDouble(r,d+8*g,c[g]);p>4&&(p+=1&p,a+=p),n+=4}return[n,a]},t.toRGBA8=function(t){var e=t.width,r=t.height,i=e*r,o=4*i,a=t.data,s=new Uint8Array(4*i),f=t.t262[0],h=t.t258?Math.min(32,t.t258[0]):1,u=t.isLE?1:0;if(0==f)for(var c=Math.ceil(h*e/8),l=0;l<r;l++){var p=l*c,d=l*e;if(1==h)for(var g=0;g<e;g++){var _=d+g<<2,m=a[p+(g>>3)]>>7-(7&g)&1;s[_]=s[_+1]=s[_+2]=(1-m)*255,s[_+3]=255}if(4==h)for(var g=0;g<e;g++){var _=d+g<<2,m=a[p+(g>>1)]>>4-4*(1&g)&15;s[_]=s[_+1]=s[_+2]=(15-m)*17,s[_+3]=255}if(8==h)for(var g=0;g<e;g++){var _=d+g<<2,m=a[p+g];s[_]=s[_+1]=s[_+2]=255-m,s[_+3]=255}}else if(1==f)for(var c=Math.ceil(h*e/8),l=0;l<r;l++){var p=l*c,d=l*e;if(1==h)for(var g=0;g<e;g++){var _=d+g<<2,m=a[p+(g>>3)]>>7-(7&g)&1;s[_]=s[_+1]=s[_+2]=255*m,s[_+3]=255}if(2==h)for(var g=0;g<e;g++){var _=d+g<<2,m=a[p+(g>>2)]>>6-2*(3&g)&3;s[_]=s[_+1]=s[_+2]=85*m,s[_+3]=255}if(8==h)for(var g=0;g<e;g++){var _=d+g<<2,m=a[p+g];s[_]=s[_+1]=s[_+2]=m,s[_+3]=255}if(16==h)for(var g=0;g<e;g++){var _=d+g<<2,m=a[p+(2*g+u)];s[_]=s[_+1]=s[_+2]=Math.min(255,m),s[_+3]=255}// ladoga.tif
}else if(2==f){if(8==h){if(t.t338){if(t.t338[0]>0)for(var g=0;g<o;g++)s[g]=a[g];// sometimes t338 is 1 or 2 in case of Alpha
else for(var g=0;g<o;g+=4)s[g]=a[g],s[g+1]=a[g+1],s[g+2]=a[g+2],s[g+3]=255}else{var b=t.t258?t.t258.length:3;if(4==b)for(var g=0;g<o;g++)s[g]=a[g];if(3==b)for(var g=0;g<i;g++){var _=g<<2,v=3*g;s[_]=a[v],s[_+1]=a[v+1],s[_+2]=a[v+2],s[_+3]=255}}}else for(var g=0;g<i;g++){var _=g<<2,v=6*g;s[_]=a[v],s[_+1]=a[v+2],s[_+2]=a[v+4],s[_+3]=255}}else if(3==f)for(var y=t.t320,g=0;g<i;g++){var _=g<<2,w=a[g];s[_]=y[w]>>8,s[_+1]=y[256+w]>>8,s[_+2]=y[512+w]>>8,s[_+3]=255}else if(5==f)for(var b=t.t258?t.t258.length:4,x=b>4?1:0,g=0;g<i;g++){var _=g<<2,E=g*b,k=255-a[E],A=255-a[E+1],I=255-a[E+2],O=(255-a[E+3])*(1/255);s[_]=~~(k*O+.5),s[_+1]=~~(A*O+.5),s[_+2]=~~(I*O+.5),s[_+3]=255*(1-x)+a[E+4]*x}else n("Unknown Photometric interpretation: "+f);return s},t.replaceIMG=function(){for(var e=document.getElementsByTagName("img"),r=0;r<e.length;r++){var n=e[r],i=n.getAttribute("src");if(null!=i){var o=i.split(".").pop().toLowerCase();if("tif"==o||"tiff"==o){var a=new XMLHttpRequest;t._xhrs.push(a),t._imgs.push(n),a.open("GET",i),a.responseType="arraybuffer",a.onload=t._imgLoaded,a.send()}}}},t._xhrs=[],t._imgs=[],t._imgLoaded=function(e){var r=e.target.response,n=t.decode(r),i=n[0];t.decodeImages(r,n);var o=t.toRGBA8(i),a=i.width,s=i.height,f=t._xhrs.indexOf(e.target),h=t._imgs[f];t._xhrs.splice(f,1),t._imgs.splice(f,1);var u=document.createElement("canvas");u.width=a,u.height=s;for(var c=u.getContext("2d"),l=c.createImageData(a,s),p=0;p<o.length;p++)l.data[p]=o[p];c.putImageData(l,0,0);for(var d=["style","class","id"],p=0;p<d.length;p++)u.setAttribute(d[p],h.getAttribute(d[p]));h.parentNode.replaceChild(u,h)},t._binBE={nextZero:function(t,e){for(;0!=t[e];)e++;return e},readUshort:function(t,e){return t[e]<<8|t[e+1]},readShort:function(e,r){var n=t._binBE.ui8;return n[0]=e[r+1],n[1]=e[r+0],t._binBE.i16[0]},readInt:function(e,r){var n=t._binBE.ui8;return n[0]=e[r+3],n[1]=e[r+2],n[2]=e[r+1],n[3]=e[r+0],t._binBE.i32[0]},readUint:function(e,r){var n=t._binBE.ui8;return n[0]=e[r+3],n[1]=e[r+2],n[2]=e[r+1],n[3]=e[r+0],t._binBE.ui32[0]},readASCII:function(t,e,r){for(var n="",i=0;i<r;i++)n+=String.fromCharCode(t[e+i]);return n},readFloat:function(e,r){for(var n=t._binBE.ui8,i=0;i<4;i++)n[i]=e[r+3-i];return t._binBE.fl32[0]},readDouble:function(e,r){for(var n=t._binBE.ui8,i=0;i<8;i++)n[i]=e[r+7-i];return t._binBE.fl64[0]},writeUshort:function(t,e,r){t[e]=r>>8&255,t[e+1]=255&r},writeUint:function(t,e,r){t[e]=r>>24&255,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=r>>0&255},writeASCII:function(t,e,r){for(var n=0;n<r.length;n++)t[e+n]=r.charCodeAt(n)},writeDouble:function(e,r,n){t._binBE.fl64[0]=n;for(var i=0;i<8;i++)e[r+i]=t._binBE.ui8[7-i]}},t._binBE.ui8=new Uint8Array(8),t._binBE.i16=new Int16Array(t._binBE.ui8.buffer),t._binBE.i32=new Int32Array(t._binBE.ui8.buffer),t._binBE.ui32=new Uint32Array(t._binBE.ui8.buffer),t._binBE.fl32=new Float32Array(t._binBE.ui8.buffer),t._binBE.fl64=new Float64Array(t._binBE.ui8.buffer),t._binLE={nextZero:t._binBE.nextZero,readUshort:function(t,e){return t[e+1]<<8|t[e]},readShort:function(e,r){var n=t._binBE.ui8;return n[0]=e[r+0],n[1]=e[r+1],t._binBE.i16[0]},readInt:function(e,r){var n=t._binBE.ui8;return n[0]=e[r+0],n[1]=e[r+1],n[2]=e[r+2],n[3]=e[r+3],t._binBE.i32[0]},readUint:function(e,r){var n=t._binBE.ui8;return n[0]=e[r+0],n[1]=e[r+1],n[2]=e[r+2],n[3]=e[r+3],t._binBE.ui32[0]},readASCII:t._binBE.readASCII,readFloat:function(e,r){for(var n=t._binBE.ui8,i=0;i<4;i++)n[i]=e[r+i];return t._binBE.fl32[0]},readDouble:function(e,r){for(var n=t._binBE.ui8,i=0;i<8;i++)n[i]=e[r+i];return t._binBE.fl64[0]}},t._copyTile=function(t,e,r,n,i,o,a,s){for(var f=Math.min(e,i-a),h=Math.min(r,o-s),u=0;u<h;u++)for(var c=(s+u)*i+a,l=u*e,p=0;p<f;p++)n[c+p]=t[l+p]}}(e,parcelRequire("2HEFi"))}()}),parcelRequire.register("2HEFi",function(t,e){var r=parcelRequire("j5hbz").assign,n=parcelRequire("gxhdX"),i=parcelRequire("5MWNO"),o=parcelRequire("5hjao"),a={};r(a,n,i,o),t.exports=a}),parcelRequire.register("gxhdX",function(t,e){$parcel$export(t.exports,"Deflate",function(){return r},function(t){return r=t}),$parcel$export(t.exports,"deflate",function(){return n},function(t){return n=t}),$parcel$export(t.exports,"deflateRaw",function(){return i},function(t){return i=t}),$parcel$export(t.exports,"gzip",function(){return o},function(t){return o=t});var r,n,i,o,a=parcelRequire("bM1Vf"),s=parcelRequire("j5hbz"),f=parcelRequire("izeZl"),h=parcelRequire("6HEnc"),u=parcelRequire("djwfo"),c=Object.prototype.toString,l=0,p=4,d=0,g=1,_=2,m=-1,b=0,v=8;/* ===========================================================================*//**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **//* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **//**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **//**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **//**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **//**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/function y(t){if(!(this instanceof y))return new y(t);this.options=s.assign({level:m,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:b,to:""},t||{});var e,r=this.options;r.raw&&r.windowBits>0?r.windowBits=-r.windowBits:r.gzip&&r.windowBits>0&&r.windowBits<16&&(r.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var n=a.deflateInit2(this.strm,r.level,r.method,r.windowBits,r.memLevel,r.strategy);if(n!==d)throw Error(h[n]);if(r.header&&a.deflateSetHeader(this.strm,r.header),r.dictionary){if(e="string"==typeof r.dictionary?f.string2buf(r.dictionary):"[object ArrayBuffer]"===c.call(r.dictionary)?new Uint8Array(r.dictionary):r.dictionary,(n=a.deflateSetDictionary(this.strm,e))!==d)throw Error(h[n]);this._dict_set=!0}}/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/function w(t,e){var r=new y(e);// That will never happens, if you don't cheat with options :)
if(r.push(t,!0),r.err)throw r.msg||h[r.err];return r.result}/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/function x(t,e){return(e=e||{}).raw=!0,w(t,e)}/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/function E(t,e){return(e=e||{}).gzip=!0,w(t,e)}/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/y.prototype.push=function(t,e){var r,n,i=this.strm,o=this.options.chunkSize;if(this.ended)return!1;n=e===~~e?e:!0===e?p:l,"string"==typeof t?i.input=f.string2buf(t):"[object ArrayBuffer]"===c.call(t)?i.input=new Uint8Array(t):i.input=t,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new s.Buf8(o),i.next_out=0,i.avail_out=o),(r=a.deflate(i,n))!==g&&r!==d)return this.onEnd(r),this.ended=!0,!1;(0===i.avail_out||0===i.avail_in&&(n===p||n===_))&&("string"===this.options.to?this.onData(f.buf2binstring(s.shrinkBuf(i.output,i.next_out))):this.onData(s.shrinkBuf(i.output,i.next_out)))}while((i.avail_in>0||0===i.avail_out)&&r!==g)return(// Finalize on the last chunk.
n===p?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===d):(n===_&&(this.onEnd(d),i.avail_out=0),!0))},/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/y.prototype.onData=function(t){this.chunks.push(t)},/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/y.prototype.onEnd=function(t){t===d&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r=y,n=w,i=x,o=E}),parcelRequire.register("izeZl",function(t,e){$parcel$export(t.exports,"string2buf",function(){return r},function(t){return r=t}),$parcel$export(t.exports,"buf2binstring",function(){return n},function(t){return n=t}),$parcel$export(t.exports,"binstring2buf",function(){return i},function(t){return i=t}),$parcel$export(t.exports,"buf2string",function(){return o},function(t){return o=t}),$parcel$export(t.exports,"utf8border",function(){return a},function(t){return a=t});var r,n,i,o,a,s=parcelRequire("j5hbz"),f=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch(t){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){h=!1}for(var u=new s.Buf8(256),c=0;c<256;c++)u[c]=c>=252?6:c>=248?5:c>=240?4:c>=224?3:c>=192?2:1;// Helper (used in 2 places)
function l(t,e){// On Chrome, the arguments in a function call that are allowed is `65534`.
// If the length of the buffer is smaller than that, we can use this optimization,
// otherwise we will take a slower path.
if(e<65534&&(t.subarray&&h||!t.subarray&&f))return String.fromCharCode.apply(null,s.shrinkBuf(t,e));for(var r="",n=0;n<e;n++)r+=String.fromCharCode(t[n]);return r}u[254]=u[254]=1,r=function(t){var e,r,n,i,o,a=t.length,f=0;// count binary size
for(i=0;i<a;i++)(64512&(r=t.charCodeAt(i)))==55296&&i+1<a&&(64512&(n=t.charCodeAt(i+1)))==56320&&(r=65536+(r-55296<<10)+(n-56320),i++),f+=r<128?1:r<2048?2:r<65536?3:4;// convert
for(o=0,// allocate buffer
e=new s.Buf8(f),i=0;o<f;i++)(64512&(r=t.charCodeAt(i)))==55296&&i+1<a&&(64512&(n=t.charCodeAt(i+1)))==56320&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?/* one byte */e[o++]=r:(r<2048?/* two bytes */e[o++]=192|r>>>6:(r<65536?/* three bytes */e[o++]=224|r>>>12:(/* four bytes */e[o++]=240|r>>>18,e[o++]=128|r>>>12&63),e[o++]=128|r>>>6&63),e[o++]=128|63&r);return e},n=function(t){return l(t,t.length)},i=function(t){for(var e=new s.Buf8(t.length),r=0,n=e.length;r<n;r++)e[r]=t.charCodeAt(r);return e},o=function(t,e){var r,n,i,o,a=e||t.length,s=Array(2*a);for(n=0,r=0;r<a;){// quick process ascii
if((i=t[r++])<128){s[n++]=i;continue}// skip 5 & 6 byte codes
if((o=u[i])>4){s[n++]=65533,r+=o-1;continue}// join the rest
for(// apply mask on first byte
i&=2===o?31:3===o?15:7;o>1&&r<a;)i=i<<6|63&t[r++],o--;// terminated by end of string?
if(o>1){s[n++]=65533;continue}i<65536?s[n++]=i:(i-=65536,s[n++]=55296|i>>10&1023,s[n++]=56320|1023&i)}return l(s,n)},a=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),// go back from last position, until start of sequence found
r=e-1;r>=0&&(192&t[r])==128;)r--;return(// Very small and broken sequence,
// return max, because we should return something anyway.
r<0||0===r?e:r+u[t[r]]>e?r:e)}}),parcelRequire.register("5MWNO",function(t,e){$parcel$export(t.exports,"Inflate",function(){return r},function(t){return r=t}),$parcel$export(t.exports,"inflate",function(){return n},function(t){return n=t}),$parcel$export(t.exports,"inflateRaw",function(){return i},function(t){return i=t}),$parcel$export(t.exports,"ungzip",function(){return o},function(t){return o=t});var r,n,i,o,a=parcelRequire("2oyGs"),s=parcelRequire("j5hbz"),f=parcelRequire("izeZl"),h=parcelRequire("5hjao"),u=parcelRequire("6HEnc"),c=parcelRequire("djwfo"),l=parcelRequire("4f9GF"),p=Object.prototype.toString;/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **//* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **//**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **//**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **//**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **//**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/function d(t){if(!(this instanceof d))return new d(t);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(t&&t.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(15&e.windowBits)==0&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var r=a.inflateInit2(this.strm,e.windowBits);if(r!==h.Z_OK||(this.header=new l,a.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=f.string2buf(e.dictionary):"[object ArrayBuffer]"===p.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(r=a.inflateSetDictionary(this.strm,e.dictionary))!==h.Z_OK)))throw Error(u[r])}/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/function g(t,e){var r=new d(e);// That will never happens, if you don't cheat with options :)
if(r.push(t,!0),r.err)throw r.msg||u[r.err];return r.result}/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/function _(t,e){return(e=e||{}).raw=!0,g(t,e)}/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/d.prototype.push=function(t,e){var r,n,i,o,u,c=this.strm,l=this.options.chunkSize,d=this.options.dictionary,g=!1;if(this.ended)return!1;n=e===~~e?e:!0===e?h.Z_FINISH:h.Z_NO_FLUSH,"string"==typeof t?c.input=f.binstring2buf(t):"[object ArrayBuffer]"===p.call(t)?c.input=new Uint8Array(t):c.input=t,c.next_in=0,c.avail_in=c.input.length;do{if(0===c.avail_out&&(c.output=new s.Buf8(l),c.next_out=0,c.avail_out=l),(r=a.inflate(c,h.Z_NO_FLUSH))===h.Z_NEED_DICT&&d&&(r=a.inflateSetDictionary(this.strm,d)),r===h.Z_BUF_ERROR&&!0===g&&(r=h.Z_OK,g=!1),r!==h.Z_STREAM_END&&r!==h.Z_OK)return this.onEnd(r),this.ended=!0,!1;c.next_out&&(0===c.avail_out||r===h.Z_STREAM_END||0===c.avail_in&&(n===h.Z_FINISH||n===h.Z_SYNC_FLUSH))&&("string"===this.options.to?(i=f.utf8border(c.output,c.next_out),o=c.next_out-i,u=f.buf2string(c.output,i),// move tail
c.next_out=o,c.avail_out=l-o,o&&s.arraySet(c.output,c.output,i,o,0),this.onData(u)):this.onData(s.shrinkBuf(c.output,c.next_out))),0===c.avail_in&&0===c.avail_out&&(g=!0)}while((c.avail_in>0||0===c.avail_out)&&r!==h.Z_STREAM_END)return(// Finalize on the last chunk.
(r===h.Z_STREAM_END&&(n=h.Z_FINISH),n===h.Z_FINISH)?(r=a.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===h.Z_OK):(n===h.Z_SYNC_FLUSH&&(this.onEnd(h.Z_OK),c.avail_out=0),!0))},/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/d.prototype.onData=function(t){this.chunks.push(t)},/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/d.prototype.onEnd=function(t){t===h.Z_OK&&("string"===this.options.to?// utf8 aligned strings to onData
this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r=d,n=g,i=_,o=g}),parcelRequire.register("4f9GF",function(t,e){// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function r(){/* true if compressed data believed to be text */this.text=0,/* modification time */this.time=0,/* extra flags (not used when writing a gzip file) */this.xflags=0,/* operating system */this.os=0,/* pointer to extra field or Z_NULL if none */this.extra=null,/* extra field length (valid if extra != Z_NULL) */this.extra_len=0,// but leave for few code modifications
//
// Setup limits is not necessary because in js we should not preallocate memory
// for inflate use constant limit in 65536 bytes
//
/* space at extra (only when reading header) */// this.extra_max  = 0;
/* pointer to zero-terminated file name or Z_NULL */this.name="",/* space at name (only when reading header) */// this.name_max   = 0;
/* pointer to zero-terminated comment or Z_NULL */this.comment="",/* space at comment (only when reading header) */// this.comm_max   = 0;
/* true if there was or will be a header crc */this.hcrc=0,/* true when done reading gzip header (not used when writing a gzip file) */this.done=!1}t.exports=r}),parcelRequire.register("fKIcC",function(t,e){t.exports=function(t,e){}});