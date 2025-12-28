"use strict";

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("top");
  });
  

let tokyo = [
    { id:131016, name:"千代田区", population:68835, area:11.66, rent:15.16},
    { id:131024, name:"中央区", population:187404, area:10.21, rent:13.89},
    { id:131032, name:"港区", population:267780, area:20.36, rent:15.69},
    { id:131041, name:"新宿区", population:352717, area:18.22, rent:13.35},
    { id:131059, name:"文京区", population:235345, area:11.29, rent:12.89},
    { id:131067, name:"台東区", population:216084, area:10.11, rent:12.90},
  ];

  app.get("/tokyo", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    res.render('db3', { data: tokyo });
  });

  // Create
  app.get("/tokyo/create", (req, res) => {
    res.redirect('/public/tokyo_new.html');
  });

// Read
app.get("/tokyo/detail/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = tokyo[ number ];
    res.render('tokyo_detail', {id: number, data: detail} );
  });
  
  // Delete
  app.get("/tokyo/delete/:number", (req, res) => {
    // 本来は削除の確認ページを表示する
    // 本来は削除する番号が存在するか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    tokyo.splice( req.params.number, 1 );
    res.redirect('/tokyo' );
  });
  
  // Create
  app.post("/tokyo", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const id = req.body.id;
    const name = req.body.name;
    const population = req.body.population;
    const area = req.body.area;
    tokyo.push( { id: id, name: name, population: population, area: area } );
    console.log( tokyo );
    res.render('db3' , {data: tokyo} );
  });
  
  // Edit
  app.get("/tokyo/edit/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = tokyo[ number ];
    res.render('tokyo_edit', {id: number, data: detail} );
  });
  
  // Update
  app.post("/tokyo/update/:number", (req, res) => {
    // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    tokyo[req.params.number].id = req.body.id;
    tokyo[req.params.number].name = req.body.name;
    tokyo[req.params.number].population = req.body.population;
    tokyo[req.params.number].area = req.body.area;
    console.log( tokyo );
    res.redirect('/tokyo' );
  });


  let sakana = [
    { id:1, name:"鮪", onyomi:"まぐろ", kunyomi:"ユウ"},
    { id:2, name:"鯖", onyomi:"さば", kunyomi:"セイ・ショウ"},
    { id:3, name:"鰆", onyomi:"さわら", kunyomi:"シュン"},
    { id:4, name:"鯵", onyomi:"あじ", kunyomi:"ソウ"},
  ];

  app.get("/sakana", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    res.render('db4', { data: sakana });
  });

  // Create
  app.get("/sakana/create", (req, res) => {
    res.redirect('/public/sakana_new.html');
  });

// Read
  app.get("/sakana/detail/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = sakana[ number ];
    res.render('sakana_detail', {id: number, data: detail} );
  });

  // Delete
  app.get("/sakana/delete/:number", (req, res) => {
    // 本来は削除の確認ページを表示する
    // 本来は削除する番号が存在するか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    sakana.splice( req.params.number, 1 );
    res.redirect('/sakana' );
  });
  
  // Create
  app.post("/sakana", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const id = req.body.id;
    const name = req.body.name;
    const onyomi = req.body.onyomi;
    const kunyomi = req.body.kunyomi;
    sakana.push( { id: id, name: name, onyomi: onyomi, kunyomi: kunyomi } );
    console.log( sakana );
    res.render('db4' , {data: sakana} );
  });
  
  // Edit
  app.get("/sakana/edit/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = sakana[ number ];
    res.render('sakana_edit', {id: number, data: detail} );
  });
  
  // Update
  app.post("/sakana/update/:number", (req, res) => {
    // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    sakana[req.params.number].id = req.body.id;
    sakana[req.params.number].name = req.body.name;
    sakana[req.params.number].onyomi = req.body.onyomi;
    sakana[req.params.number].kunyomi = req.body.kunyomi;
    console.log( sakana );
    res.redirect('/sakana' );
  });



  let prof = [
    { id:1, name:"須田 宇宙",yomi:"suda hirosi", old:"?",post: "准教授", aff:"千葉工業大学  情報変革科学部 情報工学科/情報科学研究科 情報科学専攻"},
    { id:2, name:"有本 泰子",yomi:"arimoto yosiko", old:"?", post: "教授", aff:"千葉工業大学  情報変革科学部 情報工学科/情報科学研究科 情報科学専攻"},
    { id:3, name:"佐波 孝彦", yomi:"saba takahiko", old:"?", post:"教授", aff:" 千葉工業大学  情報変革科学部 情報工学科/情報科学研究科 情報科学専攻"},
  ];

  app.get("/prof", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    res.render('db5', { data: prof });
  });

  // Create
  app.get("/prof/create", (req, res) => {
    res.redirect('/public/prof_new.html');
  });

// Read
app.get("/prof/detail/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = prof[ number ];
    res.render('prof_detail', {id: number, data: detail} );
  });
  
  // Delete
  app.get("/prof/delete/:number", (req, res) => {
    // 本来は削除の確認ページを表示する
    // 本来は削除する番号が存在するか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    prof.splice( req.params.number, 1 );
    res.redirect('/prof' );
  });
  
  // Create
  app.post("/prof", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const id = req.body.id;
    const name = req.body.name;
    const yomi = req.body.yomi;
    const post = req.body.post;
    const old = req.body.old;
    const aff = req.body.aff;
    prof.push( { id: id, name: name,  yomi: yomi, post: post, old: old, aff: aff } );
    console.log( prof );
    res.render('db5' , {data: prof} );
  });
  
  // Edit
  app.get("/prof/edit/:number", (req, res) => {
    // 本来ならここにDBとのやり取りが入る
    const number = req.params.number;
    const detail = prof[ number ];
    res.render('prof_edit', {id: number, data: detail} );
  });
  
  // Update
  app.post("/prof/update/:number", (req, res) => {
    // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
    // 本来ならここにDBとのやり取りが入る
    prof[req.params.number].id = req.body.id;
    prof[req.params.number].name = req.body.name;
    prof[req.params.number].yomi = req.body.yomi;
    prof[req.params.number].post = req.body.post;
    prof[req.params.number].old = req.body.old;
    prof[req.params.number].aff = req.body.aff;
    console.log( prof );
    res.redirect('/prof' );
  });
  
app.listen(8080, () => console.log("Example app listening on port 8080!"));
