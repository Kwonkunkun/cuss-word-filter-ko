import {beforeEach, describe, expect, it} from '@jest/globals';
import {CussWordFilter} from '../cussWordFilter';
import {CUSS_WORD_LIST, EXPECTED_FILTERED_CUSS_WORD_LIST, GOOD_WORD_LIST} from './mock';

describe('cussWordFilter filter function test', () => {
    let cussWordFilter: CussWordFilter;
    beforeEach(() => {
        cussWordFilter = new CussWordFilter({});
    });

    it('욕를 제대로 필터링 하는가?', () => {
        CUSS_WORD_LIST.forEach((cussWord, index) => {
            expect(cussWordFilter.filter(cussWord)).toBe(EXPECTED_FILTERED_CUSS_WORD_LIST[index]);
        });
    });

    it("욕이 아닌 단어는 필터링 되지 않는가?", () => {
        GOOD_WORD_LIST.forEach((goodWord) => {
            expect(cussWordFilter.filter(goodWord)).toBe(goodWord);
        });
    });

    it('whiteList 에 추가한 단어는 필터링에서 제외되는가?', () => {
        //cussWord 에 존재하는 단어인지 확인
        expect(cussWordFilter.isCussWord('개색햐')).toBeTruthy();
        //whiteList 에 '개색햐'를 추가
        cussWordFilter = new CussWordFilter({whiteList: ['개색햐']});
        //whiteList 에 추가한 단어는 필터링에서 제외되는지 확인
        expect(cussWordFilter.filter('개색햐')).toBe('개색햐');
    });
});