(this.webpackJsonpalgoes=this.webpackJsonpalgoes||[]).push([[17],{108:function(t,n,i){"use strict";i.r(n);var e=i(2),r=i(1),a=i.n(r),l=i(3),u=i(0);i(5),i(4);n.default=function(){var t=Object(r.useState)(a.a.createRef()),n=Object(e.a)(t,2),i=n[0],p=(n[1],Object(r.useState)('package main\n\nimport (\n\t"fmt"\n\t"math"\n)\n\nfunc main() {\n\t// array variable declaration\n\tinput: = [] int {\t5,\t4,\t3,\t2,\t1\t}\n\tsort(input, 0, len(input) - 1)\n\tfmt.Println(input)\n}\n\nfunc sort(input[] int, l int, r int) {\n\tif l < r {\n\t\t// math floor\n\t\tvar m float64 = float64(l) + math.Floor((float64(r) - float64(l)) / 2)\n\t\tvar middle = int(m)\n\t\tsort(input, l, middle)\n\t\tsort(input, middle + 1, r)\n\t\tmerge(input, l, middle, r)\n\t}\n}\n\nfunc swap(input[] int, i int, j int) {\n\tvar tmp = input[i]\n\tinput[i] = input[j]\n\tinput[j] = tmp\n}\n\nfunc merge(input[] int, l int, m int, r int) {\n\tvar i = l\n\tvar j = m + 1\n\n\tfor i <= m && j <= r {\n\t\tif input[i] > input[j] {\n\t\t\t// swap\n\t\t\tswap(input, i, j)\n\t\t\ti++\n\t\t\tj++\n\t\t\tfor k: = j;\n\t\t\tk <= r;\n\t\t\tk++{\n\t\t\t\tif input[k - 1] > input[k] {\n\t\t\t\t\tswap(input, k - 1, k)\n\t\t\t\t}\n\t\t\t}\n\t\t\tj = m + 1\n\t\t} else {\n\t\t\ti++\n\t\t\tj++\n\t\t}\n\t}\n}\n')),o=Object(e.a)(p,2),s=o[0];o[1];return Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("h5",{children:"Merge Sort with GoLang"}),Object(u.jsx)("div",{children:Object(u.jsx)(l.UnControlled,{value:s,ref:i,options:{lineNumbers:!0,matchBrackets:!0,continueComments:"Enter",extraKeys:{"Ctrl-Q":"toggleComment"}},style:{height:"800px"}})})]})}}}]);
//# sourceMappingURL=17.cf153522.chunk.js.map