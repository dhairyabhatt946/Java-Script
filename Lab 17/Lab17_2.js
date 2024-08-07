const path = require('path');

//It will normalize the given path, resolving '..' and '.' segments.
console.log(path.normalize('/foo/abc/..'));

//It will join two paths and normalize it.
console.log(path.join('/foo', 'bar', 'abc'));

//It resolves a sequence of paths into an absolute path.
console.log(path.resolve('Lab Solution', 'Lab 17'));

// It returns relative path from path1 to path2.
console.log(path.relative('/Web Technology/Lab Solution', '/Web Technology/Lab 17'));

const filePath = "D:\\Darshan University\\Semester 3\\Web Technology\\Lab Solution\\Lab 17\\Lab17_2.js";
ans1 = path.dirname(filePath);
ans2 = path.basename(filePath);
ans3 = path.extname(filePath);
console.log("dirname",ans1)
console.log("basename",ans2)
console.log("extname",ans3)