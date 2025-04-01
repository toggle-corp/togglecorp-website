import { StaticImageData } from 'next/image';

import adityaKhatri from 'resources/employee/aditya.jpeg';
import amarShahi from 'resources/employee/amar.jpeg';
import ankitMehta from 'resources/employee/ankit.jpeg';
import barshaThakuri from 'resources/employee/barsha.jpeg';
import bimalSaud from 'resources/employee/bimal-saud.jpeg';
import kanchiTamang from 'resources/employee/kanchi.jpeg';
import keyurKhadka from 'resources/employee/keyur.jpeg';
import kishanPahari from 'resources/employee/nishan.jpeg';
import navinAyer from 'resources/employee/navin.jpeg';
import nikaShakya from 'resources/employee/nika.jpeg';
import prinishaBaidya from 'resources/employee/prinisha.jpeg';
import ranjanShrestha from 'resources/employee/ranjan.jpeg';
import rubyThapaliya from 'resources/employee/ruby.jpeg';
import safarLigal from 'resources/employee/safar.jpeg';
import sadikshyaHamal from 'resources/employee/sadikshya.jpeg';
import sameerRai from 'resources/employee/sameer.jpeg';
import shreeyashShrestha from 'resources/employee/shreeyash.jpeg';
import shristiManandhar from 'resources/employee/shristi.jpeg';
import shubhDhital from 'resources/employee/shubh.jpeg';
import smritiKafle from 'resources/employee/smriti.jpeg';
import subinaRajopadhyaya from 'resources/employee/subina.jpeg';
import udayMaharjan from 'resources/employee/uday.jpeg';
import rup from 'resources/employee/rup.jpeg';
import sushmaAdhikari from 'resources/employee/sushma.jpeg';
import praneshShrestha from 'resources/employee/pranesh.jpeg';
import pratikshyaBhattarai from 'resources/employee/pratikshya-bhattarai.jpeg';
import sudanBhandari from 'resources/employee/sudan-bhandari.jpeg';
import babinKarmacharya from 'resources/employee/babin-karmacharya.jpeg';
import shreyaBhattarai from 'resources/employee/shreya-bhattarai.jpeg';
import sushilTiwari from 'resources/employee/sushilTiwari.jpg';
import roshaniPoudel from 'resources/employee/roshaniPoudel.jpg';

import champaDevi from 'resources/employee/champa.jpeg';

import { EmployeeId } from 'data/employees';

const employeeImages: {
    [key in EmployeeId]?: string | StaticImageData;
} = {
    'tc-001': adityaKhatri,
    'tc-013': amarShahi,
    'tc-000': ankitMehta,
    'tc-040': barshaThakuri,
    'tc-005': safarLigal,
    'tc-016': subinaRajopadhyaya,
    'tc-058': keyurKhadka,
    'tc-061': smritiKafle,
    'tc-062': shubhDhital,
    'tc-004': navinAyer,
    'tc-057': udayMaharjan,
    'tc-063': bimalSaud,
    'tc-017': kishanPahari,
    'tc-030': nikaShakya,
    'tc-028': prinishaBaidya,
    'tc-042': ranjanShrestha,
    'tc-027': rubyThapaliya,
    'tc-064': sadikshyaHamal,
    'tc-007': sameerRai,
    'tc-059': shreeyashShrestha,
    'tc-021': shristiManandhar,
    'tc-055': rup,
    'tc-047': sushmaAdhikari,
    'tc-010': kanchiTamang,
    'tc-065': praneshShrestha,
    'tc-066': pratikshyaBhattarai,
    'tc-067': sudanBhandari,
    'tc-068': champaDevi,
    'tc-070': babinKarmacharya,
    'tc-071': shreyaBhattarai,
    'tc-072': sushilTiwari,
    'tc-074': roshaniPoudel,
};

// eslint-disable-next-line import/prefer-default-export
export function getEmployeeImage(id: EmployeeId) {
    return employeeImages[id];
}
