#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

const colorCategories = [
    {
        name: 'Basic Colors',
        choices: [
            { name: 'Red', value: chalk.red('this text color is red') },
            { name: 'Green', value: chalk.green('this text color is green') },
            { name: 'Blue', value: chalk.blue('this text color is blue') },
            { name: 'Yellow', value: chalk.yellow('this text color is yellow') },
            { name: 'Cyan', value: chalk.cyan('this text color is cyan') },
            { name: 'Magenta', value: chalk.magenta('this text color is maganta') },
            { name: 'White', value: chalk.white('this text color is white') },
            { name: 'Black', value: chalk.black('this text color is black') },
            { name: 'Orange', value: chalk.hex('#FFA500')('this text color is orange') },
            { name: 'Purple', value: chalk.hex('#800080')('this text color is purple') }
        ]
    },
    {
        name: 'Bright Colors',
        choices: [
            { name: 'Bright Red', value: chalk.bold.red('this text color is gright red') },
            { name: 'Bright Green', value: chalk.bold.green('this text color is bright green') },
            { name: 'Bright Blue', value: chalk.bold.blue('this text color is bright blue') },
            { name: 'Bright Yellow', value: chalk.bold.yellow('this text color is Bright Yellow') },
            { name: 'Bright Cyan', value: chalk.bold.cyan('this text color is Bright Cyan') },
            { name: 'Bright Magenta', value: chalk.bold.magenta('this text color is Bright Magenta') },
            { name: 'Bright White', value: chalk.bold.white('this text color is Bright White') },
            { name: 'Bright Black', value: chalk.bold.black('this text color is Bright Black') },
            { name: 'Bright Orange', value: chalk.bold.hex('#FFA500')('this text color is Bright Orange') },
            { name: 'Bright Purple', value: chalk.bold.hex('#800080')('this text color is Bright Purple') }
        ]
    },
    {
        name: 'Custom Colors',
        choices: [
            { name: 'Yellow Green', value: chalk.hex('#9ACD32')('this text color is Yellow Green') },
            { name: 'Deep Pink', value: chalk.hex('#FF1493')('this text color is Deep Pink') },
            { name: 'Steel Blue', value: chalk.hex('#4682B4')('this text color is Steel Blue') },
            { name: 'Gold', value: chalk.hex('#FFD700')('this text color is Gold') },
            { name: 'Dark Violet', value: chalk.hex('#9400D3')('this text color is Dark Violet') },
            { name: 'Sky Blue', value: chalk.hex('#87CEEB')('this text color is Sky Blue') },
            { name: 'Lime Green', value: chalk.hex('#32CD32')('this text color is Lime Green') },
            { name: 'Hot Pink', value: chalk.hex('#FF69B4')('this text color is Hot Pink') },
            { name: 'Teal', value: chalk.hex('#008080')('this text color is Teal') },
            { name: 'Slate Gray', value: chalk.hex('#708090')('this text color is Slate Gray') }
        ]
    }
];

const additionalQuestions = [
    {
        type: 'input',
        name: 'favoriteActivity',
        message: chalk.italic.bgRed('\nWhat is your favorite activity involving this color?')
    },
    {
        type: 'input',
        name: 'meaning',
        message: chalk.italic.bgRed('\nWhat does this color mean to you?')
    }
];

const getColor = async () => {
    let exit = false;

    while (!exit) {
        const categoryAnswer = await inquirer.prompt({
            type: 'list',
            name: 'category',
            message: chalk.italic.bgRed('\nChoose a color category:'),
            choices: [...colorCategories.map(category => category.name), 'Exit']
        });

        if (categoryAnswer.category === 'Exit') {
            exit = true;
            continue;
        }

        const selectedCategory = colorCategories.find(category => category.name === categoryAnswer.category);
        const colorAnswer = await inquirer.prompt({
            type: 'list',
            name: 'color',
            message: chalk.italic.bgRed('\nChoose a color:'),
            choices: selectedCategory?.choices || []
        });

        console.log(`You selected: ${colorAnswer.color}`);

    
        const additionalInfo = await inquirer.prompt(additionalQuestions);
        console.log(chalk.yellow.italic.bold.underline('\nAdditional Information:'));
        console.log(chalk.blue.italic.bold('Favorite Activity:', additionalInfo.favoriteActivity));
        console.log(chalk.blue.italic.bold('Meaning:', additionalInfo.meaning));
    }
};

const main = async () => {
    console.log("\n")
console.log(chalk.red('welcome ') + chalk.green('to ') + chalk.blue('color ') + chalk.yellow('finder ') + chalk.magenta('app ') )
    await getColor(); 
};

main();
