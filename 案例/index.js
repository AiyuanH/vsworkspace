//-获取算式输入框
let exp_input = document.getElementById('exp');
//-获取结果的输入框
let result_input = document.getElementById('result');
//-状态值：判断是否输入的是运算符
let flag = false;
//-算式的拼接字符串
let exp = '';
//获取所有按钮
let btns = document.getElementsByClassName('btn');
for(let btn of btns){
	btn.onclick = function(){
		//-:获取输入框的内容，给exp
		exp = exp_input.value;
		//alert(btn.innerHTML.trim());
		if(btn.innerHTML.trim()==='C'){
			exp = '';
		}else if(btn.innerHTML.trim()==='CE'){
			exp = exp.substring(0,exp.length-1);
		}else if(btn.innerHTML.trim()==='='){
			let result = eval(exp);
			result_input.value = result;
		}else{
			let info = btn.innerHTML.trim();
			if(info==='+'||info==='-'||info==='*'||info==='/'){
				if(flag==true){
					return;
				}else{
					flag =true;
					exp += btn.innerHTML.trim();
				}
			}else{
				exp += btn.innerHTML.trim();
				flag = false;
			}
		}
		exp_input.value = exp;
	}
}