import React, { useState } from "react";

const kirtanList = [
	[
		1,
		"59,86",
		"પ્રભુ હોય પ્રગટ પ્રમાણ, સંત તીયાં સાચા રહેજો;",
		"Prabhu hoy pragat praman, sant tiya sacha rahejo;",
		"પદ - રાગ ફટાણાં\nપ્રભુ હોય પ્રગટ પ્રમાણ, સંત તીયાં સાચા રહેજો;\nકથે એમ વેદ પુરાણ, કાવ્ય કોશ ગ્રંથ કહેજો. ૧\n\nરામ તીયાં હોય ન કામ, કામ તીયાં રામ નહિ જો;",
		"pada - rāga phaṭāṇāṁ\n\nprabhu hoya pragaṭa pramāṇa, saṅta tīyāṁ sācā rahejo;\nkathe ema veda purāṇa, kāvya kos̀a graṅtha kahejo. 1\n\n",
		1,
		1,
		null,
		null,
	],
	[
		2,
		"59,86",
		"સાચા હવે સંત સયાંણ, લક્ષ્ણ તેનાં લહું જો;",
		"Sacha have sant sayan, lakshan tena lahu jo;",
		"સાચા હવે સંત સયાંણ, લક્ષ્ણ તેનાં લહું જો;\nપાલે રૂડાં નીમ પ્રમાણ, કામનીથી છેટે કહું જો . ૧\nદામ કેખી રહે છે દૂર, સુરલીત ઇંદ્રી સદા જો;\nક્રોધ કેદી વાપે ન ઉર, કામ કલેશ નાંહી કદા જો. ૨\nવલી અતી વૈરાગ્યવાન, જ્ઞાનમાં પોતે ગલ્યા જો;\nસંગ દોષજીત સુજાણ, તાપ પાપ સરવે ટળ્યા જો. ૩\nમળે આવી જે કોઇ જન, તતકાલ તારે તરે જો;\nપેખી કરે પોતે પાવન, ફેલથી છેટે ફરે જો. ૪\nમળ્યા પ્રભુ પ્રગટ સ્વછંદ, વાસના ટાળી વળી જો;\nકે છે કવિ અવિનાશાનંદ, ફંદ જાય તેના બલી જો. ૫\n",
		"sācā have saṅta sayāṅṇa, lakṣṇa tenāṁ lahuṁ jo;\npāle rūḍāṁ nīma pramāṇa, kāmanīthī cheṭe kahuṁ jo . 1\n\ndāma kekhī rahe che dūra, suralīta iṅdrī sadā jo;\nkrodha kedī vāpe na ura, kāma kales̀a nāṁhī kadā jo. 2\n\nvalī atī vairāgyavāna, jñānamāṁ pote galyā jo;\nsaṅga doṣajīta sujāṇa, tāpa pāpa sarave ṭaḷyā jo. 3\n\nmaḷe āvī je koi jana, tatakāla tāre tare jo;\npekhī kare pote pāvana, phelathī cheṭe phare jo. 4\n\nmaḷyā prabhu pragaṭa svachaṅda, vāsanā ṭāḷī vaḷī jo;\nke che kavi avinās̀ānaṅda, phaṅda jāya tenā balī jo. 5\n",
		2,
		1,
		null,
		null,
	],
	[
		3,
		"71,86",
		"સતસંગી તે તો સુજાણ, સતસંગ પાળે સહી જો;",
		"Satsangi te to sujan, satsang pale sahi jo;",
		"સત્સંગીનાં લક્ષણ\n\nસતસંગી તે તો સુજાણ, સતસંગ પાળે સહી જો;\nપામે ધામ પ્રગટ પ્રમાણ, ગતી રૂડી તેની કહી જો. ૧\n\nદારૂ માટી ચોરી અવેરી, વટાલે વટલે નહિ જો;\nજીવ હિંસા કરે ન જન, મન વશ રાખે મહી જો. ૨\n\nકરે નહિ આતમઘાત, વિધવાનો સંગ તજે જો;\nવિમુખના મુખથી વદેલ, કથા સુણે નહી રજે જો. ૩\n\nકોઇને માથે મિથ્યા કલંક, હરીજન નાખે નહી જો;\nકરે નહી કોઇ દી કહાય, દેવ નિંદા મન દહી જો. ૪\n\nપાલે નિત્યે પ્રગટ પ્રમાણ, નીમ એકાદશ ગ્રહી જો;\nકે છે કવિ અવિનાશાનંદ, સતસંગી તે તો સહી જો. ૫\n",
		"satsaṅgīnāṁ lakṣaṇa\n\nsatasaṅgī te to sujāṇa, satasaṅga pāḷe sahī jo;\npāme dhāma pragaṭa pramāṇa, gatī rūḍī tenī kahī jo. 1\n\ndārū māṭī corī averī, vaṭāle vaṭale nahi jo;\njīva hiṅsā kare na jana, mana vas̀a rākhe mahī jo. 2\n\nkare nahi ātamaghāta, vidhavāno saṅga taje jo;\nvimukhanā mukhathī vadela, kathā suṇe nahī raje jo. 3\n\nkoine māthe mithyā kalaṅka, harījana nākhe nahī jo;\nkare nahī koi dī kahāya, deva niṅdā mana dahī jo. 4\n\npāle nitye pragaṭa pramāṇa, nīma ekādas̀a grahī jo;\nke che kavi avinās̀ānaṅda, satasaṅgī te to sahī jo. 5\n",
		3,
		1,
		null,
		null,
	],
	[
		4,
		"71,86",
		"વળિ કહું વાત વખાણી, જાણી હરિજન લીયો જો;",
		"Vadi kahu vat vakhani, jani harijan liyo jo;",
		"વળિ કહું વાત વખાણી, જાણી હરિજન લીયો જો;\nહોકા ગાંજા ભાંગ્ય અફીણ, પાપ જાણી ત્યાગી દીયો જો. ૧\n\nતાંણે નહી કેદી તમાકુ, ચિત દઇ ચાવે નહી જો;\nફેલ કરી થાશો ફજેત, જમપુરી જાશો વહી જો. ૨\n\nતમાકુનું પાપ અપાર, બ્રહ્માએ મુખે કહ્યું જો;\nનારદની પાસે નેદાન, બ્રહ્માંડ પુરાણમાં થયું જો. ૩\n\nતમાકુને ખાંતેથી ખાય, રૌરવ નરકે પડે જો;\nજ્યાં લગી સુરજ ચંદ, જમદૂત તેને નડે જો. ૪\n\nએવું એનું પાપ અપાર, મોટા મોટા મુનિ કહે જો;\nકે છએ કવિ અવિનાશાનંદ, હરિજન દૂર રહે જો. ૫\n",
		"vaḷi kahuṁ vāta vakhāṇī, jāṇī harijana līyo jo;\nhokā gāṅjā bhāṅgya aphīṇa, pāpa jāṇī tyāgī dīyo jo. 1\n\ntāṅṇe nahī kedī tamāku, cita dai cāve nahī jo;\nphela karī thās̀o phajeta, jamapurī jās̀o vahī jo. 2\n\ntamākunuṁ pāpa apāra, brahmāe mukhe kahyuṁ jo;\nnāradanī pāse nedāna, brahmāṅḍa purāṇamāṁ thayuṁ jo. 3\n\ntamākune khāṅtethī khāya, rourava narake paḍe jo;\njyāṁ lagī suraja caṅda, jamadūta tene naḍe jo. 4\n\nevuṁ enuṁ pāpa apāra, moṭā moṭā muni kahe jo;\nke chae kavi avinās̀ānaṅda, harijana dūra rahe jo. 5\n\n",
		4,
		1,
		null,
		null,
	],
];

