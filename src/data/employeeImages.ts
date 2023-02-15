import adityaKhatri from 'resources/employee/aditya.jpeg';
import amarShahi from 'resources/employee/amar.jpeg';
import ankitMehta from 'resources/employee/ankit-mehta.png';
import anushaKhadka from 'resources/employee/anusha.jpeg';
import barshaThakuri from 'resources/employee/barsha.jpeg';
import bibekPandey from 'resources/employee/bibek.jpeg';
import bimalPandey from 'resources/employee/bimal-pandey.jpeg';
import bimalSaud from 'resources/employee/bimal-saud.jpeg';
import kanchiTamang from 'resources/employee/kanchi.jpeg';
import karinaGopali from 'resources/employee/karina.jpeg';
import keyurKhadka from 'resources/employee/keyur.jpeg';
import kishanPahari from 'resources/employee/nishan.jpeg';
import kritiChhetri from 'resources/employee/kriti.jpeg';
import navinAyer from 'resources/employee/navin.jpeg';
import nikaShakya from 'resources/employee/nika.jpeg';
import poojaSharma from 'resources/employee/pooja.jpeg';
import prinishaBaidya from 'resources/employee/prinisha.jpeg';
import priyeshGautam from 'resources/employee/priyesh.jpeg';
import puranBan from 'resources/employee/puran.jpeg';
import ranjanShrestha from 'resources/employee/ranjan.jpeg';
import rishiKhatri from 'resources/employee/rishi.jpeg';
import rubyThapaliya from 'resources/employee/ruby.jpeg';
import safarLigal from 'resources/employee/safar-ligal.png';
import sadikshyaHamal from 'resources/employee/sadikshya.jpeg';
import sagunaThapa from 'resources/employee/saguna.png';
import sameerRai from 'resources/employee/sameer.jpeg';
import shreetiKafle from 'resources/employee/shreeti.jpeg';
import shreeyaShrestha from 'resources/employee/shya.jpeg';
import shreeyashShrestha from 'resources/employee/shreeyash.jpeg';
import shristiManandhar from 'resources/employee/shristi.jpeg';
import shubhDhital from 'resources/employee/shubh.jpeg';
import smritiKafle from 'resources/employee/smriti.jpeg';
import snehaPandey from 'resources/employee/sneha.jpeg';
import subinaRajopadhyaya from 'resources/employee/subina.jpeg';
import udayMaharjan from 'resources/employee/uday.jpeg';
import rup from 'resources/employee/rup.jpeg';
import sushmaAdhikari from 'resources/employee/sushma.jpeg';
import praneshShrestha from 'resources/employee/pranesh.jpeg';

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
    'sameer-rai': sameerRai,
    'shreeya-shrestha': shreeyaShrestha,
    'shreeyash-shrestha': shreeyashShrestha,
    'shristi-manandhar': shristiManandhar,
    'rup-rajbanshi': rup,
    'sushma-adhikari': sushmaAdhikari,
    'rishi-khatri': rishiKhatri,
    'kanchi-tamang': kanchiTamang,
    'pranesh-shrestha': praneshShrestha,
};

// eslint-disable-next-line import/prefer-default-export
export function getEmployeeImage(id: EmployeeId) {
    return employeeImages[id];
}
