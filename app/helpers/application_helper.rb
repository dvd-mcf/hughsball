module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | Railstest"      
    end
  end
end
