https://www.youtube.com/watch?v=YybdD3Q4BL0 REDUX tamil [Min1.43]


1) Min20 -  redux add setting  for vs-Code 
2) lib
	react-resux
	react-tiilkit
	
3) Mutable array | object
	const arr=['a','b']       ===> arr.push('c)  | arr[1]='x'
	const obj={a:1,b:3}       ===> obj.b=10
	
	immutable (arr | obj)
		const ARR2=arr.concat('c')
		
		const OBJ2={
			...obj,
			a:{
				...obj.a,
				c:10
			}
			
		}
		
4) Functional Program [Min 27--- 53...]
		4.1) set abc=fun() ------> call function
		4.2) set abc=fun   ------> refer the function, still not called
		
		4.3) function passws as a parameter
		4.4) anomuas function ---> function inside function
					
		4.5) Functional composaciation. higher order function (problam handel in small functions)
				const trimVal=funConcat(functlowersace(functiontrim(STR) ) );   -------------> many more bracket issue
				
		4.6) lodash libeary (handel multi bracket issue)	
				npm i lodash
				const allFunction=compose(funConcat,functlowersace,functiontrim)
				allFunction(STR);
				
				const allFunction=pipe(funConcat,functlowersace,functiontrim)
				allFunction(STR);
				
				
		4.7) currien Techinic [Min 49-53]
				Issue: pipe(meed functions)  ---> passing 2 paramentr
				
				4.7.1) call inner fuction(work like nesting function)
				
				4.7.2) arrow function =====>  
							const add2 =a => b=> a+b
							const add2 =add(3)(4)   -----> 7
						
				
		4.8) peo function (no unknown change inside the function)
				cuncurancy
				cashable
				
		4.9) imutable object (redux main think)
				const personOBJ={
					name:"kreshan"
					address:{
						phone:077,
						country:singapore
					}
				}
				
				
				const updateOBJ={
					...personOBJ, addresss{
						...personOBJ.address,contry:srilanka
					},name:"dharshan"
				}
				
				=====> updateOBJ name & contry can change, with out change personOBJ
				
				
5) REDUX Start [1.07---]	
		1) npx create-react-app ReactJs_Redux
		
