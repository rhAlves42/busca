const lunr = require('lunr');
const { lstatSync, readdirSync, readFileSync, open } = require('fs')
const { join } = require('path')
const { forEach, includes } = require('lodash');
const seachPlaces = ['page-data/empreendimento', 'page-data/magazine']
// - todos os campos de empreendimentos
// - duvidas frequentes
// - magazine: titulo texto e tags

const preparePageData = () => {

  
};
const searchInit = () => {
  const isDirectory = source => lstatSync(source).isDirectory()
  const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)


  forEach(seachPlaces, place => {
    const placeDirectory = getDirectories(place);
    if (place === 'page-data/empreendimento') {
      forEach(placeDirectory, itemPath => {
        const rawTextData = readFileSync(`${itemPath}/page-data.json`).toString();
        const jsonParsedData = JSON.parse(rawTextData);
        console.log(jsonParsedData.path)
      })
    }
  });


};

searchInit()