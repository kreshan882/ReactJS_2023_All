React GUID TO RUN
Referance: https://github.com/fiqriismail/
=========================================================================================	
https://www.youtube.com/watch?v=7va799ctfWQ&list=PLvvtf05eMZ2DpDyWwmAjEuicvVxx4vIYB

https://www.youtube.com/watch?v=RoQskA11yaM&list=PLvvtf05eMZ2DB55uevFM4rt6oiDljTc5o

https://www.youtube.com/watch?v=FbxE0Qw2500&list=PLvvtf05eMZ2DB55uevFM4rt6oiDljTc5o&index=2

*****[Single page Application: when click button , not recomendet to refresh and load]  ******
.jsx file ===> Js+Xml
1.1) setup
		Instaill Node-JS 
		install visualStudio CODE
			install below market plave from VS Code
				ES7 install--> react/redux/react-native/ js Snippets
				Meteriakl icon Theam - make buaty
				Prettier - code syndex
				Bracket Pair Color DLW --> bracket showing correctly
				
1.2) Run the project[powerShell]
		1.2.1) npx create-react-app project  (only when create project,get the pacjage.json file libery and update the versions )
		1.2.2) npm install --save react-router-dom formik moment axios
				
		1.2.3) cd ReactJS_202206
				npm install   (install package_lock.json+ node_modules)
				npm start
				http://localhost:3000/  

		1.2.4) issue : no such file or directory, lstat 'C:\Users\KRESHAN88\AppData\Roaming\npm'
				npm cache clean --force 
				npm i 
				npm i -g create-react-app 
			
			
