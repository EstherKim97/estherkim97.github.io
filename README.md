# Revised Minimal Light CV Theme

This theme was developed through the revision of Yaoyaou Liu's [minimal-light Jekyll template](https://github.com/yaoyao-liu/minimal-light). I recommend that you look at that for further documentation. This can be found in the minimal-light-README.md in the [template repo](https://github.com/DigitalHealthHumanities/CVWorkshop).

For those using this template, it is designed to enter specific information into the two .yml files located in the _data folder. 

## Formatting the experience.yml file
The experience.yml file will auto-populate the site for Education and Employment related concerns. I'll include a full version of the information required for each entry (although the only required field for either is "type", because that is the field that the liquid code is looking for when it runs).

You can copy and paste these pieces of code into the experience.yml.

### For Education
		- type: education # types include "education" for degree paths, "job" for past positions. 
		degreepath: # for type.education.
		institution:
		department: 
		advisors: # for type.education.
		thesis: # for type.education. You can use <i></i> to style long-form titles like for a dissertation.
		date: 
		notes:
    
### For Work History

		- type: job # types include "education" for degree paths, "job" for past positions. 
		title: # for type.employment.
		institution:
		department: 
		date: 
		notes:

## Formatting the pubscombined.yml
    
The pubscombined.yml is much longer, but functions similarly. There are different entries for different kinds of fields, and they can be included or excluded without issue. The type field is required for the liquid code to function.

You can copy and paste these pieces of code into the pubscombined.yml.

### For Peer Reviewed Work
		- type: essay # types include "essay" for peer-reviewed work, "conference" for presentations, "grant" for fellowships and other funding lines, "award" for awarded accomplishments, and "art" for artistic project, installation, or show.
		title: 
		authors: 
		pub_abbr: # for type:essay
		publication: # for type:essay
		date: 
		doi: # this will provide the link to the work. You can also host .pdfs of your work on this site in the assets folder. Link it there: "./assets/pdf/[filename].pdf"
		code: # for type:essay, type:conference. This is meant to link to a code repo.
		page: # for type:essay, type:conference. This is meant to link to an external site that may not be official, like a blog post.
		institution: # for type:award, type:grant
		image: #for type:essay, type:art. You will need to link to the file in your assets folder ./assets/img/[FILENAME].[FILETYPE]
		notes:
    
### For Conference Presentations
		- type: conference # types include "essay" for peer-reviewed work, "conference" for presentations, "grant" for fellowships and other funding lines, "award" for awarded accomplishments, and "art" for artistic project, installation, or show.
		title: 
		authors:
		conference: # for type:conference
		date: 
		doi: # this will provide the link to the work. You can also host .pdfs of your work on this site in the assets folder. Link it there: "./assets/pdf/[filename].pdf"
		code: # for type:essay, type:conference. This is meant to link to a code repo.
		page: # for type:essay, type:conference. This is meant to link to an external site that may not be official, like a blog post.
		notes:

### For Fellowships and Grants
		- type: grant # types include "essay" for peer-reviewed work, "conference" for presentations, "grant" for fellowships and other funding lines, "award" for awarded accomplishments, and "art" for artistic project, installation, or show.
		title: 
		authors: 
		date: 
		institution: # for type:award, type:grant
		amount: # for type:award, type:grant 
		awardedfor: # for type:award. This will let you write the specific project if applicable. Include "" for short work and <i></i> for books and films.
		notes:
    
### For Awards
		- type: award # types include "essay" for peer-reviewed work, "conference" for presentations, "grant" for fellowships and other funding lines, "award" for awarded accomplishments, and "art" for artistic project, installation, or show.
		title: 
		authors: 
		date: 
		institution: # for type:award, type:grant
		amount: # for type:award, type:grant
		awardedfor: # for type:award. This will let you write the specific project if applicable. Include "" for short work and <i></i> for books and films.
		notes:
    
#### For Artwork
		- type: art # types include "essay" for peer-reviewed work, "conference" for presentations, "grant" for fellowships and other funding lines, "award" for awarded accomplishments, and "art" for artistic project, installation, or show.
		title: 
		authors: 
		date: 
		image: #for type:essay, type:art. You will need to link to the file in your assets folder ./assets/img/[FILENAME].[FILETYPE]
		displayed: # for type:art. Refers to where and when the art piece was shown.
		notes:
