import employeeIcon from 'resources/employee-img.webp';
import adityaKhatri from 'resources/employee/aditya-khatri.png';
import amarShahi from 'resources/employee/amar-shahi.png';
import ankitMehta from 'resources/employee/ankit-mehta.png';
import anushaKhadka from 'resources/employee/anusha-khadka.png';
import barshaThakuri from 'resources/employee/barsha-thakuri.png';
// import bibekPandey from 'resources/employee/bibek-pandey.png';
// import bimalPandey from 'resources/employee/bimal-pandey.png';
// import kanchiTamang from 'resources/employee/kanchi-tamang.png';
// import karinaGopali from 'resources/employee/karina-gopali.png';
// import keyurKhadka from 'resources/employee/keyur-khadka.png';
// import kisanPahari from 'resources/employee/kisan-pahari.png';
// import kritiChhetri from 'resources/employee/kriti-chhetri.png';
// import navinAyer from 'resources/employee/navin-ayer.png';
// import nikaShakya from 'resources/employee/nika-shakya.png';
// import poojaSharma from 'resources/employee/pooja-sharma.png';
// import prinishaBaidhya from 'resources/employee/prinisha-baidhya.png';
// import priyeshGautam from 'resources/employee/priyesh-gautam.png';
// import puranBan from 'resources/employee/puran-ban.png';
// import ranjanShrestha from 'resources/employee/ranjan-shrestha.png';
// import rishiKhatri from 'resources/employee/rishi-khatri.png';
// import rubyThapaliya from 'resources/employee/ruby-thapaliya.png';
import safarLigal from 'resources/employee/safar-ligal.png';
// import sagunaThapa from 'resources/employee/saguna-thapa.png';
// import sameerRai from 'resources/employee/sameer-rai.png';
// import shreetiKafle from 'resources/employee/shreeti-kafle.png';
// import shreeyaShrestha from 'resources/employee/shreeya-shrestha.png';
// import shreeyashShrestha from 'resources/employee/shreeyash-shrestha.png';
// import shristiManandhar from 'resources/employee/shristi-manandhar.png';
// import shubhDhital from 'resources/employee/shubh-dhital.png';
// import smritiKafle from 'resources/employee/smriti-kafle.png';
// import snehaPandey from 'resources/employee/sneha-pandey.png';
import subinaRajopadhyaya from 'resources/employee/subina-rajopadhyaya.png';
// import udayMaharjan from 'resources/employee/uday-maharjan.png';

import { EmployeeId } from 'data/employees';

const employeeImages: {
    [key in EmployeeId]?: string;
} = {
    'aditya-khatri': adityaKhatri,
    'amar-shahi': amarShahi,
    'ankit-mehta': ankitMehta,
    'anusha-khadka': anushaKhadka,
    'barsha-thakuri': barshaThakuri,
    // 'bibek-pandey': bibekPandey,
    'kriti-chhetri': employeeIcon,
    'safar-ligal': safarLigal,
    'subina-rajopadhyaya': subinaRajopadhyaya,
};

// eslint-disable-next-line import/prefer-default-export
export function getEmployeeImage(id: EmployeeId) {
    return employeeImages[id];
}
