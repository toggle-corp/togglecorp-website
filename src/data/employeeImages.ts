import adityaKhatri from 'resources/employee/aditya.jpeg';
import amarShahi from 'resources/employee/amar.jpeg';
import ankitMehta from 'resources/employee/ankit.jpeg';
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
import safarLigal from 'resources/employee/safar.jpeg';
import sadikshyaHamal from 'resources/employee/sadikshya.jpeg';
import sagunaThapa from 'resources/employee/saguna.jpeg';
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
    'TC-001': adityaKhatri,
    'TC-013': amarShahi,
    'TC-000': ankitMehta,
    'TC-050': anushaKhadka,
    'TC-040': barshaThakuri,
    'TC-005': safarLigal,
    'TC-016': subinaRajopadhyaya,
    'TC-058': keyurKhadka,
    'TC-036': bimalPandey,
    'TC-008': bibekPandey,
    'TC-039': priyeshGautam,
    'TC-061': smritiKafle,
    'TC-062': shubhDhital,
    'TC-006': kritiChhetri,
    'TC-004': navinAyer,
    'TC-015': shreetiKafle,
    'TC-052': snehaPandey,
    'TC-052': udayMaharjan,
    'saguna-thapa': sagunaThapa,
    'TC-063': bimalSaud,
    'TC-023': karinaGopali,
    'TC-017': kishanPahari,
    'TC-030': nikaShakya,
    'TC-034': poojaSharma,
    'TC-028': prinishaBaidya,
    'TC-052': puranBan,
    'TC-042': ranjanShrestha,
    'TC-027': rubyThapaliya,
    'TC-064': sadikshyaHamal,
    'TC-007': sameerRai,
    'shreeya-shrestha': shreeyaShrestha,
    'TC-059': shreeyashShrestha,
    'TC-021': shristiManandhar,
    'TC-052': rup,
    'TC-047': sushmaAdhikari,
    'TC-018': rishiKhatri,
    'TC-010': kanchiTamang,
    'TC-065': praneshShrestha,
};

// eslint-disable-next-line import/prefer-default-export
export function getEmployeeImage(id: EmployeeId) {
    return employeeImages[id];
}