const Kirtans = () => {
	// const [line, setLine] = useState("");
	const line = kirtanList[0][4].split("\n");
	const line2 = kirtanList[0][5].split("\n");

	return (
		<div>
			{/* {kirtanList.map((item) => (
				<>
					<h1>{item[3]}</h1>
					<h1>{item[2]}</h1>
				</>
			))} */}
			{/* <h1>{kirtanList[0][2]}</h1>
			<h1>{kirtanList[0][3]}</h1> */}

			{/* <h2>{kirtanList[0][4]}</h2> */}
			{/* <h2>{setLine(kirtanList[0][4].split("\n"))}</h2> */}
			{/* {line.map((el) => (
				<h3>{el}</h3>
			))} */}
			{/* {line2.map((el) => (
				<h3>{el}</h3>
			))} */}

			<h1>{line[0]}</h1>
			<h1>{line[1]}</h1>
			<h1>{line2[0]}</h1>
			<h1>{line2[2]}</h1>

			<h1>-------------------------------------</h1>
			{printSingleLines(line, line2)}

			{/* <h2>{kirtanList[0][5]}</h2>
			<h2>{kirtanList[0][5].split("\n").length - 1}</h2> */}
		</div>
	);
};

const printSingleLines = (gujLine, engLine) => {
	for (var i = 1; i < gujLine.length; i++) {
		return (
			<>
				<h1>{gujLine[i]}</h1>
				<h1>{engLine[i]}</h1>
			</>
		);
	}
};

export default Kirtans;
