let allStatesInfo = [
    {"Abbreviation":"CA","State":"California","Population":"39,536,653","Sq.Miles":"163,695","ConsumeRank":"2","TotEnergy":"2,356 trillion Btu (2.9% total)","RenewEnergy":"1,115 trillion Btu","CustAccts":"13,950,681"},
    {"Abbreviation":"TX","State":"Texas","Population":"28,304,596","Sq.Miles":"268,596","ConsumeRank":"1","TotEnergy":"17,573 trillion Btu (20% total)","RenewEnergy":"786 trillion Btu","CustAccts":"11,074,185"},
    {"Abbreviation":"FL","State":"Florida","Population":"20,984,400","Sq.Miles":"65,758","ConsumeRank":"4","TotEnergy":"554 trillion Btu (0.6% total)","RenewEnergy":"237 trillion Btu","CustAccts":"9,510,383"},
    {"Abbreviation":"NY","State":"New York","Population":"19,849,399","Sq.Miles":"54,555","ConsumeRank":"7","TotEnergy":"905 trillion Btu (1% total)","RenewEnergy":"450 trillion Btu","CustAccts":"7,235,449"},
    {"Abbreviation":"PA","State":"Pennsylvania","Population":"12,805,537","Sq.Miles":"46,054","ConsumeRank":"6","TotEnergy":"8,168 trillion Btu (9.3% total)","RenewEnergy":"201 trillion Btu","CustAccts":"5,426,709"},
    {"Abbreviation":"IL","State":"Illinois","Population":"12,802,023","Sq.Miles":"57,914","ConsumeRank":"5","TotEnergy":"2,516 trillion Btu (2.9% total)","RenewEnergy":"370 trillion Btu","CustAccts":"5,238,234"},
    {"Abbreviation":"OH","State":"Ohio","Population":"11,658,609","Sq.Miles":"44,826","ConsumeRank":"8","TotEnergy":"2,670 trillion Btu (3% total)","RenewEnergy":"153 trillion Btu","CustAccts":"5,004,521"},
    {"Abbreviation":"GA","State":"Georgia","Population":"10,429,379","Sq.Miles":"59,425","ConsumeRank":"9","TotEnergy":"624 trillion Btu (0.7% total)","RenewEnergy":"271 trillion Btu","CustAccts":"4,447,011"},
    {"Abbreviation":"NC","State":"North Carolina","Population":"10,273,419","Sq.Miles":"53,819","ConsumeRank":"12","TotEnergy":"661 trillion Btu (0.8% total)","RenewEnergy":"217 trillion Btu","CustAccts":"4,633,269"},
    {"Abbreviation":"MI","State":"Michigan","Population":"9,962,311","Sq.Miles":"96,714","ConsumeRank":"10","TotEnergy":"702 trillion Btu (0.8% total)","RenewEnergy":"229 trillion Btu","CustAccts":"4,410,373"},
    {"Abbreviation":"NJ","State":"New Jersey","Population":"9,005,644","Sq.Miles":"8,723","ConsumeRank":"15","TotEnergy":"404 trillion Btu (0.5% total)","RenewEnergy":"48 trillion Btu","CustAccts":"3,597,378"},
    {"Abbreviation":"VA","State":"Virginia","Population":"8,470,020","Sq.Miles":"42,775","ConsumeRank":"13","TotEnergy":"923 trillion Btu (1% total)","RenewEnergy":"138 trillion Btu","CustAccts":"3,469,327"},
    {"Abbreviation":"WA","State":"Washington","Population":"7,405,743","Sq.Miles":"71,298","ConsumeRank":"16","TotEnergy":"1,027 trillion Btu (1.2% total)","RenewEnergy":"942 trillion Btu","CustAccts":"3,119,908"},
    {"Abbreviation":"AZ","State":"Arizona","Population":"7,016,270","Sq.Miles":"113,990","ConsumeRank":"25","TotEnergy":"621 trillion Btu (0.7% total)","RenewEnergy":"148 trillion Btu","CustAccts":"2,827,331"},
    {"Abbreviation":"MA","State":"Massachusetts","Population":"6,859,819","Sq.Miles":"10,554","ConsumeRank":"27","TotEnergy":"125 trillion Btu (0.1% total)","RenewEnergy":"72 trillion Btu","CustAccts":"2,795,759"},
    {"Abbreviation":"TN","State":"Tennessee","Population":"6,715,984","Sq.Miles":"42,144","ConsumeRank":"14","TotEnergy":"525 trillion Btu (0.6% total)","RenewEnergy":"176 trillion Btu","CustAccts":"2,927,449"},
    {"Abbreviation":"IN","State":"Indiana","Population":"6,666,818","Sq.Miles":"36,420","ConsumeRank":"11","TotEnergy":"979 trillion Btu (1.1% total)","RenewEnergy":"249 trillion Btu","CustAccts":"2,882,508"},
    {"Abbreviation":"MO","State":"Missouri","Population":"6,113,532","Sq.Miles":"69,707","ConsumeRank":"20","TotEnergy":"183 trillion Btu (0.2% total)","RenewEnergy":"90 trillion Btu","CustAccts":"2,836,418"},
    {"Abbreviation":"MD","State":"Maryland","Population":"6,052,177","Sq.Miles":"12,406","ConsumeRank":"28","TotEnergy":"256 trillion Btu (0.2% total)","RenewEnergy":"55 trillion Btu","CustAccts":"2,352,099"},
    {"Abbreviation":"WI","State":"Wisconsin","Population":"5,795,483","Sq.Miles":"65,496","ConsumeRank":"19","TotEnergy":"316 trillion Btu (0.4% total)","RenewEnergy":"215 trillion Btu","CustAccts":"2,745,383"},
    {"Abbreviation":"CO","State":"Colorado","Population":"5,607,154","Sq.Miles":"104,094","ConsumeRank":"26","TotEnergy":"3,222 trillion Btu (3.7% total)","RenewEnergy":"150 trillion Btu","CustAccts":"2,360,274"},
    {"Abbreviation":"MN","State":"Minnesota","Population":"5,576,606","Sq.Miles":"86,936","ConsumeRank":"18","TotEnergy":"505 trillion Btu (0.6% total)","RenewEnergy":"359 trillion Btu","CustAccts":"2,438,682"},
    {"Abbreviation":"SC","State":"South Carolina","Population":"5,024,369","Sq.Miles":"32,020","ConsumeRank":"23","TotEnergy":"699 trillion Btu (0.8% total)","RenewEnergy":"130 trillion Btu","CustAccts":"2,334,992"},
    {"Abbreviation":"AL","State":"Alabama","Population":"4,874,747","Sq.Miles":"52,420","ConsumeRank":"17","TotEnergy":"1,227 trillion Btu (1.4% total)","RenewEnergy":"255 trillion Btu","CustAccts":"2,277,973"},
    {"Abbreviation":"LA","State":"Louisiana","Population":"4,684,333","Sq.Miles":"52,378","ConsumeRank":"3","TotEnergy":"2,957 trillion Btu (3.4% total)","RenewEnergy":"232 trillion Btu","CustAccts":"2,130,588"},
    {"Abbreviation":"KY","State":"Kentucky","Population":"4,454,189","Sq.Miles":"40,408","ConsumeRank":"21","TotEnergy":"1,213 trillion Btu (1.4% total)","RenewEnergy":"82 trillion Btu","CustAccts":"2,015,102"},
    {"Abbreviation":"OR","State":"Oregon","Population":"4,142,776","Sq.Miles":"98,379","ConsumeRank":"32","TotEnergy":"495 trillion Btu (0.6% total)","RenewEnergy":"494 trillion Btu","CustAccts":"1,776,821"},
     {"Abbreviation":"OK","State":"Oklahoma","Population":"3,930,864","Sq.Miles":"69,899","ConsumeRank":"22","TotEnergy":"4,160 trillion Btu (4.7% total)","RenewEnergy":"263 trillion Btu","CustAccts":"1,802,582"},
    {"Abbreviation":"CT","State":"Connecticut","Population":"3,588,184","Sq.Miles":"5,543","ConsumeRank":"36","TotEnergy":"205 trillion Btu (0.2% total)","RenewEnergy":"32 trillion Btu","CustAccts":"1,510,442"},
    {"Abbreviation":"IA","State":"Iowa","Population":"3,145,711","Sq.Miles":"56,273","ConsumeRank":"24","TotEnergy":"835 trillion Btu (0.9% total)","RenewEnergy":"780 trillion Btu","CustAccts":"1,408,804"},
    {"Abbreviation":"UT","State":"Utah","Population":"3,101,833","Sq.Miles":"84,897","ConsumeRank":"34","TotEnergy":"913 trillion Btu (1% total)","RenewEnergy":"53 trillion Btu","CustAccts":"1,095,692"},
    {"Abbreviation":"AR","State":"Arkansas","Population":"3,004,279","Sq.Miles":"53,179","ConsumeRank":"31","TotEnergy":"995 trillion Btu (1.1% total)","RenewEnergy":"109 trillion Btu","CustAccts":"1,407,633"},
    {"Abbreviation":"NV","State":"Nevada","Population":"2,998,039","Sq.Miles":"110,572","ConsumeRank":"37","TotEnergy":"100 trillion Btu (0.1% total)","RenewEnergy":"98 trillion Btu","CustAccts":"1,202,092"},
    {"Abbreviation":"MS","State":"Mississippi","Population":"2,984,100","Sq.Miles":"48,432","ConsumeRank":"29","TotEnergy":"318 trillion Btu (0.4% total)","RenewEnergy":"67 trillion Btu","CustAccts":"1,327,565"},
    {"Abbreviation":"KS","State":"Kansas","Population":"2,913,123","Sq.Miles":"82,278","ConsumeRank":"30","TotEnergy":"815 trillion Btu (0.9% total)","RenewEnergy":"247 trillion Btu","CustAccts":"1,286,693"},
    {"Abbreviation":"NM","State":"New Mexico","Population":"2,088,070","Sq.Miles":"121,590","ConsumeRank":"38","TotEnergy":"2.805 trillioin Btu (3.2% total)","RenewEnergy":"67 trillion Btu","CustAccts":"910,149"},
    {"Abbreviation":"NE","State":"Nebraska","Population":"1,920,076","Sq.Miles":"77,348","ConsumeRank":"33","TotEnergy":"444 trillion Btu (0.5% total)","RenewEnergy":"359 trillion Btu","CustAccts":"870,096"},
    {"Abbreviation":"WV","State":"West Virginia","Population":"1,815,857","Sq.Miles":"24,230","ConsumeRank":"35","TotEnergy":"4,418 trillion Btu (5% total)","RenewEnergy":"41 trillion Btu","CustAccts":"856,898"},
    {"Abbreviation":"ID","State":"Idaho","Population":"1,716,943","Sq.Miles":"83,569","ConsumeRank":"41","TotEnergy":"176 trillion Btu (0.2% total)","RenewEnergy":"171 trillion Btu","CustAccts":"758,378"},
    {"Abbreviation":"HI","State":"Hawaii","Population":"1,427,538","Sq.Miles":"10,932","ConsumeRank":"47","TotEnergy":"26 trillion Btu (<0.1% total)","RenewEnergy":"26 trillion Btu","CustAccts":"437,723"},
    {"Abbreviation":"NH","State":"New Hampshire","Population":"1,342,795","Sq.Miles":"9,349","ConsumeRank":"46","TotEnergy":"164 trillion Btu (0.2% total)","RenewEnergy":"59 trillion Btu","CustAccts":"627,416"},
    {"Abbreviation":"ME","State":"Maine","Population":"1,335,907","Sq.Miles":"35,380","ConsumeRank":"44","TotEnergy":"153 trillion Btu (0.2% total)","RenewEnergy":"152 trillion Btu","CustAccts":"725,183"},
    {"Abbreviation":"RI","State":"Rhode Island","Population":"1,059,639","Sq.Miles":"1,545","ConsumeRank":"49","TotEnergy":"6 trillion Btu (<0.1% total)","RenewEnergy":"5 trillion Btu","CustAccts":"443,899"},
    {"Abbreviation":"MT","State":"Montana","Population":"1,050,493","Sq.Miles":"147,040","ConsumeRank":"43","TotEnergy":"930 trillion Btu (1.1% total)","RenewEnergy":"136 trillion Btu","CustAccts":"518,476"},
    {"Abbreviation":"DE","State":"Delaware","Population":"961,939","Sq.Miles":"2,489","ConsumeRank":"48","TotEnergy":"3 trillion Btu (<0.1% total)","RenewEnergy":"3 trillion Btu","CustAccts":"434,638"},
    {"Abbreviation":"SD","State":"South Dakota","Population":"869,666","Sq.Miles":"77,116","ConsumeRank":"45","TotEnergy":"234 total Btu (0.3% total)","RenewEnergy":"225 trillion Btu","CustAccts":"407,468"},
    {"Abbreviation":"ND","State":"North Dakota","Population":"755,393","Sq.Miles":"70,698","ConsumeRank":"39","TotEnergy":"3,691 trillion Btu (4.2% total)","RenewEnergy":"197 trillion Btu","CustAccts":"386,696"},
    {"Abbreviation":"AK","State":"Alaska","Population":"739,795","Sq.Miles":"665,384","ConsumeRank":"40","TotEnergy":"1,454 trillion Btu (1.7% total)","RenewEnergy":"23 trillion Btu","CustAccts":"290,947"},
    {"Abbreviation":"VT","State":"Vermont","Population":"623,657","Sq.Miles":"9,616","ConsumeRank":"51","TotEnergy":"38 trillion Btu (<0.1% total)","RenewEnergy":"38 trillion Btu","CustAccts":"317,189"},
    {"Abbreviation":"WY","State":"Wyoming","Population":"579,315","Sq.Miles":"97,813","ConsumeRank":"42","TotEnergy":"7,788 trillion Btu (8.8% total)","RenewEnergy":"56 trillion Btu","CustAccts":"276,603"},
]