2) folder structure
		node-modules/*   ( npm install) load this dependency
		public/*
		src/*
		package.json     (node-modules version details avaliable hear)
		
		src/1) index.js   --> document.getElementById('root') ==> public/index.html (single page application - all rendering hear) [Render- valankuthal]
			2) App.js
				
3) react component
	 3.1) React.createElement('h1','headder, React.createElement('h1','headder, ))  --> rendering to single page function
	 
	 3.2) simple jsx home page 
		 nameList|  nameListItem (functional component add)
	 
4) dynamicaly change functionaly component
		4.1) [React developot tool chrome]  --> extenction add [Settings-> moreTools-> developer tools===>Component]
		4.2) console |select Component
			[hirachi can see==> APP-> NameList-> NameListItem]
			NameListItem (probs: can see some values)
			
			NameList ==> </nameListItem name="sss" course"ddd">
			nameListItem ==> {prob.name} 

		
5) name list pass by array (dinamacily pass valur using json)  
		java script array map===>
			const arr1=[1,3,4,6];
			const map= arr1.map(x=>x*2)
			console.log(map)---> 2,6,8,12
		
6) using bootstrap design GUI [React bootstap -> css design]
		6.1) Meterial bootstrap==> https://mui.com/material-ui/react-button/   (same like angulur design)
		
		6.2) BootStrape===>https://getbootstrap.com/docs/5.3/getting-started/introduction/     
				-->interduction -> css +js  (index.html	---> add css & java script)
				-->cpmponent-> navbar|listgroup
				-->layout grid(12-2+10)  |utilitu (boder)
		
7) React Hooks, pass value using json (functional component) ReactHooks===>  {useState| useEffect}
		---> load data without browser refresh
			 hook/State/nameList ===> aName -> HitachiModuleKItems
			 useState ---> function load data to array list
			 
		import React,{useState} from 'react' 
		setNameList(nameList => nameList.concat(newUser));  -----> add newUser to nameList
		
8) ReactHooks===>  {useEffect}
    data get from web url 
	useEffect---> triger component load time| component update time(useState update time)
	              2nd parameter using to stop loop, 2nd param useState when modified only calll useEfect
	
	fetch('https://randomuser.me/api')
	.then((response) => {   //   (=>) call back function
        return response.json();
    })
		
9) Routing 
	HeaderBar.jsx -->bootstap design
	npm install react-router-dom
	import { BrowserRouter,Routes, Route } from "react-router-dom";   ---> APP
	import { link } from "react-router-dom";                          ---> HeaderBar


https://www.youtube.com/watch?v=RoQskA11yaM&list=PLvvtf05eMZ2DB55uevFM4rt6oiDljTc5o

10) What is a Class Component / functional component  (State using style different but same think will do) 
									
		Function Compl   return ();   		
						 import React,{useState, useEffect}  =======> using reace Hooks
						 const [nameList,setNameList]=useState();
						 {probs.msg}   ---> function namelist(probs){}
						 
		Class Component     render() { return (); }
						    import React, { Component } 
						    this.state= { .......}          ========> using reace Hooks
							{this.probs.msg}
							
							constructor(){ super(); ....} ---> initial mount time loaded
							render() { return (.....)}
							componentDidMount(){ .......}  ---> initial mount time loaded                ==>[Lifecircle Method]
							componentDidUpdate(){ ......}  ---> only loaded , when update the setState() ==>[Lifecircle Method]
							
							addNameHandeler = () => {....)  ---> arrow finction used to retrive this.stater.message
							render() { return (); }


https://www.youtube.com/watch?v=FbxE0Qw2500&list=PLvvtf05eMZ2DB55uevFM4rt6oiDljTc5o&index=2

11)React Js useFormik | Firebase Backend Database/API    0.12/1.24
	import { useFormik } from 'formik';
	import axios from 'axios';
		
	11.1) ====> FireBaseDatabase Google [Video time: 0.13] 
		** after Db created automaticaly rest web service given
		https://console.firebase.google.com/?pli=1
		 11.1.1) Create Project : ReactTaskManagerK-->create success-> [Expire date:2023-9-4]
		 11.1.2) Build-> ReyalTime Databse-> Create Databse-> Start Test Mode| enable-> ->Publish
					"rules": {
						".read": true,  // 2023-9-4
						".write": true,  // 2023-9-4
					  }
		
		 11.1.3)  [get the databse URL] Build-> ReyalTime Databse->Data (copy url) 
				https://reacttaskmanagerk-default-rtdb.asia-southeast1.firebasedatabase.app/
				test this rest function with postman	
				
		 11.1.4) create table when calling to that url from POSTMAN
				11.1.4.1) POST |Body|row|json --> create table and add data
					https://reacttaskmanagerk-default-rtdb.asia-southeast1.firebasedatabase.app/tasksTable.json
					{
						"task_id":100,
						"description": "testing desc",
						"status":"New"
					}
				11.1.4.2) DELETE|GET -->delete|get data from the table using POSTMAN
						https://reacttaskmanagerk-default-rtdb.asia-southeast1.firebasedatabase.app/tasksTable/(12345gygyu_generated_id).json
						
	11.2) React Js useFormik (all form validation and submition) [Video time: 0.22 - 0.47....] 
			npm i formik
			https://formik.org/docs/overview
			
			  const formik = useFormik({
				  initialValues,
				  onSubmit,
				  validate,
			  });
			  
	11.3) submit form value to firebase [Video time: 0.47 - 1.01....] 
			npm i axios  (call fire base database)
			npm i uuid   (unic id generation
			
	11.4) fireBase data list View [Video time: 1.01 - 1.27....] 
			get list   ----> axios.get(apiUrl)
			completed  ----> axios.patch(apiUrl, {status:"Completed"})
			delete     ----> axios.delete(apiUrl)
			
			
			
 
==============================================================================================
git 
Git-2.36.1-64-bit
Creact repository get url{https://github.com/kreshan882/ReactJS_2022.git}
1) git Gui
	>[git config --global user.email "kreshan882@gmail.com"]
	clone exesit repository [ URL  +  LocalPath/newFolder + clone]
	git clone url
	
	================================
	upload Git BAST commant font
	================================
	git config --global user.email "kreshan882@gmail.com"
	cd ReactJS_2022/
	git init
	git add package.json src/* public/* README.md     (git add --all)
	git status  ==> check status 
	git commit -m "commit fst"
	git log
	git push https://github.com/kreshan882/ReactJS_202206.git


