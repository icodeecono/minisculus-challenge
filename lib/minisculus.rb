require 'rubygems'
require 'sinatra'
require 'json'

get '/start' do
  redirect first_question_path, 303
end

get '/finish/:key' do
  return_json ending_data if params[:key] == ending_key
end

get '/:key' do
  return_json :question => question
end

put '/:key' do
  if correct_answer?
    redirect next_question_path, 303
  else
    halt 406
  end
end

helpers do
  def question
    question = find_question(params[:key])
    question[:question] if question
  end

  def answer
    question = find_question(params[:key])
    question[:answer] if question
  end

  def index(key)
    questions.index(find_question(key))
  end

  def find_question(key)
    questions.find { |q| q[:key] == key }
  end

  def first_question_path
    "/#{questions.first[:key]}"
  end

  def next_question_path
    if next_question
      "/#{next_question[:key]}"
    else
      "/finish/#{ending_key}"
    end
  end

  def ending_key
    settings.ending[:key]
  end

  def ending_data
    { :code => settings.ending[:code], :email => settings.ending[:email] }
  end
  
  def next_question
    next_question = questions[index(params[:key]) + 1]
  end

  def questions
    settings.questions
  end

  def return_json(data)
    content_type 'application/json'
    data.to_json
  end
  
  def correct_answer?
    answer == user_answer
  end

  def user_answer
    JSON.parse(request.env["rack.input"].read, :symbolize_names => true)[:answer]
  end
end
