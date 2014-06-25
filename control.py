'''
Created on 10/01/2014

Redireciona requests para os aquivos corretos

@author: luancorumba
'''

import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'external')) #insert libs

import webapp2
import jinja2
from webapp2_extras.routes import RedirectRoute

def guess_autoescape(template_name):
	if template_name is None or '.' not in template_name:
		return False
	ext = template_name.rsplit('.', 1)[1]
	return ext in ('html', 'htm', 'xml')

def datetimeformat(value, format='%H:%M / %d-%m-%Y'):
    return value.strftime(format)

JINJA_ENVIRONMENT = jinja2.Environment(
	autoescape=guess_autoescape,
	loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
	extensions=['jinja2.ext.autoescape'])
JINJA_ENVIRONMENT.filters['datetimeformat'] = datetimeformat

class MainPage(webapp2.RequestHandler):
	def get(self):
		template = JINJA_ENVIRONMENT.get_template('index.html')
		self.response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
		self.response.headers['Content-Type'] = 'text/html; charset=UTF-8'
		self.response.write(template.render({}))

config = {
	'webapp2_extras.auth': {
		'user_model': 'Models.Person',
		'user_attributes': ['email_address'],
		'cookie_name': 'session_name',
	},
	'webapp2_extras.sessions': {'secret_key': '@h@ppIne55'},
}

application = webapp2.WSGIApplication([
	RedirectRoute('/', handler=MainPage, name='index', strict_slash=True),
], debug=True, config=config)

def main():
	run_wsgi_app(application)

if __name__ == "__main__":
	main()
