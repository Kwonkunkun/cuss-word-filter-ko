const CUSS_WORD_LIST = [
    'ㅅㅂ',
    '개색햐',
    'ㅅ1바',
    'ㅅ1ㅂ 집에 가고싶다.'
];

const GOOD_WORD_LIST = [
    '안녕하세요',
    '반갑습니다',
    '좋은 하루 되세요'
];

const EXPECTED_FILTERED_CUSS_WORD_LIST = [
    '**',
    '***',
    '***',
    '*** 집에 가고싶다.',
];

export {CUSS_WORD_LIST, GOOD_WORD_LIST, EXPECTED_FILTERED_CUSS_WORD_LIST};