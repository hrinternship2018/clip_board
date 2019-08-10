import { Sequelize } from 'sequelize'

export function getMysqlData(){
    const sequelize = new Sequelize('serverData','root','',{dialect:'mysql'});
    sequelize.query("select * from names").spread((results, metadata) => {
        //console.log(results);
        sequelize.close();
    })
}