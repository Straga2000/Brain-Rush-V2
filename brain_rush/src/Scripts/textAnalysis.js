const stopWords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves',
    'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs',
    'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been',
    'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because',
    'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before',
    'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then',
    'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some',
    'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should',
    'now', 'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', "aren't", 'as', 'at', 'be',
    'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', "can't", 'cannot', 'could', "couldn't", 'did',
    "didn't", 'do', 'does', "doesn't", 'doing', "don't", 'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', "hadn't",
    'has', "hasn't", 'have', "haven't", 'having', 'he', "he'd", "he'll", "he's", 'her', 'here', "here's", 'hers', 'herself', 'him',
    'himself', 'his', 'how', "how's", 'i', "i'd", "i'll", "i'm", "i've", 'if', 'in', 'into', 'is', "isn't", 'it', "it's", 'its',
    'itself', "let's", 'me', 'more', 'most', "mustn't", 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or',
    'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', "shan't", 'she', "she'd", "she'll", "she's", 'should',
    "shouldn't", 'so', 'some', 'such', 'than', 'that', "that's", 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', "there's",
    'these', 'they', "they'd", "they'll", "they're", "they've", 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was',
    "wasn't", 'we', "we'd", "we'll", "we're", "we've", 'were', "weren't", 'what', "what's", 'when', "when's", 'where', "where's", 'which',
    'while', 'who', "who's", 'whom', 'why', "why's", 'with', "won't", 'would', "wouldn't", 'you', "you'd", "you'll", "you're", "you've", 'your',
    'yours', 'yourself', 'yourselves'];

var excludedCharacters = /[.,!?\-;:()]/g;
var stopCharacters = /[.!?;:]/g;
var pattern = /(\w|\d)+/g;

///string to string list
export function normalizeText(sourceText) {
    ///find combinations of letters and numbers
    let bagOfWords = sourceText.match(pattern);
    //let bagOfWords = sourceText.split(" ");
    ///lowercase all the text and exclude punctuation
    //bagOfWords = bagOfWords.map(elem => elem.replace(excludedCharacters, "").toLowerCase());
    bagOfWords = bagOfWords.map(elem => elem.toLowerCase());
    //console.log(bagOfWords);
    bagOfWords = bagOfWords.filter(elem => !(stopWords.includes(elem)));
    //console.log(textFrequency(bagOfWords));
    return bagOfWords;
}

export function textWordCount(vectorWord) {
    return vectorWord.reduce(function (stats, word) {

        /* `stats` is the object that we'll be building up over time.*/
        if ( stats.hasOwnProperty( word ) ) {
            /* `stats` already has an entry for the current `word`.
               As a result, let's increment the count for that `word`. */
            stats[ word ] = stats[ word ] + 1;
        } else {
            /*`stats` does not yet have an entry for the current `word`.
               As a result, let's add a new entry, and set count to 1. */
            stats[ word ] = 1;
        }

        /* Because we are building up `stats` over numerous iterations,
           we need to return it for the next pass to modify it. */
        return stats;

    }, {});
}

export function textFrequencySentence(sourceText) {
    let wordList = normalizeText(sourceText);
    let len = wordList.length;

    wordList = textWordCount(wordList);

    for(let keyWord in wordList)
        if(wordList.hasOwnProperty(keyWord))
            wordList[keyWord] /= len;
    return wordList;
}

////this function receives a document text
export function textFrequency(sourceText) {
    ///list of all frequencies
    let textFrequencyObject = textFrequencySentence(sourceText);
    //console.log(textFrequencyObject);
    ///slice by sentences
    let sentenceList = sourceText.split(stopCharacters);
    //console.log(sentenceList);

    let sentenceObject = {};
    for(let i = 0; i < sentenceList.length; i++)
    {
        let sentence = sentenceList[i];
        if(sentence !== "")
        {
            //console.log(sentence.length, sentence, i);
            let tfValue = normalizeText(sentence);
            let sum = 0;

            for(let j = 0; j < tfValue.length; j++)
            {
                sum += textFrequencyObject[tfValue[j]];
            }

            sentenceObject[sentence] = sum / tfValue.length;
        }
    }

    return ({correspondence: textFrequencyObject, frequency: sentenceObject});
}

export function inverseTextFrequencySentence(sourceText, docLength) {
    let wordList = textWordCount(normalizeText(sourceText));

    for(let keyWord in wordList)
        if(wordList.hasOwnProperty(keyWord))
            wordList[keyWord] = Math.log(docLength / wordList[keyWord]);
    return wordList;
}

export function inverseTextFrequency(sourceText) {
    let sentenceList = sourceText.split(stopCharacters);
    let sentenceListLength = sentenceList.length;
    let inverseTextFrequencyObject = inverseTextFrequencySentence(sourceText, sentenceListLength);


    let sentenceObject = {};

    for(let i = 0; i < sentenceListLength; i++)
    {
        let sentence = sentenceList[i];
        if(sentence !== "")
        {
            let itfValue = normalizeText(sentence);
            let sum = 0;

            //console.log(i, sentence, itfValue);
            for(let j = 0; j < itfValue.length; j++)
            {
                sum += inverseTextFrequencyObject[itfValue[j]];
            }

            sentenceObject[sentence] = sum / itfValue.length;
        }
    }

    return ({correspondence: inverseTextFrequencyObject, frequency: sentenceObject});
    //return inverseTextFrequencyObject;
}

export function getSentencesByImportance(sourceText) {
    let tfValues = textFrequency(sourceText).frequency;
    let itfValues = inverseTextFrequency(sourceText).frequency;

    let maximizeObject = {};
    for(let key in tfValues)
    {
        if(itfValues.hasOwnProperty(key))
        {
                maximizeObject[key] = tfValues[key] * itfValues[key];
        }
    }

    return maximizeObject;
}

export function getTopN(frequencyObj, num) {
    let props = Object.keys(frequencyObj).map(function(key) {
        return { key: key, value: this[key] };
    });

    props.sort(function(p1, p2) { return p2.value - p1.value; });
    return props.slice(0, num);
}