import axios from 'axios'
const getExchangeRate = async (from,to)=>{
	const res = await axios.get('http://data.fixer.io/api/latest?access_key=367e1b69db97f32756e9e0aec957e556'); 
    const euro = 1/res.data.rates[from];
    const rate = euro * res.data.rates[to];
    return rate;
};

//--------------------------------------get currnay code -------------

const getCurrancy = async()=>{
	const res=await axios.get('https://restcountries.eu/rest/v2');
	return res.data.map((country)=>country.currencies[0].code);
}
//---------------------------- get countiers with a currancy code ------------
const getCounties = async (currancycode)=>{
	const res = await axios.get(`https://restcountries.eu/rest/v2/currency/${currancycode}`);
	return res.data.map((country)=> country.name);
};
//---------------------------- convert ----------------------------
const convertCurrancy =async(from,to,amont)=>{
	const rate = await getExchangeRate(from,to);
	const country = await getCounties(to);
	const res = (rate * amont).toFixed(3);
	const result =`${res} ${to}`;
	const pre =`${amont} ${from} is worth  ${res} ${to}  . and u can spend it in the folloing countries  : ${country.join(' , ')}`;

	return {result,pre}; 

};
convertCurrancy('EGP','SAR',1000).then((data)=>{
	console.log(data);
});
export {getCurrancy,getCounties,convertCurrancy}