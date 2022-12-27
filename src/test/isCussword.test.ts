import {beforeEach, describe, expect, it} from '@jest/globals';
import {CussWordFilter} from '../cussWordFilter';
import {CUSS_WORD_LIST, GOOD_WORD_LIST} from './mock';

describe('cussWordFilter isCussWord function test', () => {
    let cussWordFilter: CussWordFilter;
    beforeEach(() => {
        cussWordFilter = new CussWordFilter({});
    });

    it('욕들을 true 로 잘 뱉어내는가?', () => {
        CUSS_WORD_LIST.forEach((cussWord) => {
            const isCussWord = cussWordFilter.isCussWord(cussWord);
            expect(isCussWord).toBeTruthy();
        });
    });

    it('욕이 아닌 단어는 false 로 잘 뱉어내는가?', () => {
        GOOD_WORD_LIST.forEach((goodWord) => {
            const isCussWord = cussWordFilter.isCussWord(goodWord);
            expect(isCussWord).toBeFalsy();
        });
    });

    it('whiteList 에 추가한 단어는 해당 function 에서 잘 제외하는가?', () => {
        //cussWord 에 존재하는 단어인지 확인
        expect(cussWordFilter.isCussWord('개색햐')).toBeTruthy();
        //whiteList 에 '개색햐'를 추가
        cussWordFilter = new CussWordFilter({whiteList: ['개색햐']});
        //whiteList 에 추가한 단어는 false 로 잘 뱉어내는지 확인
        expect(cussWordFilter.isCussWord('개색햐')).toBeFalsy();
    });
});