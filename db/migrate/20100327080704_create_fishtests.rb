class CreateFishtests < ActiveRecord::Migration
  def self.up
    create_table :fishtests do |t|

      t.timestamps
    end
  end

  def self.down
    drop_table :fishtests
  end
end
