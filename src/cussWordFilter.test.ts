import {beforeEach, describe, expect, it} from '@jest/globals';
import {CussWordFilter} from './cussWordFilter';

const CUSS_WORD_LIST = [
    'ㅅㅂ',
    '개색햐',
    'ㅅ1바',
    'ㅅ1ㅂ 집에 가고싶다.'
];

const EXPECTED_FILTERED_CUSS_WORD_LIST = [
    '**',
    '***',
    '***',
    '*** 집에 가고싶다.',
];

describe('cussWordFilter', () => {
    let cussWordFilter: CussWordFilter;
    beforeEach(() => {
        cussWordFilter = new CussWordFilter({});
    });
    it('filter', () => {
        CUSS_WORD_LIST.forEach((cussWord, index) => {
            expect(cussWordFilter.filter(cussWord)).toBe(EXPECTED_FILTERED_CUSS_WORD_LIST[index]);
        });
    });
});