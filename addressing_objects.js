var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};

// Get The following values:
// 1-Name of the course ('JavaScript Applications')
console.log('\n1-Name of the course:\n' + course.name);

// 2-Name of the second teacher('shane')
console.log('\n2-Name of the second teacher:\n' + course.teachers[1]);

// 3-Name of the first student ('Steve')
console.log('\n3-Name of the first student :\n' + course.students[0].name);

// 4-Katy's computer type ('macbook')
console.log('\n4-Katy\'s computer type :\n' + course.students[1].computer.type);

// 5-The preReq equipment object
console.log('\n5-The preReq equipment object :\n' + course.preReqs.equipment.laptop + ' & ' + course.preReqs.equipment.OSOptions);

// 6-The second OSOption from equipment prereqs ('osx')
console.log('\n6-The second OSOption from equipment prereqs  :\n' + course.preReqs.equipment.OSOptions[1]);

// 7-string listing the OSOptions separated by 'or' ('linux or osx')
console.log('\n7-string listing the OSOptions separated by \'or\'   :\n' + course.preReqs.equipment.OSOptions.join(" or "));

//8- An array of all the students that are using OSX.
console.log('\nAn array of all the students that are using OSX :\n' )
var OSXStudents = [];
for(var i = 0; i < course.students.length; i++ )
{
  if(course.students[i].computer.OS === "OSX"){
    OSXStudents.push(course.students[i].name);
  }
}
console.log(OSXStudents);
