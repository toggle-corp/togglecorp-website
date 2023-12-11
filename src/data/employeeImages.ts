import { StaticImageData } from 'next/image';

import adityaKhatri from 'resources/employee/aditya.jpeg';
import amarShahi from 'resources/employee/amar.jpeg';
import ankitMehta from 'resources/employee/ankit.jpeg';
// import anushaKhadka from 'resources/employee/anusha.jpeg';
import barshaThakuri from 'resources/employee/barsha.jpeg';
// import bibekPandey from 'resources/employee/bibek.jpeg';
// import bimalPandey from 'resources/employee/bimal-pandey.jpeg';
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
// import priyeshGautam from 'resources/employee/priyesh.jpeg';
import puranBan from 'resources/employee/puran.jpeg';
import ranjanShrestha from 'resources/employee/ranjan.jpeg';
import rishiKhatri from 'resources/employee/rishi.jpeg';
import rubyThapaliya from 'resources/employee/ruby.jpeg';
import safarLigal from 'resources/employee/safar.jpeg';
import sadikshyaHamal from 'resources/employee/sadikshya.jpeg';
// import sagunaThapa from 'resources/employee/saguna.jpeg';
// import shreeyaShrestha from 'resources/employee/shya.jpeg';
import sameerRai from 'resources/employee/sameer.jpeg';
// import shreetiKafle from 'resources/employee/shreeti.jpeg';
import shreeyashShrestha from 'resources/employee/shreeyash.jpeg';
import shristiManandhar from 'resources/employee/shristi.jpeg';
import shubhDhital from 'resources/employee/shubh.jpeg';
import smritiKafle from 'resources/employee/smriti.jpeg';
// import snehaPandey from 'resources/employee/sneha.jpeg';
import subinaRajopadhyaya from 'resources/employee/subina.jpeg';
import udayMaharjan from 'resources/employee/uday.jpeg';
import rup from 'resources/employee/rup.jpeg';
import sushmaAdhikari from 'resources/employee/sushma.jpeg';
import praneshShrestha from 'resources/employee/pranesh.jpeg';
import pratikshyaBhattarai from 'resources/employee/pratikshya-bhattarai.jpeg';
import sudanBhandari from 'resources/employee/sudan-bhandari.jpeg';
import anupamaKc from 'resources/employee/anupama-kc.jpeg';
import babinKarmacharya from 'resources/employee/babin-karmacharya.jpeg';
import shreyaBhattarai from 'resources/employee/shreya-bhattarai.jpeg';

import champaDevi from 'resources/employee/champa.jpeg';

import { EmployeeId } from 'data/employees';

const employeeImages: {
    [key in EmployeeId]?: string | StaticImageData;
} = {
    'tc-001': adityaKhatri,
    'tc-013': amarShahi,
    'tc-000': ankitMehta,
    // 'tc-050': anushaKhadka,
    'tc-040': barshaThakuri,
    'tc-005': safarLigal,
    'tc-016': subinaRajopadhyaya,
    'tc-058': keyurKhadka,
    // 'tc-036': bimalPandey,
    // 'tc-008': bibekPandey,
    // 'tc-039': priyeshGautam,
    'tc-061': smritiKafle,
    'tc-062': shubhDhital,
    'tc-006': kritiChhetri,
    'tc-004': navinAyer,
    // 'tc-015': shreetiKafle,
    // 'tc-052': snehaPandey,
    'tc-057': udayMaharjan,
    // 'tc-067': sagunaThapa,
    'tc-063': bimalSaud,
    'tc-023': karinaGopali,
    'tc-017': kishanPahari,
    'tc-030': nikaShakya,
    'tc-034': poojaSharma,
    'tc-028': prinishaBaidya,
    'tc-056': puranBan,
    'tc-042': ranjanShrestha,
    'tc-027': rubyThapaliya,
    'tc-064': sadikshyaHamal,
    'tc-007': sameerRai,
    // 'tc-066': shreeyaShrestha,
    'tc-059': shreeyashShrestha,
    'tc-021': shristiManandhar,
    'tc-055': rup,
    'tc-047': sushmaAdhikari,
    'tc-018': rishiKhatri,
    'tc-010': kanchiTamang,
    'tc-065': praneshShrestha,
    'tc-066': pratikshyaBhattarai,
    'tc-067': sudanBhandari,
    'tc-068': champaDevi,
    'tc-069': anupamaKc,
    'tc-070': babinKarmacharya,
    'tc-071': shreyaBhattarai,
};

// eslint-disable-next-line import/prefer-default-export
export function getEmployeeImage(id: EmployeeId) {
    return employeeImages[id];
}
