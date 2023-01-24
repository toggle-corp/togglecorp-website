import employeeIcon from 'resources/employee-img.webp';
import adityaKhatri from 'resources/employee/aditya-khatri.png';
import amarShahi from 'resources/employee/amar-shahi.png';
import ankitMehta from 'resources/employee/ankit-mehta.png';
import anushaKhadka from 'resources/employee/anusha-khadka.png';
import barshaThakuri from 'resources/employee/barsha-thakuri.png';
import bibekPandey from 'resources/employee/bibek-pandey.png';
import bimalPandey from 'resources/employee/bimal-pandey.png';
import bimalSaud from 'resources/employee/bimal-saud.png';
// import kanchiTamang from 'resources/employee/kanchi-tamang.png';
import karinaGopali from 'resources/employee/karina.png';
import keyurKhadka from 'resources/employee/keyur-khadka.png';
import kishanPahari from 'resources/employee/nishan.png';
import kritiChhetri from 'resources/employee/kriti-chhetri.png';
import navinAyer from 'resources/employee/navin.png';
import nikaShakya from 'resources/employee/nika.png';
import poojaSharma from 'resources/employee/pooja.png';
import prinishaBaidya from 'resources/employee/prinisha.png';
import priyeshGautam from 'resources/employee/priyesh-gautam.png';
import puranBan from 'resources/employee/puran-ban.png';
import ranjanShrestha from 'resources/employee/ranjan.png';
// import rishiKhatri from 'resources/employee/rishi-khatri.png';
import rubyThapaliya from 'resources/employee/ruby.png';
import safarLigal from 'resources/employee/safar-ligal.png';
import sadikshyaHamal from 'resources/employee/sadikshya.png';
import sagunaThapa from 'resources/employee/saguna.png';
import sameerRai from 'resources/employee/sameer-rai.png';
import shreetiKafle from 'resources/employee/shreeti-kafle.png';
import shreeyaShrestha from 'resources/employee/shya.png';
import shreeyashShrestha from 'resources/employee/shreeyash.png';
import shristiManandhar from 'resources/employee/shristi.png';
import shubhDhital from 'resources/employee/shubh-dhital.png';
import smritiKafle from 'resources/employee/smriti-kafle.png';
import snehaPandey from 'resources/employee/sneha-pandey.png';
import subinaRajopadhyaya from 'resources/employee/subina-rajopadhyaya.png';
import udayMaharjan from 'resources/employee/uday-maharjan.png';
import rup from 'resources/employee/rup.png';
import sushmaAdhikari from 'resources/employee/sushma.png';

import { EmployeeId } from 'data/employees';

const employeeImages: {
    [key in EmployeeId]?: string;
} = {
    'aditya-khatri': adityaKhatri,
    'amar-shahi': amarShahi,
    'ankit-mehta': ankitMehta,
    'anusha-khadka': anushaKhadka,
    'barsha-thakuri': barshaThakuri,
    'safar-ligal': safarLigal,
    'subina-rajopadhyaya': subinaRajopadhyaya,
    'keyur-khadka': keyurKhadka,
    'bimal-pandey': bimalPandey,
    'bibek-pandey': bibekPandey,
    'priyesh-gautam': priyeshGautam,
    'smriti-kafle': smritiKafle,
    'shubh-dhital': shubhDhital,
    'kriti-chhetri': kritiChhetri,
    'navin-ayer': navinAyer,
    'shreeti-kafle': shreetiKafle,
    'sneha-pandey': snehaPandey,
    'uday-maharjan': udayMaharjan,
    'saguna-thapa': sagunaThapa,
    'bimal-saud': bimalSaud,
    'karina-gopali': karinaGopali,
    'kisan-pahari': kishanPahari,
    'nika-shakya': nikaShakya,
    'pooja-sharma': poojaSharma,
    'prinisha-baidya': prinishaBaidya,
    'puran-ban': puranBan,
    'ranjan-shrestha': ranjanShrestha,
    'ruby-thapaliya': rubyThapaliya,
    'sadikshya-hamal': sadikshyaHamal,
    'saguna-thapa': sagunaThapa,
    'sameer-rai': sameerRai,
    'shreeya-shrestha': shreeyaShrestha,
    'shreeyash-shrestha': shreeyashShrestha,
    'shristi-manandhar': shristiManandhar,
    'rup-rajbanshi': rup,
    'sushma-adhikari': sushmaAdhikari,

};

// eslint-disable-next-line import/prefer-default-export
export function getEmployeeImage(id: EmployeeId) {
    return employeeImages[id];
}
