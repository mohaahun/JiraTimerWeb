$(document).ready(function(){
    $indata = document.baseURI.split('?data=')[1]
   $indata = decodeURIComponent($indata)

    $jsondata = JSON.parse($indata.replaceAll('%22','"'))


    $(function () {
        $('#fulltable').bootstrapTable({
            columns:[
                {
                field:'project',
                title:'Project ID'},
                {
                    field:'issueKey',
                    title:'Issue ID'},
                {
                    field:'issueSummary',
                    title:'Issue Summary'},
                {
                    field:'user',
                    title:'Name'},
                {
                    field:'startTimeOfWorklog',
                    title:'Worklog Start Time'},
                {
                    field:'TimeSpent',
                    title:'Worktime'},
                {
                    field:'dateAndTimeOfEdit',
                    title:'Worklog Edit Time'}
            ],
            data : $jsondata
        });
    });

    //project view

  /*  let pgroups = _.each($jsondata[1], function (value){
        return value[1];
    });

    let $pjdata = _.map(pgroups, function (group){
        return{
            project: $jsondata[1].project,
            Times: _.pluck(group, 'TimeSpent')
        }
    });*/



    //issue view

    /*let igroups = _.groupBy($jsondata[0], function (value){
        return value.issueKey;
    });
    console.log("ig "+igroups)*/

    /*let $ijdata = _.map(igroups, function (group){
        return{
            issueKey: group[0].issueKey,
            Times: _.pluck(group, 'TimeSpent')
        }
    });*/
    //console.log("jsondata[0] "+$jsondata[0])
   /* $(function ()
    {$(onload())
        let $ijdata = _.map(issuelist, function (group){
            return{
                issueKey: group[0],
                Times: _.pluck(group[1])

            }
            console.log("ijdata "+$ijdata)
        });
    });*/

//project
    let $pjdata = $jsondata[1].project;
    let $mpjdata = _.map($pjdata, function (value,key){
        return{
            project: key,
            Times: value,
        }
    });

    $(function () {
        $('#projecttable').bootstrapTable({
            //data: $jsondata
            columns:[
                {
                    field:'project',
                    title:'Project ID'},
                {
                    field:'Times',
                    title:'Worktime'}
            ],
            data : $mpjdata
        });
    });

//issue
    let $isdata = $jsondata[0].issue;
    let $misdata = _.map($isdata, function (value,key){
        return{
            issueKey: key,
            Times: value,
        }
    });

    $(function () {
        $('#issuetable').bootstrapTable({
            columns:[
                {
                    field:'issueKey',
                    title:'issue_ID'},
                {
                    field:'Times',
                    title:'Worktime'}
            ],
            data : $misdata
        });
    });

// person
    let $pedata = $jsondata[2].person;
    let $mpedata = _.map($pedata, function (value,key){
        return{
            user: key,
            Times: value,
        }
    });

    $(function () {
        $('#persontable').bootstrapTable({
            columns:[
                {
                    field:'user',
                    title:'User'},
                {
                    field:'Times',
                    title:'Worktime'}
            ],
            data : $mpedata
        });
    });



    /*let pegroups = _.groupBy($jsondata, function (value) {
        return value.user;
    });

    let $pejdata = _.map(pegroups, function (group){
        return{
            user: group[0].user,
            Times: _.pluck(group, 'TimeSpent')
        }
    });

*/
});
