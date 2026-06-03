import { StaticImageData } from 'next/image';

import adityaKhatri from 'resources/employee/aditya.jpeg';
import amarShahi from 'resources/employee/amar.jpeg';
import ankitMehta from 'resources/employee/ankit.jpeg';
import bimalSaud from 'resources/employee/bimal-saud.jpeg';
import kanchiTamang from 'resources/employee/kanchi.jpeg';
import keyurKhadka from 'resources/employee/keyur.jpeg';
import navinAyer from 'resources/employee/navin.jpeg';
import nikaShakya from 'resources/employee/nika.jpeg';
import prinishaBaidya from 'resources/employee/prinisha.jpg';
import ranjanShrestha from 'resources/employee/ranjan.jpeg';
import rubyThapaliya from 'resources/employee/ruby.jpg';
import safarLigal from 'resources/employee/safar.jpeg';
import sadikshyaHamal from 'resources/employee/sadikshya.jpeg';
import shreeyashShrestha from 'resources/employee/shreeyash.jpeg';
import shubhDhital from 'resources/employee/shubh.jpeg';
import smritiKafle from 'resources/employee/smriti.jpeg';
import subinaRajopadhyaya from 'resources/employee/subina.jpeg';
import udayMaharjan from 'resources/employee/uday.png';
import rup from 'resources/employee/rup.jpeg';
import pratikshyaBhattarai from 'resources/employee/pratikshya-bhattarai.jpg';
import babinKarmacharya from 'resources/employee/babin-karmacharya.jpg';
import sushilTiwari from 'resources/employee/sushilTiwari.jpg';
import sudipKhanal from 'resources/employee/sudip.png';
import sandeshThapa from 'resources/employee/sandesh.png';
import ashmitaPaudel from 'resources/employee/ashmitaPaudel.jpeg';
import cyrusShrestha from 'resources/employee/cyrusShrestha.jpeg';
import safalShrestha from 'resources/employee/safalShrestha.jpeg';
import champaDevi from 'resources/employee/champa.jpeg';
import amritBhusal from 'resources/employee/amrit.jpeg';

import { EmployeeId } from 'data/employees';

const employeeImages: {
    [key in EmployeeId]?: string | StaticImageData;
} = {
    'tc-001': adityaKhatri,
    'tc-013': amarShahi,
    'tc-000': ankitMehta,
    'tc-005': safarLigal,
    'tc-016': subinaRajopadhyaya,
    'tc-058': keyurKhadka,
    'tc-061': smritiKafle,
    'tc-062': shubhDhital,
    'tc-004': navinAyer,
    'tc-057': udayMaharjan,
    'tc-063': bimalSaud,
    'tc-030': nikaShakya,
    'tc-028': prinishaBaidya,
    'tc-042': ranjanShrestha,
    'tc-027': rubyThapaliya,
    'tc-064': sadikshyaHamal,
    'tc-059': shreeyashShrestha,
    'tc-055': rup,
    'tc-010': kanchiTamang,
    'tc-066': pratikshyaBhattarai,
    'tc-068': champaDevi,
    'tc-070': babinKarmacharya,
    'tc-072': sushilTiwari,
    'tc-076': sudipKhanal,
    'tc-077': sandeshThapa,
    'tc-079': ashmitaPaudel,
    'tc-080': cyrusShrestha,
    'tc-082': safalShrestha,
    'tc-084': amritBhusal,
};

// eslint-disable-next-line import/prefer-default-export
export function getEmployeeImage(id: EmployeeId) {
    return employeeImages[id];
}
