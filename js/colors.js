/**
 * Created by eeng1 on 8/18/2015.
 */
function colorLookup(type,data){
    if(type == 'pci'){
        //var pciTable = 'Unnamed Color Table\nminval 0\nmaxval 0\navgval 0\navgvalnz 0\n0 0 0 0 0\n1 0 0 128 0\n2 0 128 0 0\n3 0 128 128 0\n4 128 0 0 0\n5 128 0 128 0\n6 128 128 0 0\n7 128 128 128 0\n8 0 0 64 0\n9 0 0 192 0\n10 0 128 64 0\n11 0 128 192 0\n12 128 0 64 0\n13 128 0 192 0\n14 128 128 64 0\n15 128 128 192 0\n16 0 64 0 0\n17 0 64 128 0\n18 0 192 0 0\n19 0 192 128 0\n20 128 64 0 0\n21 128 64 128 0\n22 128 192 0 0\n23 128 192 128 0\n24 0 64 64 0\n25 0 64 192 0\n26 0 192 64 0\n27 0 192 192 0\n28 128 64 64 0\n29 128 64 192 0\n30 128 192 64 0\n31 128 192 192 0\n32 64 0 0 0\n33 64 0 128 0\n34 64 128 0 0\n35 64 128 128 0\n36 192 0 0 0\n37 192 0 128 0\n38 192 128 0 0\n39 192 128 128 0\n40 64 0 64 0\n41 64 0 192 0\n42 64 128 64 0\n43 64 128 192 0\n44 192 0 64 0\n45 192 0 192 0\n46 192 128 64 0\n47 192 128 192 0\n48 64 64 0 0\n49 64 64 128 0\n50 64 192 0 0\n51 64 192 128 0\n52 192 64 0 0\n53 192 64 128 0\n54 192 192 0 0\n55 192 192 128 0\n56 64 64 64 0\n57 64 64 192 0\n58 64 192 64 0\n59 64 192 192 0\n60 192 64 64 0\n61 192 64 192 0\n62 192 192 64 0\n63 192 192 192 0\n64 0 0 32 0\n65 0 0 160 0\n66 0 128 32 0\n67 0 128 160 0\n68 128 0 32 0\n69 128 0 160 0\n70 128 128 32 0\n71 128 128 160 0\n72 0 0 96 0\n73 0 0 224 0\n74 0 128 96 0\n75 0 128 224 0\n76 128 0 96 0\n77 128 0 224 0\n78 128 128 96 0\n79 128 128 224 0\n80 0 64 32 0\n81 0 64 160 0\n82 0 192 32 0\n83 0 192 160 0\n84 128 64 32 0\n85 128 64 160 0\n86 128 192 32 0\n87 128 192 160 0\n88 0 64 96 0\n89 0 64 224 0\n90 0 192 96 0\n91 0 192 224 0\n92 128 64 96 0\n93 128 64 224 0\n94 128 192 96 0\n95 128 192 224 0\n96 64 0 32 0\n97 64 0 160 0\n98 64 128 32 0\n99 64 128 160 0\n100 192 0 32 0\n101 192 0 160 0\n102 192 128 32 0\n103 192 128 160 0\n104 64 0 96 0\n105 64 0 224 0\n106 64 128 96 0\n107 64 128 224 0\n108 192 0 96 0\n109 192 0 224 0\n110 192 128 96 0\n111 192 128 224 0\n112 64 64 32 0\n113 64 64 160 0\n114 64 192 32 0\n115 64 192 160 0\n116 192 64 32 0\n117 192 64 160 0\n118 192 192 32 0\n119 192 192 160 0\n120 64 64 96 0\n121 64 64 224 0\n122 64 192 96 0\n123 64 192 224 0\n124 192 64 96 0\n125 192 64 224 0\n126 192 192 96 0\n127 192 192 224 0\n128 0 32 0 0\n129 0 32 128 0\n130 0 160 0 0\n131 0 160 128 0\n132 128 32 0 0\n133 128 32 128 0\n134 128 160 0 0\n135 128 160 128 0\n136 0 32 64 0\n137 0 32 192 0\n138 0 160 64 0\n139 0 160 192 0\n140 128 32 64 0\n141 128 32 192 0\n142 128 160 64 0\n143 128 160 192 0\n144 0 96 0 0\n145 0 96 128 0\n146 0 224 0 0\n147 0 224 128 0\n148 128 96 0 0\n149 128 96 128 0\n150 128 224 0 0\n151 128 224 128 0\n152 0 96 64 0\n153 0 96 192 0\n154 0 224 64 0\n155 0 224 192 0\n156 128 96 64 0\n157 128 96 192 0\n158 128 224 64 0\n159 128 224 192 0\n160 64 32 0 0\n161 64 32 128 0\n162 64 160 0 0\n163 64 160 128 0\n164 192 32 0 0\n165 192 32 128 0\n166 192 160 0 0\n167 192 160 128 0\n168 64 32 64 0\n169 64 32 192 0\n170 64 160 64 0\n171 64 160 192 0\n172 192 32 64 0\n173 192 32 192 0\n174 192 160 64 0\n175 192 160 192 0\n176 64 96 0 0\n177 64 96 128 0\n178 64 224 0 0\n179 64 224 128 0\n180 192 96 0 0\n181 192 96 128 0\n182 192 224 0 0\n183 192 224 128 0\n184 64 96 64 0\n185 64 96 192 0\n186 64 224 64 0\n187 64 224 192 0\n188 192 96 64 0\n189 192 96 192 0\n190 192 224 64 0\n191 192 224 192 0\n192 0 32 32 0\n193 0 32 160 0\n194 0 160 32 0\n195 0 160 160 0\n196 128 32 32 0\n197 128 32 160 0\n198 128 160 32 0\n199 128 160 160 0\n200 0 32 96 0\n201 0 32 224 0\n202 0 160 96 0\n203 0 160 224 0\n204 128 32 96 0\n205 128 32 224 0\n206 128 160 96 0\n207 128 160 224 0\n208 0 96 32 0\n209 0 96 160 0\n210 0 224 32 0\n211 0 224 160 0\n212 128 96 32 0\n213 128 96 160 0\n214 128 224 32 0\n215 128 224 160 0\n216 0 96 96 0\n217 0 96 224 0\n218 0 224 96 0\n219 0 224 224 0\n220 128 96 96 0\n221 128 96 224 0\n222 128 224 96 0\n223 128 224 224 0\n224 64 32 32 0\n225 64 32 160 0\n226 64 160 32 0\n227 64 160 160 0\n228 192 32 32 0\n229 192 32 160 0\n230 192 160 32 0\n231 192 160 160 0\n232 64 32 96 0\n233 64 32 224 0\n234 64 160 96 0\n235 64 160 224 0\n236 192 32 96 0\n237 192 32 224 0\n238 192 160 96 0\n239 192 160 224 0\n240 64 96 32 0\n241 64 96 160 0\n242 64 224 32 0\n243 64 224 160 0\n244 192 96 32 0\n245 192 96 160 0\n246 192 224 32 0\n247 192 224 160 0\n248 64 96 96 0\n249 64 96 224 0\n250 64 224 96 0\n251 64 224 224 0\n252 192 96 96 0\n253 192 96 224 0\n254 192 224 96 0\n255 192 224 224 0\n256 32 0 0 0\n257 32 0 128 0\n258 32 128 0 0\n259 32 128 128 0\n260 160 0 0 0\n261 160 0 128 0\n262 160 128 0 0\n263 160 128 128 0\n264 32 0 64 0\n265 32 0 192 0\n266 32 128 64 0\n267 32 128 192 0\n268 160 0 64 0\n269 160 0 192 0\n270 160 128 64 0\n271 160 128 192 0\n272 32 64 0 0\n273 32 64 128 0\n274 32 192 0 0\n275 32 192 128 0\n276 160 64 0 0\n277 160 64 128 0\n278 160 192 0 0\n279 160 192 128 0\n280 32 64 64 0\n281 32 64 192 0\n282 32 192 64 0\n283 32 192 192 0\n284 160 64 64 0\n285 160 64 192 0\n286 160 192 64 0\n287 160 192 192 0\n288 96 0 0 0\n289 96 0 128 0\n290 96 128 0 0\n291 96 128 128 0\n292 224 0 0 0\n293 224 0 128 0\n294 224 128 0 0\n295 224 128 128 0\n296 96 0 64 0\n297 96 0 192 0\n298 96 128 64 0\n299 96 128 192 0\n300 224 0 64 0\n301 224 0 192 0\n302 224 128 64 0\n303 224 128 192 0\n304 96 64 0 0\n305 96 64 128 0\n306 96 192 0 0\n307 96 192 128 0\n308 224 64 0 0\n309 224 64 128 0\n310 224 192 0 0\n311 224 192 128 0\n312 96 64 64 0\n313 96 64 192 0\n314 96 192 64 0\n315 96 192 192 0\n316 224 64 64 0\n317 224 64 192 0\n318 224 192 64 0\n319 224 192 192 0\n320 32 0 32 0\n321 32 0 160 0\n322 32 128 32 0\n323 32 128 160 0\n324 160 0 32 0\n325 160 0 160 0\n326 160 128 32 0\n327 160 128 160 0\n328 32 0 96 0\n329 32 0 224 0\n330 32 128 96 0\n331 32 128 224 0\n332 160 0 96 0\n333 160 0 224 0\n334 160 128 96 0\n335 160 128 224 0\n336 32 64 32 0\n337 32 64 160 0\n338 32 192 32 0\n339 32 192 160 0\n340 160 64 32 0\n341 160 64 160 0\n342 160 192 32 0\n343 160 192 160 0\n344 32 64 96 0\n345 32 64 224 0\n346 32 192 96 0\n347 32 192 224 0\n348 160 64 96 0\n349 160 64 224 0\n350 160 192 96 0\n351 160 192 224 0\n352 96 0 32 0\n353 96 0 160 0\n354 96 128 32 0\n355 96 128 160 0\n356 224 0 32 0\n357 224 0 160 0\n358 224 128 32 0\n359 224 128 160 0\n360 96 0 96 0\n361 96 0 224 0\n362 96 128 96 0\n363 96 128 224 0\n364 224 0 96 0\n365 224 0 224 0\n366 224 128 96 0\n367 224 128 224 0\n368 96 64 32 0\n369 96 64 160 0\n370 96 192 32 0\n371 96 192 160 0\n372 224 64 32 0\n373 224 64 160 0\n374 224 192 32 0\n375 224 192 160 0\n376 96 64 96 0\n377 96 64 224 0\n378 96 192 96 0\n379 96 192 224 0\n380 224 64 96 0\n381 224 64 224 0\n382 224 192 96 0\n383 224 192 224 0\n384 32 32 0 0\n385 32 32 128 0\n386 32 160 0 0\n387 32 160 128 0\n388 160 32 0 0\n389 160 32 128 0\n390 160 160 0 0\n391 160 160 128 0\n392 32 32 64 0\n393 32 32 192 0\n394 32 160 64 0\n395 32 160 192 0\n396 160 32 64 0\n397 160 32 192 0\n398 160 160 64 0\n399 160 160 192 0\n400 32 96 0 0\n401 32 96 128 0\n402 32 224 0 0\n403 32 224 128 0\n404 160 96 0 0\n405 160 96 128 0\n406 160 224 0 0\n407 160 224 128 0\n408 32 96 64 0\n409 32 96 192 0\n410 32 224 64 0\n411 32 224 192 0\n412 160 96 64 0\n413 160 96 192 0\n414 160 224 64 0\n415 160 224 192 0\n416 96 32 0 0\n417 96 32 128 0\n418 96 160 0 0\n419 96 160 128 0\n420 224 32 0 0\n421 224 32 128 0\n422 224 160 0 0\n423 224 160 128 0\n424 96 32 64 0\n425 96 32 192 0\n426 96 160 64 0\n427 96 160 192 0\n428 224 32 64 0\n429 224 32 192 0\n430 224 160 64 0\n431 224 160 192 0\n432 96 96 0 0\n433 96 96 128 0\n434 96 224 0 0\n435 96 224 128 0\n436 224 96 0 0\n437 224 96 128 0\n438 224 224 0 0\n439 224 224 128 0\n440 96 96 64 0\n441 96 96 192 0\n442 96 224 64 0\n443 96 224 192 0\n444 224 96 64 0\n445 224 96 192 0\n446 224 224 64 0\n447 224 224 192 0\n448 32 32 32 0\n449 32 32 160 0\n450 32 160 32 0\n451 32 160 160 0\n452 160 32 32 0\n453 160 32 160 0\n454 160 160 32 0\n455 160 160 160 0\n456 32 32 96 0\n457 32 32 224 0\n458 32 160 96 0\n459 32 160 224 0\n460 160 32 96 0\n461 160 32 224 0\n462 160 160 96 0\n463 160 160 224 0\n464 32 96 32 0\n465 32 96 160 0\n466 32 224 32 0\n467 32 224 160 0\n468 160 96 32 0\n469 160 96 160 0\n470 160 224 32 0\n471 160 224 160 0\n472 32 96 96 0\n473 32 96 224 0\n474 32 224 96 0\n475 32 224 224 0\n476 160 96 96 0\n477 160 96 224 0\n478 160 224 96 0\n479 160 224 224 0\n480 96 32 32 0\n481 96 32 160 0\n482 96 160 32 0\n483 96 160 160 0\n484 224 32 32 0\n485 224 32 160 0\n486 224 160 32 0\n487 224 160 160 0\n488 96 32 96 0\n489 96 32 224 0\n490 96 160 96 0\n491 96 160 224 0\n492 224 32 96 0\n493 224 32 224 0\n494 224 160 96 0\n495 224 160 224 0\n496 96 96 32 0\n497 96 96 160 0\n498 96 224 32 0\n499 96 224 160 0\n500 224 96 32 0\n501 224 96 160 0\n502 224 224 32 0\n503 224 224 160 0\n504 96 96 96 0\n505 96 96 224 0\n506 96 224 96 0\n507 96 224 224 0\n508 224 96 96 0\n509 224 96 224 0\n510 224 224 96 0\n511 224 224 224 0\nendcolortable'.split('\n');
        var pciTable = "Unnamed Color Table\nminval 0\nmaxval 0\navgval 0\navgvalnz 0\n0 0 0 0 0\n1 0 0 128 0\n2 0 128 0 0\n3 0 128 128 0\n4 128 0 0 0\n5 128 0 128 0\n6 128 128 0 0\n7 128 128 128 0\n8 0 0 64 0\n9 0 0 192 0\n10 0 128 64 0\n11 0 128 192 0\n12 128 0 64 0\n13 128 0 192 0\n14 128 128 64 0\n15 128 128 192 0\n16 0 64 0 0\n17 0 64 128 0\n18 0 192 0 0\n19 0 192 128 0\n20 128 64 0 0\n21 128 64 128 0\n22 128 192 0 0\n23 128 192 128 0\n24 0 64 64 0\n25 0 64 192 0\n26 0 192 64 0\n27 0 192 192 0\n28 128 64 64 0\n29 128 64 192 0\n30 128 192 64 0\n31 128 192 192 0\n32 64 0 0 0\n33 64 0 128 0\n34 64 128 0 0\n35 64 128 128 0\n36 192 0 0 0\n37 192 0 128 0\n38 192 128 0 0\n39 192 128 128 0\n40 64 0 64 0\n41 64 0 192 0\n42 64 128 64 0\n43 64 128 192 0\n44 192 0 64 0\n45 192 0 192 0\n46 192 128 64 0\n47 192 128 192 0\n48 64 64 0 0\n49 64 64 128 0\n50 64 192 0 0\n51 64 192 128 0\n52 192 64 0 0\n53 192 64 128 0\n54 192 192 0 0\n55 192 192 128 0\n56 64 64 64 0\n57 64 64 192 0\n58 64 192 64 0\n59 64 192 192 0\n60 192 64 64 0\n61 192 64 192 0\n62 192 192 64 0\n63 192 192 192 0\n64 0 0 32 0\n65 0 0 160 0\n66 0 128 32 0\n67 0 128 160 0\n68 128 0 32 0\n69 128 0 160 0\n70 128 128 32 0\n71 128 128 160 0\n72 0 0 96 0\n73 0 0 224 0\n74 0 128 96 0\n75 0 128 224 0\n76 128 0 96 0\n77 128 0 224 0\n78 128 128 96 0\n79 128 128 224 0\n80 0 64 32 0\n81 0 64 160 0\n82 0 192 32 0\n83 0 192 160 0\n84 128 64 32 0\n85 128 64 160 0\n86 128 192 32 0\n87 128 192 160 0\n88 0 64 96 0\n89 0 64 224 0\n90 0 192 96 0\n91 0 192 224 0\n92 128 64 96 0\n93 128 64 224 0\n94 128 192 96 0\n95 128 192 224 0\n96 64 0 32 0\n97 64 0 160 0\n98 64 128 32 0\n99 64 128 160 0\n100 192 0 32 0\n101 192 0 160 0\n102 192 128 32 0\n103 192 128 160 0\n104 64 0 96 0\n105 64 0 224 0\n106 64 128 96 0\n107 64 128 224 0\n108 192 0 96 0\n109 192 0 224 0\n110 192 128 96 0\n111 192 128 224 0\n112 64 64 32 0\n113 64 64 160 0\n114 64 192 32 0\n115 64 192 160 0\n116 192 64 32 0\n117 192 64 160 0\n118 192 192 32 0\n119 192 192 160 0\n120 64 64 96 0\n121 64 64 224 0\n122 64 192 96 0\n123 64 192 224 0\n124 192 64 96 0\n125 192 64 224 0\n126 192 192 96 0\n127 192 192 224 0\n128 0 32 0 0\n129 0 32 128 0\n130 0 160 0 0\n131 0 160 128 0\n132 128 32 0 0\n133 128 32 128 0\n134 128 160 0 0\n135 128 160 128 0\n136 0 32 64 0\n137 0 32 192 0\n138 0 160 64 0\n139 0 160 192 0\n140 128 32 64 0\n141 128 32 192 0\n142 128 160 64 0\n143 128 160 192 0\n144 0 96 0 0\n145 0 96 128 0\n146 0 224 0 0\n147 0 224 128 0\n148 128 96 0 0\n149 128 96 128 0\n150 128 224 0 0\n151 128 224 128 0\n152 0 96 64 0\n153 0 96 192 0\n154 0 224 64 0\n155 0 224 192 0\n156 128 96 64 0\n157 128 96 192 0\n158 128 224 64 0\n159 128 224 192 0\n160 64 32 0 0\n161 64 32 128 0\n162 64 160 0 0\n163 64 160 128 0\n164 192 32 0 0\n165 192 32 128 0\n166 192 160 0 0\n167 192 160 128 0\n168 64 32 64 0\n169 64 32 192 0\n170 64 160 64 0\n171 64 160 192 0\n172 192 32 64 0\n173 192 32 192 0\n174 192 160 64 0\n175 192 160 192 0\n176 64 96 0 0\n177 64 96 128 0\n178 64 224 0 0\n179 64 224 128 0\n180 192 96 0 0\n181 192 96 128 0\n182 192 224 0 0\n183 192 224 128 0\n184 64 96 64 0\n185 64 96 192 0\n186 64 224 64 0\n187 64 224 192 0\n188 192 96 64 0\n189 192 96 192 0\n190 192 224 64 0\n191 192 224 192 0\n192 0 32 32 0\n193 0 32 160 0\n194 0 160 32 0\n195 0 160 160 0\n196 128 32 32 0\n197 128 32 160 0\n198 128 160 32 0\n199 128 160 160 0\n200 0 32 96 0\n201 0 32 224 0\n202 0 160 96 0\n203 0 160 224 0\n204 128 32 96 0\n205 128 32 224 0\n206 128 160 96 0\n207 128 160 224 0\n208 0 96 32 0\n209 0 96 160 0\n210 0 224 32 0\n211 0 224 160 0\n212 128 96 32 0\n213 128 96 160 0\n214 128 224 32 0\n215 128 224 160 0\n216 0 96 96 0\n217 0 96 224 0\n218 0 224 96 0\n219 0 224 224 0\n220 128 96 96 0\n221 128 96 224 0\n222 128 224 96 0\n223 128 224 224 0\n224 64 32 32 0\n225 64 32 160 0\n226 64 160 32 0\n227 64 160 160 0\n228 192 32 32 0\n229 192 32 160 0\n230 192 160 32 0\n231 192 160 160 0\n232 64 32 96 0\n233 64 32 224 0\n234 64 160 96 0\n235 64 160 224 0\n236 192 32 96 0\n237 192 32 224 0\n238 192 160 96 0\n239 192 160 224 0\n240 64 96 32 0\n241 64 96 160 0\n242 64 224 32 0\n243 64 224 160 0\n244 192 96 32 0\n245 192 96 160 0\n246 192 224 32 0\n247 192 224 160 0\n248 64 96 96 0\n249 64 96 224 0\n250 64 224 96 0\n251 64 224 224 0\n252 192 96 96 0\n253 192 96 224 0\n254 192 224 96 0\n255 192 224 224 0\n256 32 0 0 0\n257 32 0 128 0\n258 32 128 0 0\n259 32 128 128 0\n260 160 0 0 0\n261 160 0 128 0\n262 160 128 0 0\n263 160 128 128 0\n264 32 0 64 0\n265 32 0 192 0\n266 32 128 64 0\n267 32 128 192 0\n268 160 0 64 0\n269 160 0 192 0\n270 160 128 64 0\n271 160 128 192 0\n272 32 64 0 0\n273 32 64 128 0\n274 32 192 0 0\n275 32 192 128 0\n276 160 64 0 0\n277 160 64 128 0\n278 160 192 0 0\n279 160 192 128 0\n280 32 64 64 0\n281 32 64 192 0\n282 32 192 64 0\n283 32 192 192 0\n284 160 64 64 0\n285 160 64 192 0\n286 160 192 64 0\n287 160 192 192 0\n288 96 0 0 0\n289 96 0 128 0\n290 96 128 0 0\n291 96 128 128 0\n292 224 0 0 0\n293 224 0 128 0\n294 224 128 0 0\n295 224 128 128 0\n296 96 0 64 0\n297 96 0 192 0\n298 96 128 64 0\n299 96 128 192 0\n300 224 0 64 0\n301 224 0 192 0\n302 224 128 64 0\n303 224 128 192 0\n304 96 64 0 0\n305 96 64 128 0\n306 96 192 0 0\n307 96 192 128 0\n308 224 64 0 0\n309 224 64 128 0\n310 224 192 0 0\n311 224 192 128 0\n312 96 64 64 0\n313 96 64 192 0\n314 96 192 64 0\n315 96 192 192 0\n316 224 64 64 0\n317 224 64 192 0\n318 224 192 64 0\n319 224 192 192 0\n320 32 0 32 0\n321 32 0 160 0\n322 32 128 32 0\n323 32 128 160 0\n324 160 0 32 0\n325 160 0 160 0\n326 160 128 32 0\n327 160 128 160 0\n328 32 0 96 0\n329 32 0 224 0\n330 32 128 96 0\n331 32 128 224 0\n332 160 0 96 0\n333 160 0 224 0\n334 160 128 96 0\n335 160 128 224 0\n336 32 64 32 0\n337 32 64 160 0\n338 32 192 32 0\n339 32 192 160 0\n340 160 64 32 0\n341 160 64 160 0\n342 160 192 32 0\n343 160 192 160 0\n344 32 64 96 0\n345 32 64 224 0\n346 32 192 96 0\n347 32 192 224 0\n348 160 64 96 0\n349 160 64 224 0\n350 160 192 96 0\n351 160 192 224 0\n352 96 0 32 0\n353 96 0 160 0\n354 96 128 32 0\n355 96 128 160 0\n356 224 0 32 0\n357 224 0 160 0\n358 224 128 32 0\n359 224 128 160 0\n360 96 0 96 0\n361 96 0 224 0\n362 96 128 96 0\n363 96 128 224 0\n364 224 0 96 0\n365 224 0 224 0\n366 224 128 96 0\n367 224 128 224 0\n368 96 64 32 0\n369 96 64 160 0\n370 96 192 32 0\n371 96 192 160 0\n372 224 64 32 0\n373 224 64 160 0\n374 224 192 32 0\n375 224 192 160 0\n376 96 64 96 0\n377 96 64 224 0\n378 96 192 96 0\n379 96 192 224 0\n380 224 64 96 0\n381 224 64 224 0\n382 224 192 96 0\n383 224 192 224 0\n384 32 32 0 0\n385 32 32 128 0\n386 32 160 0 0\n387 32 160 128 0\n388 160 32 0 0\n389 160 32 128 0\n390 160 160 0 0\n391 160 160 128 0\n392 32 32 64 0\n393 32 32 192 0\n394 32 160 64 0\n395 32 160 192 0\n396 160 32 64 0\n397 160 32 192 0\n398 160 160 64 0\n399 160 160 192 0\n400 32 96 0 0\n401 32 96 128 0\n402 32 224 0 0\n403 32 224 128 0\n404 160 96 0 0\n405 160 96 128 0\n406 160 224 0 0\n407 160 224 128 0\n408 32 96 64 0\n409 32 96 192 0\n410 32 224 64 0\n411 32 224 192 0\n412 160 96 64 0\n413 160 96 192 0\n414 160 224 64 0\n415 160 224 192 0\n416 96 32 0 0\n417 96 32 128 0\n418 96 160 0 0\n419 96 160 128 0\n420 224 32 0 0\n421 224 32 128 0\n422 224 160 0 0\n423 224 160 128 0\n424 96 32 64 0\n425 96 32 192 0\n426 96 160 64 0\n427 96 160 192 0\n428 224 32 64 0\n429 224 32 192 0\n430 224 160 64 0\n431 224 160 192 0\n432 96 96 0 0\n433 96 96 128 0\n434 96 224 0 0\n435 96 224 128 0\n436 224 96 0 0\n437 224 96 128 0\n438 224 224 0 0\n439 224 224 128 0\n440 96 96 64 0\n441 96 96 192 0\n442 96 224 64 0\n443 96 224 192 0\n444 224 96 64 0\n445 224 96 192 0\n446 224 224 64 0\n447 224 224 192 0\n448 32 32 32 0\n449 32 32 160 0\n450 32 160 32 0\n451 32 160 160 0\n452 160 32 32 0\n453 160 32 160 0\n454 160 160 32 0\n455 160 160 160 0\n456 32 32 96 0\n457 32 32 224 0\n458 32 160 96 0\n459 32 160 224 0\n460 160 32 96 0\n461 160 32 224 0\n462 160 160 96 0\n463 160 160 224 0\n464 32 96 32 0\n465 32 96 160 0\n466 32 224 32 0\n467 32 224 160 0\n468 160 96 32 0\n469 160 96 160 0\n470 160 224 32 0\n471 160 224 160 0\n472 32 96 96 0\n473 32 96 224 0\n474 32 224 96 0\n475 32 224 224 0\n476 160 96 96 0\n477 160 96 224 0\n478 160 224 96 0\n479 160 224 224 0\n480 96 32 32 0\n481 96 32 160 0\n482 96 160 32 0\n483 96 160 160 0\n484 224 32 32 0\n485 224 32 160 0\n486 224 160 32 0\n487 224 160 160 0\n488 96 32 96 0\n489 96 32 224 0\n490 96 160 96 0\n491 96 160 224 0\n492 224 32 96 0\n493 224 32 224 0\n494 224 160 96 0\n495 224 160 224 0\n496 96 96 32 0\n497 96 96 160 0\n498 96 224 32 0\n499 96 224 160 0\n500 224 96 32 0\n501 224 96 160 0\n502 224 224 32 0\n503 224 224 160 0\n504 96 96 96 0\n505 96 96 224 0\n506 96 224 96 0\n507 96 224 224 0\n508 224 96 96 0\n509 224 96 224 0\n510 224 224 96 0\n511 224 224 224 0\nendcolortable".split('\n');

        for(var i=0;i<pciTable.length;i++){
            var pciLine = pciTable[i].split(' ');
            if(parseInt(pciLine[0])==parseInt(data)){
                return 'rgb('+pciLine[3]+','+pciLine[2]+','+pciLine[1]+")"
            }
        }
        return '#FFFFFF'
    }
    if(type == 'dimension'){
        var max = Math.max.apply(null, data[0]);
        var min = Math.min.apply(null, data[0]);
        var scale = max-min;
        var red = parseInt(255-(data[1]-min)/scale*255);
        var green = parseInt((data[1]-min)/scale*255);
        if (green >255){
            green = 255;
        }
        if (red < 0){
            red = 0;
        }
        return('rgb('+red+','+green+',0)');
    }
}