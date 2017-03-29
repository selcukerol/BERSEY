require 'sinatra'
require 'sendgrid-ruby'
require 'ruby_http_client'
require 'sinatra/flash'

enable :sessions


 before do
 	@bodyclass = ' class="std"'
 end

 get '/' do
 	@bodyclass = ""
 erb :home	   

 end

 get '/aboutus' do

 erb :aboutus	   

 end

 get '/projects' do

 erb :projects	   

 end

 get '/contactus' do

 erb :contactus	   

 end

 post '/contactus' do

    p params
    p params[:email], params["email"]

    from = SendGrid::Email.new email: params[:email]
    subject = "Mail from #{params[:name]} #{params[:surname]} (#{params[:company]})"
    to = SendGrid::Email.new email: "selcuk_erol@hotmail.com"

    content = SendGrid::Content.new(
        type: 'text/plain',
        value: params[:comment] 
    )

    mail = SendGrid::Mail.new(from,subject,to,content)

    p mail

    sg = SendGrid::API.new( api_key: ENV['SENDGRID_API_KEY'])

    response = sg.client.mail._('send').post(request_body: mail.to_json)

    puts response.status_code
	puts response.body
	puts response.headers

    params.inspect
    flash[:confirm] = "We received your email, we will get back to you shortly"	
	redirect '/contactus'   

end	