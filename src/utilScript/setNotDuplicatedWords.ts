/**
 * cuss-word-list.json 파일을 불러와서 duplicate word 를 제거한 후 save 한다.
 */

const fs = require('fs');
const path = require('path');
const cussWordList = require('../cuss-word-list.json');

/**
 * @param words 중복을 제거할 단어 목록
 */
const getNotDuplicatedWords = (words: string[]) => {
    const result: string[] = [];
    words.forEach((word) => {
        if (!result.includes(word)) {
        result.push(word);
        }
    });
    return result;
}

/**
 * @param words 중복을 제거할 단어 목록
 * @param saveFilePath 중복을 제거한 단어 목록을 저장할 파일 경로
 */
const setNotDuplicatedWords = (saveFilePath: string, words: string[]) => {
    const notDuplicatedWords = getNotDuplicatedWords(words);
    fs.writeFileSync(path.resolve(__dirname, saveFilePath), JSON.stringify({words: notDuplicatedWords}, null, 2));
}

setNotDuplicatedWords('../cuss-word-list.json', cussWordList.words);
