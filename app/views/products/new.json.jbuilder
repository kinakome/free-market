json.array! @middle_category do |category|
  json.id category.id
  json.genre category.genre
end

json.array! @small_category do |category|
  json.small_id category.id
  json.small_genre category.genre
end

if(@brands.present?)
  json.array! @brands do |brand|
    json.name brand.name
  end
end
